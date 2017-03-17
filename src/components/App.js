import React from 'react';
import MainForm from './form/Index';
import Message from './message/Message';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    const nowMessage = [
      {
       id:1,
       create:"2016-05-25",
       name:"hakim",
       subject:"Ini Adalah Subject A",
       message:"Ini Adalah Message A",
       actions:{
         like:0,
         dislike:0
       }
     },
      {
       id:2,
       create:"2016-05-25",
       name:"hakim",
       subject:"Ini Adalah Subject A",
       message:"Ini Adalah Message A",
       actions:{
         like:0,
         dislike:0
       }
     },
      {
       id:3,
       create:"2016-05-25",
       name:"hakim",
       subject:"Ini Adalah Subject A",
       message:"Ini Adalah Message A",
       actions:{
         like:0,
         dislike:0
       }
     },
    ]

    this.state = {
        message: nowMessage,
        show:"",
        alert:false
    }

  }
  

  onPlayerAdd(myData){
    let err;
    let dataName = "Anonymous"
    let date = new Date().toJSON().slice(0,10).replace(/-/g,'/')
    let last_message = this.state.message

    if (myData.valueName) {
      dataName=myData.valueName
    }
    if(!myData.valueSubject){
      err = true;
    }
    if(!myData.valueMessage){
      err = true;
    }

    if (!err) {
      last_message.push(
        {
        id: last_message.length+1,
        create: date,
        name:dataName,
        subject:myData.valueSubject,
        message:myData.valueMessage
        }
      )

      this.setState({
        message: last_message
      })
    } else {
      this.setState({alert: true});
    }
  }
  handleClose = () => {
   this.setState({alert: false});
 };
  render () {
    const actions = [
     <FlatButton
       label="Ok"
       primary={true}
       onTouchTap={this.handleClose}
     />
   ];

   return (
      <div className="container-fluid">
        <div className="row center-md">
          <div className="col-md-4">
              <MainForm onAdd={this.onPlayerAdd.bind(this)} />
          </div>
        </div>
        <br />

        <div className="row">
        {
          this.state.message.map( (nowMessage) => {
          return (
            <div className='col-md-8 col-md-offset-2' key={nowMessage.id}>
              <Message
                name={nowMessage.name}
                create={nowMessage.create}
                subject={nowMessage.subject}
                message={nowMessage.message}
                actions={nowMessage.actions}
              />
            </div>
            )
          })
        }
        </div>


        <Dialog
          actions={actions}
          modal={false}
          open={this.state.alert}
          onRequestClose={this.handleClose}
        >
        please complete subject / message
        </Dialog>
      </div>
    )
  }
}

export default App;
