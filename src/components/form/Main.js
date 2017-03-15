import React from 'react'
import FormGroupInput from './FormGroupInput'
import FormGroupTextarea from './FormGroupTextarea'

const Main = React.createClass({
  render () {
    return (
      <div className="panel panel-success">
        <div className="panel-heading">
          <h3 className="panel-title">Add Status</h3>
        </div>
        <div className="panel-body">
          <form className="form-horizontal">
          <FormGroupInput field="name" placeholder="Your Name" />
          <FormGroupInput field="subject" placeholder="Your Subject" />
          <FormGroupTextarea field="message" placeholder="Your Message"/>
          </form>
      </div>
      </div>
    )
  }
})

export default Main
