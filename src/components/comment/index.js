import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

class Comment extends React.Component {
  render () {
    return(
      <Card zDepth={1} >
        <CardText>
          <form className="row">
            <div className="col-md-12">
              <TextField
                style={{textAlign: 'left'}}
                hintText="Type Comment..."
                floatingLabelText="Comment"
                multiLine={true}
                rows={2}
                fullWidth={true}
              />
            </div>
            <div className="col-md-4">
              <RaisedButton
                label="Submit Comment"
                primary={true}
                fullWidth={true}
                style={{marginTop:27}}
              />
            </div>
            <div className="col-md-8">
              <TextField
                hintText="Anonymous"
                floatingLabelText="Nama *Anonymous*"
                fullWidth={true}
              />
            </div>
          </form>
        </CardText>
      </Card>
    );
  }
}

export default Comment;
