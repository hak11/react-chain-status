import React from 'react';
import MainForm from './form/Index';
import MainNav from './MainNav';
import Message from './message/Index';


class App extends React.Component {
  constructor(props) {
    super(props);
    const nowMessage = [
      {
        create: "2016-05-10",
        name: "Saya A",
        subject : "Subject A",
        message : "Ini Message A"
      },
      {
        create: "2016-05-09",
        name: "Saya B",
        subject : "Subject B",
        message : "Ini Message B"
      },
      {
        create: "2016-05-08",
        name: "Saya C",
        subject : "Subject C",
        message : "Ini Message C"
      },
      {
        create: "2016-05-05",
        name: "Saya D",
        subject : "Subject D",
        message : "Ini Message D"
      }
    ]

    this.state = {nowMessage}
  }
  onPlayerAdd(myData){
    console.log(myData)
  }
  render () {
    return (
      <div className="container">
        <MainNav />
        <div className="row">
          <div className="col-md-offset-3 col-md-6">
            <MainForm onAdd={this.onPlayerAdd} />
          </div>
        </div>
        <hr />
        <div className="row">
          {
            this.state.nowMessage.map( (nowMessage) => {
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
