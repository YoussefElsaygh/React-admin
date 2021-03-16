// LoginPage.js
import React from "react";
import {Login} from "react-admin";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import {Edit, SimpleForm, Create, SelectInput, TextInput, required} from 'react-admin';

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '#/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ]
};

const SignInScreen = () => <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>;

const CustomLoginForm = (props) => {
    return (
        <div>
            <div style={{fontFamily: "monospace", marginLeft: '15px'}}>
            </div>
            <SignInScreen/>
        </div>
    );
}

const CustomLoginPage = props => (
    <Login {...props}>
        <CustomLoginForm {...props}/>
    </Login>
);

export default CustomLoginPage;