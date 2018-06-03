import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common'; 
import { Text } from 'react-native';

class LoginForm extends Component {
    state = { email: '', password: '' , error: '', loading: false };

    OnButtonPress() {
        const { email, password } = this.state;
        
        this.setState( { error : '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {                              // It is if above condition got wrong like no acc exist.
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.onLoginSuccess.bind(this))
                .catch(this.onLoginFailed.bind(this));
       });
    }

    renderButton() {
        if (this.state.loading){
            return <Spinner size='small' />;
        }

        return (
            <Button onPress={this.OnButtonPress.bind(this)}>
                    Log in 
            </Button>
        );
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }
   
    onLoginFailed() {
        this.setState({
            error: 'Authentication Failed.',
            loading: false
        });
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                    placeholder='user@gmail.com' 
                    label= 'Email'
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        placeholder='password' 
                        label= 'Password'
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        secureTextEntry
                        />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        color: '#f00',
        alignSelf: 'center'
    }
};

export default LoginForm;