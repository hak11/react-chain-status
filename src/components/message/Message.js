import React from 'react'
import {Card, CardActions,CardHeader,CardMedia, CardText} from 'material-ui/Card'
import Actions from './Actions'
import Toggle from 'material-ui/Toggle'
import Comments from '../comment'

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showImage: false,
    };
  }

  handleToggleImage = (event, toggle) => {
    if (this.state.show) {

    }
    this.setState(
      {
        showImage: toggle
      }
    );
  };

  render () {
      return(
        <Card style={{ margin:30,padding:30 }} expanded={this.state.showImage}>
          <CardText>
            <div className="row">
              <div className="col-md-9">
                <CardHeader
                  title={this.props.name}
                  subtitle={this.props.create+" | "+this.props.subject}
                  style={{paddingTop:0}}
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
            <img src="http://placehold.it/600x337" alt={this.props.subject} style={{maxHeight:300,maxWidth:'none',minWidth:'none',width:'initial'}} />
          </CardMedia>
          <CardActions style={{margin:15}}>
            <Actions handleToggle={this.handleToggle} actions={this.props.actions} />
          </CardActions>
          <CardMedia
            style={{marginTop:50}}
            >
            <Comments />
          </CardMedia>
        </Card>
      )
  }
}

export default Message
