import React from 'react';
import MainForm from './form/Index';
import Message from './message/Message';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { fetchMessage,addMessage } from '../actions/MessageAction';
import { closeDialog,errorMessage } from '../actions/DataControlAction';

class App extends React.Component {
  componentWillMount(){
    this.props.fetchMessage();
  }

  statusListItems() {
    if (this.props.dataComments.commentOpen) {
      return this.props.dataComments.comments.map((value, key) => {
        return (
          <div className='col-md-8 col-md-offset-2' key={key}>
            <Message
              name={value.name}
              create={value.created_at}
              subject={value.subject}
              message={value.message}
              actions={value.actions}
              comments={value.comments}
            />
          </div>
        );
      });
    }
  }


  onPlayerAdd(myData){
    let err = false;
    let dataName = 'Anonymous';
    // let date = new Date().toJSON().slice(0,10).replace(/-/g,'/');

    if (myData.valueName) {
      dataName=myData.valueName;
    }
    if(!myData.valueSubject){
      this.props.errorMessage();
      err = true;
    }
    if(!myData.valueMessage){
      this.props.errorMessage();
      err = true;
    }
    if (!err) {
      this.props.addMessage(dataName,myData);
    } else {
      this.props.closeDialog();
    }
  }


  handleClose(){
    this.setState({alert: false});
  }

  render () {
    const actions = [
      <FlatButton
        key=''
        label="Ok"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];

    return (
      <div className="container-fluid" style={{fontFamily:'Roboto'}}>
        <div className="row center-md">
          <div className="col-md-4">
            <MainForm onAdd={this.onPlayerAdd.bind(this)} />
          </div>
        </div>
        <br />

        <div className="row">
          {
            this.statusListItems()
          }
        </div>

        <Dialog
          actions={actions}
          modal={false}
          open={this.props.dataComments.notifRequired}
          onRequestClose={this.handleClose}
        >
        please complete subject / message
        </Dialog>
      </div>
    );
  }
}


const mapStateToProps = (store) => {
  const currentState = {
    dataComments:store.commentsReducer
  };
  return currentState;
};


const $connect = connect(mapStateToProps, {
  fetchMessage,
  closeDialog,
  addMessage,
  errorMessage
});


export default $connect(App);
