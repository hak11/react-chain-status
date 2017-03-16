import React from 'react'

const capitalize = (s) => {
  return s.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
}

const FormGroupTextarea = React.createClass({
  render () {
    return (
      <div className="form-group">
        <label className="control-label col-sm-3" htmlFor={this.props.field}>{capitalize(this.props.field)}</label>
        <div className="col-md-9">
          <textarea className="form-control" rows="8" cols="80" placeholder={this.props.placeholder} onChange={this.props.onInputChange} value={this.props.value} disabled={this.props.disabled} >

          </textarea>
        </div>
      </div>
    )
  }
})

export default FormGroupTextarea
