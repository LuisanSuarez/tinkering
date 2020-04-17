import React from "react";
import "../App.css";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        class="square"
        onClick={() => this.props.handleClick(this.props.value)}
      >
        {this.props.display}
      </div>
    );
  }
}

export default Square;
