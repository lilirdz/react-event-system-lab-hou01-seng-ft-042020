import React from "react";

class EyesOnMe extends React.Component {
  handleFocus = () => {
    console.log("Good!");
  };

  handleBlur = () => {
    console.log("Hey! Eyes on me!");
  };
  render() {
    return (
      <div>
        <button onFocus={this.handleFocus} onBlur={this.handleBlur} />
      </div>
    );
  }
}

export default EyesOnMe;
