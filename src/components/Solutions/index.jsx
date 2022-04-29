import React from 'react'
import * as C from './styles'

export const Solutions = (props) => {
  return (
    <C.Container>
        <img src={props.img}  />
        <h5>{props.title}</h5>
        <span>{props.describe}</span>
    </C.Container>
  )
}
