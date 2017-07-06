import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import Badge from 'material-ui/Badge';

class Actions extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value:0,
      bgcolor:'',
      param_action:''
    };
  }
  onClickAction(){
    this.setState({
      value:this.state.value+1
    });
  }

  componentWillMount(){
    this.setState({
      value:this.props.value,
      bgcolor:this.props.bgcolor,
      param_action:this.props.icon
    });
  }

  render () {
    return(
      <Badge
        key={Math.random()}
        onClick={this.onClickAction.bind(this)}
        badgeContent={this.state.value}
        secondary={true}
        badgeStyle={{top:8, right: 15,backgroundColor:'#95a5a6'}}
      >
        <FloatingActionButton
          backgroundColor={this.state.bgcolor}
          mini={true}
          disabled={false}
        >
          <FontIcon className="material-icons">{this.state.param_action}</FontIcon>
        </FloatingActionButton>
      </Badge>
    );
  }
}

export default Actions;
