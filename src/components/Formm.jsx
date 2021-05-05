import React, { Component } from 'react';

class formm extends Component {
    render(){
        return(
            <div className="form-row">
               <div className="form-group col-md-6">
                    <label htmlFor="">Ingrese el tipo:</label>
                    <select name="" id="" className="form-control">
                        <option value="">Elegir...</option>
                        <option value="">other</option>
                    </select>                    
               </div>
               <div className="form-group col-md-6">
                    <label htmlFor="">Ingrese el costo:</label>
                    <input type="number" name="" id="" className="form-control"/>
               </div>
            </div>            
        );
    }
}

export default formm;