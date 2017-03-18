import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import FontIcon from 'material-ui/FontIcon'
import Badge from 'material-ui/Badge';

class Actions extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      like:this.props.actions.like,
      middle_like:this.props.actions.middle_like,
      middle:this.props.actions.middle,
      middle_dislike:this.props.actions.middle_dislike,
      dislike:this.props.actions.dislike,
      disableLike:false,
      disableMiddleLike:false,
      disableMiddle:false,
      disableMiddleDislike:false,
      disableDislike:false,
      choiceAction:''
    }
  }

  onDisableWithout = (param,newValue) =>{
    this.setState({
      disableLike:true,
      disableMiddleLike:true,
      disableMiddle:true,
      disableMiddleDislike:true,
      disableDislike:true
    })
    switch (param) {
      case 'like':
        this.setState({
          disableLike:false,
          like:newValue
        })
        break;
      case 'middle_like':
        this.setState({
          disableMiddleLike:false,
          middle_like:newValue
        })
        break;
      case 'middle':
        this.setState({
          disableMiddle:false,
          middle:newValue
        })
        break;
      case 'middle_dislike':
        this.setState({
          disableMiddleDislike:false,
          middle_dislike:newValue
        })
        break;
      case 'dislike':
        this.setState({
          disableLike:false,
          dislike:newValue
        })
        break;
      default:

    }
  }

  onLike = () => {
    let newLike = this.state.like+1;
    this.onDisableWithout('like',newLike);
  }

  onMiddleLike = () => {
    let newMiddleLike = this.state.middle_like+1;
    this.onDisableWithout('middle_like',newMiddleLike);
  }

  onMiddle = () => {
    let newMiddle = this.state.middle+1;
    this.onDisableWithout('middle',newMiddle);
  }

  onMiddleDislike = () => {
    let newMiddleDislike = this.state.middle_dislike+1;
    this.onDisableWithout('middle_dislike',newMiddleDislike);
  }

  onDislike = () => {
    let newDisLike = this.state.dislike+1;
    this.onDisableWithout('dislike',newDisLike);
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
          disabled={this.state.disableLike}
          >
          <FontIcon className="material-icons">mood</FontIcon>
        </FloatingActionButton>
      </Badge>
      <Badge
          badgeContent={this.state.middle_like}
          secondary={true}
          badgeStyle={{top: 8, right: 15,backgroundColor:'#95a5a6'}}
        >
        <FloatingActionButton
          backgroundColor="#3498db"
          onClick={this.onMiddleLike.bind(this)}
          mini={true}
          disabled={this.state.disableMiddleLike}
          >
          <FontIcon className="material-icons">sentiment_satisfied</FontIcon>
        </FloatingActionButton>
      </Badge>
      <Badge
          badgeContent={this.state.middle}
          secondary={true}
          badgeStyle={{top: 8, right: 15,backgroundColor:'#95a5a6'}}
        >
        <FloatingActionButton
          onClick={this.onMiddle.bind(this)}
          backgroundColor="#2ecc71"
          mini={true}
          disabled={this.state.disableMiddle}
          >
          <FontIcon className="material-icons">sentiment_neutral</FontIcon>
        </FloatingActionButton>
      </Badge>
      <Badge
          badgeContent={this.state.middle_dislike}
          secondary={true}
          badgeStyle={{top: 8, right: 15,backgroundColor:'#95a5a6'}}
        >
        <FloatingActionButton
          onClick={this.onMiddleDislike.bind(this)}
          backgroundColor="#e74c3c"
          mini={true}
          disabled={this.state.disableMiddleDislike}
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
          disabled={this.state.disableDislike}
          >
          <FontIcon className="material-icons">mood_bad</FontIcon>
        </FloatingActionButton>
      </Badge>
    </div>
    )
  }
}

export default Actions;
