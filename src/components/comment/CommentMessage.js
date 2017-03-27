import React from 'react'
import {Card, CardText,CardHeader,CardActions} from 'material-ui/Card';
import Actions from '../message/Actions'

class CommentMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choiceAction: false,
      name:this.props.mydata.name,
      create:'',
      message:''
    };
  }

  componentWillReceiveProps(nextProps){
    console.log(this.props, nextProps)
    if (!this.props.mydata) {
      return;
    }

    this.setState({
      choiceAction:true,
      name:this.props.mydata.name,
      create:this.props.mydata.create,
      message:this.props.mydata.message
    })
  }

  handleResponseAct = () => {
    this.setState({
      choiceAction:false
    })
  }
  render () {
    return(
      <Card
        zDepth={1}
        style={{marginTop:15,marginBottom:10}}
        >
        <CardHeader
          title={this.state.name}
          subtitle={this.state.create}
        />
       <CardText>
         <p>{this.state.message}</p>
       </CardText>
       <CardActions style={{margin:15}}>
         <Actions
           actions={this.props.actions}
           choiceAction={this.state.choiceAction}
           handleAction={this.handleResponseAct.bind(this)}
         />
       </CardActions>
      </Card>
    )
  }
}

export default CommentMessage;
