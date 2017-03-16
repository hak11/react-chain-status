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
        message: nowMessage
    }

  }
  onPlayerAdd(myData){
    let dataName = "Anonymous"
    let last_message = this.state.message
    if (myData.valueName) {
      dataName=myData.valueName
    }
    last_message.push(
      {
        create:"2016-05-25",
        name:dataName,
        subject:myData.valueSubject,
        message:myData.valueMessage
      }
    )
    this.setState({
      message: last_message
    })
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
