import React from 'react';
import {Card, CardActions,CardHeader,CardMedia, CardText} from 'material-ui/Card';
import Actions from './Actions';
import Toggle from 'material-ui/Toggle';
import CommentMessage from '../comment/CommentMessage';
import Comments from '../comment';
import MyImage from '../../../public/img/bg.jpg';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showImage: false,
      choiceAction: true,
      comments:[],
      actions:[]
    };

  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
  }


  commentListItem(){
    if (this.props.comments.length > 12323) {
      return this.props.comments.map((value,key) => {
        return (
          <CommentMessage
            key={key}
            actions={value.actions}
            name={value.name}
            message={value.message}
            create={value.created_at}
          />
        );
      });
    }
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

  handleToggleImage(event, toggle){
    this.setState(
      {
        showImage: toggle
      }
    );
  }

  handleResponseAct(){
    this.setState({
      choiceAction:false
    });
  }

  render () {
    return(
      <Card style={{ margin:30,padding:30 }} expanded={this.state.showImage}>
        <CardText>
          <div className="row">
            <div className="col-md-9">
              <CardHeader
                title={this.props.name}
                subtitle={this.props.create+' | '+this.props.subject}
                style={{paddingTop:0,paddingLeft:0}}
              />
            </div>
            <div className="col-md-3">
              <Toggle
                toggled={this.state.showImage}
                onToggle={this.handleToggleImage}
                style={{marginTop:10}}
                label="Show Image"
                labelPosition="right"
              />
            </div>
            <div className="col-md-12">
              <br />
              {this.props.message}
            </div>
          </div>
        </CardText>
        <CardMedia
          style={{textAlign:'center',margin:15}}
          expandable={true}
        >
          <img src={MyImage}
            alt={this.props.subject}
            style={{maxHeight:300,maxWidth:'none',minWidth:'none',width:'initial'}}
          />
        </CardMedia>
        <CardActions style={{margin:15}}>
          {
            this.actionsListItem()
          }
        </CardActions>
        <CardMedia
          style={ !this.state.choiceAction ? {margin:50} : {display:'none'}}
        >
          <Comments />
        </CardMedia>
        <Card
          zDepth={1}
          style={{marginTop:10,marginBottom:10,padding:20,backgroundColor:'#FAFAFA',margin:50}}
        >
          {
            this.commentListItem()
          }
        </Card>
      </Card>
    );
  }
}

export default Message;
