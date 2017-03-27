import React from 'react';
import MainForm from './form/Index';
import Message from './message/Message';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        message: [],
        comments: [],
        show:"",
        alert:false
    }

  }

  componentWillMount(){
    let that = this;
    axios.get('/forum')
      .then(function (response) {
        let message = response.data;
        that.setState({message})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  dataComments(comments){
    let data
    Object.values(comments).map((comment) => {
      return (
        data = Object.values(comments)
      )
    })

    if (data) {
        return data
    }
    return this.state.comments;
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
          message:myData.valueMessage,
          actions:{
            like:0,
            middle_like:0,
            middle:0,
            middle_dislike:0,
            dislike:0
          },
          comments:[

          ]
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
      <div className="container-fluid" style={{fontFamily:"Roboto"}}>
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
                comments={this.dataComments(nowMessage.comments)}
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
