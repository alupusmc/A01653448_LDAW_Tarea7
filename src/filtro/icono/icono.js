import React from "react";
import "./icono.css";

class ButtonImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: this.props.src,
      label: this.props.label,
    };
  }

  render() {
    return (
      <div>
        <img src={this.state.src} label={this.state.label}></img>
        <p>{this.state.label}</p>
      </div>
    );
  }
}

export default ButtonImg;
