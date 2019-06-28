import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'
import { settings } from 'carbon-components'
import { 
  accordionGroupHeader,
  accordionGroupWrapper,
  noGutter 
} from './AccordionGroup.module.scss'

const { prefix } = settings

const AccordionGroup = ({ children, className, title, ...rest }) => {
  return (
    <div className={`${accordionGroupWrapper} ${className}`}>
      { typeof title !== 'undefined' ? (
        <h3 className={`${accordionGroupHeader} ${prefix}--type-semibold`}>
          {title}
        </h3>
      ) : ( null )}
      <div className={noGutter}>{children}</div>
    </div>
  )
}

AccordionGroup.propTypes = {
  /**
   * Pass in the children that will be rendered within the AccordionGroup
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the container node
   */
  className: PropTypes.string,

  /**
   * Specify a title for this group of Accordion components
   */
  title: PropTypes.string,

}

export default AccordionGroup
