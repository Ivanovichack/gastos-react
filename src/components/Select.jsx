import React, { Component } from "react";

class Select extends Component {

  state = {
    categoria : ""
  }

  handleCategoria = (event) => {
    this.setState( {
      categoria : event.target.value
    })
  }

  render() {
    return (
      <div className="form-group col-md-6">
        <label htmlFor="">Ingrese el tipo:</label>
        <select onSelect={this.handleCategoria} name="categoria" id="categoria" className="form-control">
          {this.props.categoria.map((value) => {
            return <option value={value}>{value}</option>
          })}
        </select>
          
      </div>
    );
  }
}

export default Select;
