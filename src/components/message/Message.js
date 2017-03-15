import React from 'react'
import FormGroupInput from '../form/FormGroupInput'
import FormGroupTextarea from '../form/FormGroupTextarea'

const Message = React.createClass({
  render () {
    return (
        <div className="col-md-6">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">{this.props.create}</h3>
            </div>
            <div className="panel-body">
              <form className="form-horizontal">
              <FormGroupInput field="name" value={this.props.name} disabled />
              <FormGroupInput field="subject" value={this.props.subject} disabled />
              <FormGroupTextarea field="message" value={this.props.message} disabled />
              </form>
          </div>
          </div>
        </div>
    )
  }
})

export default Message
