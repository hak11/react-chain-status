import React from 'react'

class Button extends React.Component {
  render () {
    return(
      <div className="form-group">
        <div className="col-md-9 col-md-offset-3">
          <button className="btn btn-success" type="button" onClick={this.props.onClickSomething} >Submit Status</button>
        </div>
      </div>
    )
  }
}

export default Button;
