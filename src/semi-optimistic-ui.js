import React from "react";
import { withStatechart } from "react-automata";
import delay from "delay";

import machine from "./machine";

class MyForm extends React.Component {
  state = {
    nextRequest: null,
    currentRequest: null,
    result: null
  };

  clearAllReq = () =>
    this.setState({
      currentRequest: null,
      nextRequest: null
    });

  setNextRequest = val => {
    this.setState({ nextRequest: val });
    this.props.transition("setNextRequest");
  };

  runCurrentRequest = () => {
    this.setState({ currentRequest: this.state.nextRequest });
    delay(3000)
      .then(() =>
        this.setState({ result: "done - " + this.state.currentRequest })
      )
      .then(() => this.props.transition("requestDone"));
  };

  render() {
    const { machineState } = this.props;
    const { value } = machineState;
    const isDisabled = value === "disabled";
    const componentState = JSON.stringify(this.state, null, 2);
    return (
      <div>
        <pre>{machineState.value}</pre>
        <pre>{componentState}</pre>
        <p>
          <input
            disabled={isDisabled}
            onBlur={() => this.setNextRequest("first")}
          />
        </p>
        <p>
          <input
            disabled={isDisabled}
            onBlur={() => this.setNextRequest("second")}
          />
        </p>
      </div>
    );
  }
}

export default withStatechart(machine)(MyForm);
