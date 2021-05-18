import * as React from 'react';
import { Component } from 'react';
import { FirebaseDatabaseMutation } from "@react-firebase/database";
import firebase from "firebase/app";
import "firebase/database";
import {
    FirebaseDatabaseProvider
} from "@react-firebase/database";

import { firebaseConfig } from "../firebase";

class NuevoGasto extends Component {

    getFecha = () => {
        let date = new Date()

        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()

        if (month < 10) {
            return `${day}-0${month}-${year}`
        } else {
            return `${day}-${month}-${year}`
        }
    }

    render() {
        return (
            <>
                <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}>
                    <FirebaseDatabaseMutation type="push" path="gastos">
                        {({ runMutation }) => {
                            return (
                                <div className="form-row">
                                    <div className="form-group col-md-6"> 
                                        <input type="button" value="Agregar" className="btn btn-primary"
                                            onClick={async () => {
                                                await runMutation({
                                                    categoria: this.props.categoria,
                                                    costo: this.props.cost,
                                                    detalle: this.props.detail,
                                                    fecha: this.getFecha()
                                                });
                                            }}
                                        />
                                    </div>
                                </div>
                            );
                        }}
                    </FirebaseDatabaseMutation>
                </FirebaseDatabaseProvider>
            </>
        );
    }
}

export default NuevoGasto;