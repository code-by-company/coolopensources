import React from 'react';
import styles from '../styles';

import{connect} from 'react-redux';
import {login} from '../redux/actions'

import {Text, View, Alert} from 'react-native';

class Home extends React.Component{
    state={
    
    }

    componentWillMount(){
        this.props.dispatch(login('wha'))
        this.login()
    }

    login = async() =>{
        const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync('344221342967255',{
            permissions: ['public_profile']
        });

        if( type==='success'){
            const response = await fetch(
                'https://graph.facebook.com/me?access_token=${token}'
            );

            Alert.alert("Logged  in!", `Hi ${(await response.json()).name}`)
        }
    }

    render(){
        return(
            <View>
                <Text>
                    Oi: {this.props.user}
                </Text>
            </View>
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user
    };
}

export default connect(mapStateToProps)(Home);