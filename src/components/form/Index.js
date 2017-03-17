import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

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
        <Card zDepth={1} >
         <CardTitle title="Chain Status Message" subtitle="lets make the world better with technology" />
         <CardText>
          <form className="row">
            <div className="col-md-12">
               <TextField
                 style={{textAlign: 'left'}}
                 hintText="Your Status Message"
                 floatingLabelText="Message / Status"
                 multiLine={true}
                 rows={2}
                 onChange={this.onStatusChange.bind(this)}
                 defaultValue={this.state.valueMessage}
                 fullWidth={true}
               />
             </div>
              <div className="col-md-6">
                 <TextField
                   hintText="Anonymous"
                   floatingLabelText="Nama *Anonymous*"
                   onChange={this.onNameChange.bind(this)}
                   defaultValue={this.state.valueName}
                   fullWidth={true}
                 />
              </div>
              <div className="col-md-6">
               <TextField
                 hintText="Your Subject"
                 floatingLabelText="Subject"
                 onChange={this.onSubjectChange.bind(this)}
                 defaultValue={this.state.valueSubject}
                 fullWidth={true}
               />
               </div>
               <div className="col-md-12">
                 <br />
                 <RaisedButton
                   label="Submit Message"
                   primary={true}
                   onClick={this.onClickForm.bind(this)}
                  />
               </div>
           </form>
        </CardText>
       </Card>
    )
  }
}

export default Index
