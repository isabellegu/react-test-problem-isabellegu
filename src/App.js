import React from 'react';
import Button from '/workspaces/react-test-problem-isabellegu/src/ButtonComponent.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  //handler goes here

  render() {
    return (
      <div>
        <p>Greetings!</p>
        <p>Button goes here</p>
        <Button> Button </Button>

    </div>
    );
  }
}
