import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import FontIcon from 'material-ui/FontIcon'
import Badge from 'material-ui/Badge';

class ButtonActions extends React.Component {
  render () {
    return(
      <Badge
          badgeContent={this.props.value}
          secondary={true}
          badgeStyle={{top:8, right: 15,backgroundColor:'#95a5a6'}}
        >
        <FloatingActionButton
          backgroundColor={this.props.bgColor}
          onClick={this.props.onClick}
          mini={true}
          disabled={this.props.disable}
          >
          <FontIcon className="material-icons">{this.props.icon}</FontIcon>
        </FloatingActionButton>
      </Badge>
    )
  }
}

export default ButtonActions;
