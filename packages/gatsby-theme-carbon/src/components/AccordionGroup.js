import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'
import { settings } from 'carbon-components'

const { prefix } = settings

const AccordionGroupHeader = styled.h3`
  margin-left: -1rem;
  margin-right: -1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #FFFFFF;
  font-size: 1rem;
`

const AccordionGroupSection = styled.div`
  margin-bottom: 3rem;
`

const NoGutter = styled.div`
  margin-left: -1rem;
  margin-right: -1rem;
  width: auto;
`

const AccordionGroup = ({ children, className, title, ...rest }) => {
  return (
    <AccordionGroupSection {...rest} className={className}>
      { typeof title !== 'undefined' ? (
        <AccordionGroupHeader className={`${prefix}--type-semibold`}>
          {title}
        </AccordionGroupHeader>
      ) : ( null )}
      <NoGutter>{children}</NoGutter>
    </AccordionGroupSection>
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
