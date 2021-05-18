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
//https://react-firebase-js.com/docs/guides/build-a-react-app-with-firebase-auth-and-realtime-database/write-data
    render() {
        return (
           <>
           <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}>
            <FirebaseDatabaseMutation type="push" path="gastos">
            {({ runMutation }) => (                
                <button
                    onClick={ async ev => {
                        await runMutation({
                            link_url: 0,
                            link_description: 1,
                            created_at: 2,
                            updated_at: 3
                          });
                    }}                    
                >                                    
                </button>
            )}
            </FirebaseDatabaseMutation>
            </FirebaseDatabaseProvider>
           </>
        );
    }
}

export default NuevoGasto;