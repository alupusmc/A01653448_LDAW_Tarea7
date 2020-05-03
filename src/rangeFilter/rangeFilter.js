import React from "react";
import "./rangeFilter.css";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

import big from "../assets/Quilataje/grande.png"
import small from "../assets/Quilataje/pequeno.png"

class RangeFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      tooltip: this.props.tooltip,
      images: this.props.images,
      min: parseInt(this.props.min),
      max: parseInt(this.props.max),
      step: parseFloat(this.props.step),
      value: [this.props.min, this.props.max],
    };
  }

  onSliderChange = (value) => {
   // console.log(value);
    this.setState({
      value,
    });
  };

  limpiarFiltros(){
    this.setState({value:[this.state.min, this.state.max]})
  }

  getFiltro(){
    return this.state.value
  }
  onAfterChange = (value) => {
   // console.log(value); 
  };
  reset = () => {
    this.setState({ value: null });
  };

  render() {
    return (
      <div className="filtro">
        <div className="title">
          <h2>
            {this.state.title}
            <span>
              ?<p className="tooltip">{this.state.tooltip}</p>
            </span>
          </h2>
        </div>
        {this.state.images ? (
          <div className="quilataje">
            <img className="size min"src={small}></img>
            <img className="size max" src={big}></img>
          </div>
        ) : (
          null
        )}
        <div className="slider">
          <Range
            value={this.state.value}
            onChange={this.onSliderChange}
            onAfterChange={this.onAfterChange}
            max={this.state.max}
            min={this.state.min}
            step={this.state.step}
          ></Range>
          <input step="0.01" type="number" className="min" disabled value={this.state.value[0]}></input>
          <input step="0.01" type="number" className="max" disabled value={this.state.value[1]}></input>
        </div>
      </div>
    );
  }
}

export default RangeFilter;
