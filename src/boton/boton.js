import React from "react";
import "./boton.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: this.props.label,
      color: this.props.color,
    };
  }

  render() {
    return (
      <div className="boton">
        <span className={this.state.color}>{this.state.label}</span>
      </div>
    );
  }
}

export default Button;
