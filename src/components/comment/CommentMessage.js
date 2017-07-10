import React from 'react';
import {Card, CardText,CardHeader,CardActions} from 'material-ui/Card';
import Actions from '../message/Actions';
import Message from '../message/Message';

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

  componentWillMount(){
    console.log(this.props);
  }

  handleResponseAct(){
    this.setState({
      choiceAction:false
    });
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
      />;
    });
  }

  commentListItem(){
    if (this.props.comments.length) {
      return this.props.comments.map((value,key) => {
        return (
          <Message
            key={key}
            actions={value.actions}
            name={value.name}
            message={value.message}
            create={value.created_at}
            comments={value.comments}
          />
        );
      });
    }
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
        <Card
          zDepth={1}
        >
          {
            this.commentListItem()
          }
        </Card>
      </Card>
    );
  }
}

export default CommentMessage;
