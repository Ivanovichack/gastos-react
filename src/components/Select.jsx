import React, { Component } from "react";

class Select extends Component {

  render() {
    return (
      <div className="form-group col-md-6">
        <label htmlFor="">Ingrese el tipo:</label>
        <select name="" id="" className="form-control">
          {this.props.categoria.map((value) => {
            return <option value={value}>{value}</option>
          })}
        </select>
      </div>
    );
  }
}

export default Select;
