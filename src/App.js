import * as React from 'react';
import { UserList, UserShow, UserCreate, UserEdit } from './users';
import { Admin, Resource,ListGuesser } from 'react-admin';
import {
    FirebaseDataProvider,
    FirebaseAuthProvider,
} from 'react-admin-firebase';
import firebase from 'firebase';
import jsonServerProvider from 'ra-data-json-server';

import { firebaseConfig } from './FIREBASE_CONFIG';
import CustomLoginPage from './CustomLoginPage';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const authProvider = FirebaseAuthProvider(firebaseConfig);

const placeholderProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');


class App extends React.Component {
    render() {
        return (
            <Admin
                loginPage={CustomLoginPage}
                dataProvider={placeholderProvider}
                authProvider={authProvider}

            >
                <Resource name="users" list={ListGuesser}  create={UserCreate} edit={UserEdit}/>

            </Admin>
        );
    }
}

export default App;

