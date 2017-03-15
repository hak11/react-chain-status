import React from 'react'

const capitalize = (s) => {
  return s.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
}

const FormGroupInput = React.createClass({
  render () {
    return (
      <div className="form-group">
        <label className="control-label col-sm-3" htmlFor={this.props.field}>{capitalize(this.props.field)}</label>
        <div className="col-md-9">
          <input type="text" className="form-control" placeholder={this.props.placeholder} value={this.props.value}  disabled={this.props.disabled} />
        </div>
      </div>
    )
  }
})

export default FormGroupInput
