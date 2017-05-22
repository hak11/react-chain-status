import React from 'react'
import {Card, CardText,CardHeader,CardActions} from 'material-ui/Card';
import Actions from '../message/Actions'

class CommentMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choiceAction: true,
      name:this.props.name,
      create:this.props.create,
      message:this.props.message
    };
  }

  handleResponseAct = () => {
    this.setState({
      choiceAction:false
    })
  }

  actionsListItem(){
    return this.props.actions.map((value,key) => {
      return <Actions
        key={key}
        icon={value.param_action}
        value={value.countAction}
        bgcolor={value.bgcolor}
        choiceAction={this.state.choiceAction}
        handleAction={this.handleResponseAct.bind(this)}
      />
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
         {
           this.actionsListItem()
         }
       </CardActions>
      </Card>
    )
  }
}

export default CommentMessage;
