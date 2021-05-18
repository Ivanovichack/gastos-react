import React, { Component } from 'react';
import Select from './GetCategoria';
import TablaGastos from './TablaGastos';
import NuevoGasto from './NuevoGasto';

class Formm extends Component {

    constructor(){
        super()
        this.state = {
            detalle : "",
            costo : 0,
            categoria : ""
        }
        this.setCategoria = this.setCategoria.bind(this);
        console.log(this.state)
    }    

    setDetalle = (event) => {
        this.setState({ detalle : event.target.value }, console.log(event.target.value))
    }

    setCosto = (event) => {
        this.setState({ costo : event.target.value }, console.log(event.target.value))        
    } 
    
    setCategoria(selectedCategoria){
        this.setState({ categoria : selectedCategoria });
    }

    getCategoria = () => {
       // console.log(this.state.categoria);
        return this.state.categoria;
    }

    render() {
        
        return (
            <div>
                <Select setCategoria={this.setCategoria} getCategoria={this.getCategoria}/>                                                                                 
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="">Ingrese el costo:</label>
                        <input onChange={this.setCosto} type="number" name="costo" id="costo" className="form-control" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="">Ingrese un detalle:</label>
                        <input onChange={this.setDetalle} type="text" name="detalle" id="detalle" className="form-control" />
                    </div>
                </div>                
                <NuevoGasto detail={this.state.detalle} cost={this.state.costo} categoria={this.state.categoria}/>
                 
                <br/>
                <TablaGastos />
            </div>

        );
    }
}

export default Formm;