import React, { Component } from 'react';
import Select from './GetCategoria';
import TablaGastos from './TablaGastos';
import NuevoGasto from './NuevoGasto';

class Formm extends Component {

    render() {
        return (
            <div>
                <div className="form-row">
                    <Select />                                        
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="">Ingrese el costo:</label>
                        <input type="number" name="costo" id="costo" className="form-control" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="">Ingrese un detalle:</label>
                        <input type="text" name="detalle" id="detalle" className="form-control" />
                    </div>
                </div>
                <NuevoGasto />
                <br/>
                <TablaGastos />
            </div>

        );
    }
}

export default Formm;