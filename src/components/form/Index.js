import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formName: '',
      formSubject: '',
      formMessage: ''
    };
  }

  onNameChange(event) {
    this.setState({
      formName: event.target.value
    });
  }
  onSubjectChange(event){
    this.setState({
      formSubject: event.target.value
    });
  }
  onStatusChange(event){
    this.setState({
      formMessage: event.target.value
    });
  }
  onClickForm(){
    this.props.onAdd(this.state);
    this.setState({
      formName: '',
      formSubject: '',
      formMessage: ''
    });
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
                defaultValue={this.state.formMessage}
                fullWidth={true}
              />
            </div>
            <div className="col-md-6">
              <TextField
                hintText="Anonymous"
                floatingLabelText="Nama *Anonymous*"
                onChange={this.onNameChange.bind(this)}
                defaultValue={this.state.formName}
                fullWidth={true}
              />
            </div>
            <div className="col-md-6">
              <TextField
                hintText="Your Subject"
                floatingLabelText="Subject"
                onChange={this.onSubjectChange.bind(this)}
                defaultValue={this.state.formSubject}
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
    );
  }
}

export default Index;
