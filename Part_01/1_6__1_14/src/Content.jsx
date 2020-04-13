import React from 'react'
import Part from './Part'

const Content = props => {
  return (
    <>
      <Part text={props.text[0].name} exercises={props.text[0].exercises} />
      <Part text={props.text[1].name} exercises={props.text[1].exercises} />
      <Part text={props.text[2].name} exercises={props.text[2].exercises} />
    </>
  )
}
export default Content
