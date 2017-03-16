import React from 'react'
import FormGroupInput from './FormGroupInput'
import FormGroupTextarea from './FormGroupTextarea'
import Button from './Button'


class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        valueName: "",
        valueSubject: "",
        valueMessage: ""
    }
  }
  onNameChange(event) {
    this.setState({
      valueName: event.target.value
    })
  }
  onSubjectChange(event){
    this.setState({
      valueSubject: event.target.value
    })
  }
  onStatusChange(event){
    this.setState({
      valueMessage: event.target.value
    })
  }
  onClickForm(){
    this.props.onAdd(this.state)
    this.setState({
        valueName: "",
        valueSubject: "",
        valueMessage: ""
    })
  }
  render () {
    return (
      <div className="panel panel-success">
        <div className="panel-heading">
          <h3 className="panel-title">Add Status</h3>
        </div>
        <div className="panel-body">
        <form className="form-horizontal">
          <FormGroupInput field="name" placeholder="Your Name" value={this.state.valueName} onInputChange={this.onNameChange.bind(this)} />
          <FormGroupInput field="subject" placeholder="Your Subject" value={this.state.valueSubject} onInputChange={this.onSubjectChange.bind(this)} />
          <FormGroupTextarea field="message" placeholder="Your Message" value={this.state.valueMessage} onInputChange={this.onStatusChange.bind(this) } />
          <Button onClickSomething={this.onClickForm.bind(this)} />
        </form>
      </div>
      </div>
    )
  }
}

export default Index
