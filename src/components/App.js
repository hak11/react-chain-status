import React from 'react';
import MainForm from './form/Index';
import MainNav from './MainNav';
import Message from './message/Index';

class App extends React.Component {
  constructor(props) {
    super(props);
    const nowMessage = [
          ]

    this.state = {
        message: nowMessage,
        show:""
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
      alert('please complete subject / message')
    }
  }
  render () {
    return (
      <div className="container">
        <MainNav />
        <div className="row">
          <div className="col-md-offset-3 col-md-6">
            <MainForm onAdd={this.onPlayerAdd.bind(this)} />
          </div>
        </div>
        <hr />
        <div className="row">
          {
            this.state.message.map( (nowMessage) => {
            return (
              <Message key={Math.random()} name={nowMessage.name} create={nowMessage.create} subject={nowMessage.subject} message={nowMessage.message} />
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default App;
