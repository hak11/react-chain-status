import React from 'react'
import ButtonAction from './ButtonActions';

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
      choiceAction:true
    }
  }

  onDisableWithout = (param,newValue) =>{
    if (this.state.choiceAction) {
      this.setState({
        disableLike:true,
        disableMiddleLike:true,
        disableMiddle:true,
        disableMiddleDislike:true,
        disableDislike:true,
        choiceAction:false
      })
      console.log(param)
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
            disableDislike:false,
            dislike:newValue
          })
          break;
        default:
      }
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
        <ButtonAction
          onClick={this.onLike.bind(this)}
          value={this.state.like}
          disable={this.state.disableLike}
          icon='mood'
          bgColor='#1abc9c'
        />
        <ButtonAction
          onClick={this.onMiddleLike.bind(this)}
          value={this.state.middle_like}
          disable={this.state.disableMiddleLike}
          icon='sentiment_satisfied'
          bgColor='#2ecc71'
        />
        <ButtonAction
          onClick={this.onMiddle.bind(this)}
          value={this.state.middle}
          disable={this.state.disableMiddle}
          icon='sentiment_neutral'
          bgColor='#3498db'
        />
        <ButtonAction
          onClick={this.onMiddleDislike.bind(this)}
          value={this.state.middle_dislike}
          disable={this.state.disableMiddleDislike}
          icon='sentiment_dissatisfied'
          bgColor='#e67e22'
        />
        <ButtonAction
          onClick={this.onDislike.bind(this)}
          value={this.state.dislike}
          disable={this.state.disableDislike}
          icon='mood_bad'
          bgColor='#e74c3c'
        />
    </div>
    )
  }
}

export default Actions;
