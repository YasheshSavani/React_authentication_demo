import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/loginForm';

class App extends Component {
    state = { loggedIn: null };


    componentWillMount() {
        firebase.initializeApp(
            {   apiKey: 'AIzaSyC3uEg-7CLiF-7FGFVpAtUcTYDB1s4ffiY',
                authDomain: 'authentication-5cbf9.firebaseapp.com',
                databaseURL: 'https://authentication-5cbf9.firebaseio.com',
                projectId: 'authentication-5cbf9',
                storageBucket: 'authentication-5cbf9.appspot.com',
                messagingSenderId: '384179396622'
            }
        );

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            }
            else {
                this.setState({ loggedIn: false });
            }
        });
    }
     
    
    renderContent() {
        switch (this.state.loggedIn) {
            case true:
        return (
            <CardSection>
                <Button onPress={() => firebase.auth().signOut()}> 
                    Log out 
                </Button>
            </CardSection>
        
            );
            case false:
                return <LoginForm />;
            default:
        return (
            <CardSection>
                <Spinner size="large" />
            </CardSection>
        );    
        }
    }

    render(){
        return (
            <View>
                <Header headerText='Authentication' />
                {/* <CardSection> */}
                    {this.renderContent()}
                {/* </CardSection> */}
            </View>
        );
    }
}

export default App;