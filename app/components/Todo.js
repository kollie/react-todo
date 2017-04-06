'use strict'

import React from 'react'

export default class Todo extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let {id, text} = this.props
    return (
      <div>
        {id}. {text}
      </div>
    )
  }
}
