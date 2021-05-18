import React, { Component } from "react";
import NuevoGasto from "./NuevoGasto";

class Select extends Component {
  state = {
    categoria : "Seleccione una categoría"
  }

  handleCategoria = (event) => {
   // this.props.setCategoria(event.target.value);
    this.setState({
      categoria : event.target.value
    }, console.log(this.state.categoria));
  }  
    
  render() {
    
    return (
      <div className="form-row">        
        <div className="form-group col-md-6">        
          <label htmlFor="">Ingrese el tipo:</label>
          <select onChange={this.handleCategoria} value={this.props.getCategoria} className="form-control">                    
            <option value={null}>Seleccione una categoría</option>
            {            
              this.props.categoria.map((value) => {
              return <option key={value} value={value}>{value}</option>
          })}
        </select>        
        </div>       
        
      </div>
      
    );    
  }
  
}

export default Select;
