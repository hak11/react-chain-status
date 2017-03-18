import React from 'react'
import {Card, CardActions,CardHeader,CardMedia, CardText} from 'material-ui/Card'
import Actions from './Actions'
import Toggle from 'material-ui/Toggle'

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  render () {
      return(
        <Card style={{ margin:30,padding:30 }} expanded={this.state.expanded} onExpandChange={this.handleExpandChange} >
          <CardText>
            <div className="row">
              <div className="col-md-9">
                <CardHeader
                  title={this.props.name}
                  subtitle={this.props.create+" | "+this.props.subject}
                  avatar="http://placehold.it/128x128"
                  style={{paddingTop:0}}
                />
              </div>
              <div className="col-md-3">
                <Toggle
                  toggled={this.state.expanded}
                  onToggle={this.handleToggle}
                  style={{marginTop:-18}}
                  label="Show Image"
                  labelPosition="right"
                />
                <Toggle
                  toggled={this.state.expanded}
                  onToggle={this.handleToggle}
                  label="Show Comment"
                  labelPosition="right"
                />
              </div>
            </div>
            {this.props.message}
          </CardText>
          <CardMedia
            expandable={true}
            style={{textAlign:'center'}}
          >
            <img src="http://placehold.it/600x337" alt={this.props.subject} style={{maxHeight:300,maxWidth:'none',minWidth:'none',width:'initial'}} />
          </CardMedia>
          <CardActions>
            <Actions handleToggle={this.handleToggle} actions={this.props.actions} />
          </CardActions>
        </Card>
      )
  }
}

export default Message
