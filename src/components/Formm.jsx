import React, { Component } from 'react';
import Select from './GetCategoria';

class Formm extends Component {
    render(){
        return(
            <div className="form-row">
            <Select />               
               <div className="form-group col-md-6">
                    <label htmlFor="">Ingrese el costo:</label>
                    <input type="number" name="" id="" className="form-control"/>
               </div>
               <div className="form-group col-md-3">
                   <br/>
                <input type="button" value="Registrar gasto" className="btn btn-info"/>
               </div>
            </div>            
        );
    }
}

export default Formm;