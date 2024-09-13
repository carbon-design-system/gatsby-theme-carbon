import React, { memo, useCallback, useEffect, useState } from 'react';
import { useLocation } from '@reach/router';
import { Theme, TreeNode, TreeView } from '@carbon/react';
import { Link } from 'gatsby';

import cx from 'classnames';
import slugify from 'slugify';
import PropTypes from 'prop-types';
import * as styles from './LeftNavTree.module.scss';
import { dfs } from '../../util/NavTree';

import LeftNavResourceLinks from './ResourceLinks';

const LeftNavTree = ({ items, theme, pathPrefix }) => {
  const [itemNodes, setItemNodes] = useState([]);
  const [treeActiveItem, setTreeActiveItem] = useState({});
  const [activePath, setActivePath] = useState('');
  const location = useLocation();

  const themeValue = theme === 'dark' ? 'g100' : theme;

  useEffect(() => {
    const newItemNodeArray = [];
    // method to set isBranch value for branch nodes
    const assignNodeType = (item) => {
      // branch node with more than 1 leaf nodes
      if (item.pages && item.pages.length > 1) {
        item.isBranch = true;
        item.pages.forEach((SubNavItem, i) => assignNodeType(SubNavItem));
      }
      // if it is branch node with only one leaf node, convert it to a leaf node
      else if (item.pages && item.pages.length) {
        item.path = item.pages[0].path;
        item.pages = null;
      }
      return item;
    };

    items.forEach((item) => {
      newItemNodeArray.push(assignNodeType(item));
    });

    // Create hierarchical, unique node ids for all nodes in the nav tree
    dfs(newItemNodeArray, (evalNode) => {
      if (!evalNode.parentNodeId) {
        evalNode.parentNodeId = 'left_nav_tree';
      }

      // Combine the parent's node id with the current node's id
      const currentNodeId = evalNode.title
        .toLocaleLowerCase()
        .replace(/\s/g, '');
      evalNode.id = `${evalNode.parentNodeId}_${currentNodeId}`;

      // Set the parent node id of each child of this node to the newly generated id
      evalNode.pages?.forEach((child) => {
        child.parentNodeId = evalNode.id;
      });

      return false;
    });

    setItemNodes(newItemNodeArray);
  }, [items]);

  useEffect(() => {
    const stripTrailingSlash = (str) =>
      str.endsWith('/') ? str.slice(0, -1) : str;
    const base = pathPrefix
      ? location.pathname.replace(pathPrefix, '')
      : location.pathname;
    setActivePath(stripTrailingSlash(base));
  }, [location.pathname, pathPrefix]);

  const getItemPath = (item) =>
    item.path || slugify(item.title, { lower: true, strict: true });

  const removeHashAndQuery = (path) => path?.split('?')?.[0]?.split('#')?.[0];

  const isTreeNodeActive = useCallback(
    (node) => getItemPath(node) === removeHashAndQuery(activePath),
    [activePath]
  );

  const isTabActive = useCallback(
    (node) => {
      const pathname = removeHashAndQuery(activePath);
      const tabRootPath = pathname.split('/').slice(0, -1).join('/');

      const isActive =
        node.path?.split('/').slice(0, -1).join('/') === tabRootPath;

      return isActive;
    },
    [activePath]
  );

  useEffect(() => {
    if (activePath) {
      let activeNode = dfs(itemNodes, isTreeNodeActive);
      if (!activeNode) {
        activeNode = dfs(itemNodes, isTabActive);
      }
      setTreeActiveItem(activeNode);
    }
  }, [isTreeNodeActive, itemNodes, isTabActive, activePath]);

  const isTreeNodeExpanded = (node) =>
    !!dfs([node], (evalNode) =>
      evalNode.pages?.some((page) => page.id === treeActiveItem?.id)
    );

  function renderTree({ nodes }) {
    if (!nodes) {
      return;
    }
    return nodes.map((node) => {
      let label = node.title;

      if (node.path) {
        label = (
          <Link
            to={node.path}
            className={styles.anchor}
            // tabIndex={visible ? 0 : '-1'}
          >
            {node.title}
          </Link>
        );
      }

      return (
        <TreeNode
          id={node.id}
          key={node.id}
          label={label}
          value={node.title}
          isExpanded={isTreeNodeExpanded(node)}
          className={cx({
            'cds--tree-node--active': node.id === treeActiveItem?.id,
            'cds--tree-node--selected': node.id === treeActiveItem?.id,
            [styles.divider]: node.hasDivider,
          })}
          onSelect={() => {
            node.path && setTreeActiveItem(node);
          }}>
          {node.isBranch &&
            renderTree({
              nodes: node.pages,
            })}
        </TreeNode>
      );
    });
  }

  return (
    <Theme className={styles.container} theme={themeValue}>
      <TreeView label="Side navigation" hideLabel>
        {renderTree({ nodes: itemNodes })}
        <LeftNavResourceLinks />
      </TreeView>
    </Theme>
  );
};

LeftNavTree.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string,
      pages: PropTypes.array,
      hasDivider: PropTypes.bool,
    })
  ),
};

const areEqual = (prevProps, nextProps) => true;

export default memo(LeftNavTree, areEqual);
