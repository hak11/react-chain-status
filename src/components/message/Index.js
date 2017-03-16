import React from 'react'

const Message = React.createClass({
  render () {
    return (
        <div className="col-md-6">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">{this.props.create}</h3>
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="col-md-4">
                  {this.props.name}
                </div>
                <div className="col-md-8">
                  {this.props.subject}
                </div>
                <div className="col-md-12">
                  <hr />
                  {this.props.message}
                </div>
              </div>
          </div>
          </div>
        </div>
    )
  }
})

export default Message
