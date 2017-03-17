import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import FontIcon from 'material-ui/FontIcon'
import Badge from 'material-ui/Badge';

class Actions extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      like:this.props.actions.like,
      dislike:this.props.actions.dislike,
      disabled:'false',
      choiceAction:''
    }
  }

  onLike = () => {
    let newLike = this.state.like+1;
    this.setState({
      like: newLike,
      disabled:'true'
    })
  }

  onDislike = () => {
    let newDisLike = this.state.dislike+1;
    this.setState({
      dislike: newDisLike,
      disabled:'true'
    })
  }


  render () {
    return(
      <div>
        <Badge
          badgeContent={this.state.like}
          secondary={true}
          badgeStyle={{top:8, right: 15,backgroundColor:'#95a5a6'}}
        >
        <FloatingActionButton
          secondary={true}
          onClick={this.onLike.bind(this)}
          mini={true}
          >
          <FontIcon className="material-icons">mood</FontIcon>
        </FloatingActionButton>
      </Badge>
      <Badge
          badgeContent={this.state.dislike}
          secondary={true}
          badgeStyle={{top: 8, right: 15,backgroundColor:'#95a5a6'}}
        >
        <FloatingActionButton
          onClick={this.onDislike.bind(this)}
          backgroundColor="#3498db"
          mini={true}
          >
          <FontIcon className="material-icons">sentiment_satisfied</FontIcon>
        </FloatingActionButton>
      </Badge>
      <Badge
          badgeContent={this.state.dislike}
          secondary={true}
          badgeStyle={{top: 8, right: 15,backgroundColor:'#95a5a6'}}
        >
        <FloatingActionButton
          onClick={this.onDislike.bind(this)}
          backgroundColor="#2ecc71"
          mini={true}
          >
          <FontIcon className="material-icons">sentiment_neutral</FontIcon>
        </FloatingActionButton>
      </Badge>
      <Badge
          badgeContent={this.state.dislike}
          secondary={true}
          badgeStyle={{top: 8, right: 15,backgroundColor:'#95a5a6'}}
        >
        <FloatingActionButton
          onClick={this.onDislike.bind(this)}
          backgroundColor="#e74c3c"
          mini={true}
          >
          <FontIcon className="material-icons">sentiment_dissatisfied</FontIcon>
        </FloatingActionButton>
      </Badge>
      <Badge
          badgeContent={this.state.dislike}
          secondary={true}
          badgeStyle={{top: 8, right: 15,backgroundColor:'#95a5a6'}}
        >
        <FloatingActionButton
          onClick={this.onDislike.bind(this)}
          mini={true}
          >
          <FontIcon className="material-icons">mood_bad</FontIcon>
        </FloatingActionButton>
      </Badge>
    </div>
    )
  }
}

export default Actions;
