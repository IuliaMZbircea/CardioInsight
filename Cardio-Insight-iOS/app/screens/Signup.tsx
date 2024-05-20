import React, { useState } from 'react';
import { View, Text, TextInput, Button,TouchableOpacity, StyleSheet, KeyboardAvoidingView, SafeAreaView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signUp } from 'aws-amplify/auth';
import { autoSignIn } from 'aws-amplify/auth';
import Auth from '@aws-amplify/auth';


const SignupScreen = () => {

  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await Auth.signUp({
        username: email,
        password: password
      });
      console.log('Sign up successful. Please check your email for a confirmation code.');
      navigation.navigate('UserTypeSelection', { email: email });
    } catch (error) {
      console.log('Error signing up:', error);
    }
  };
    
    const handleLogin = async () =>{
        navigation.navigate('Login');
        console.log('Navigated to login page.');
    }

    const handleRedirect = async() =>{
      navigation.navigate('UserProfile');
    }
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.userTypeContainerWrapper}>
          <View style={styles.userTypeContainer}>
            <Text style={styles.userTypeTitle}>Sign Up</Text>
            <TextInput
              style={styles.input}
              placeholder="Email address"
              placeholderTextColor="#aaa"
              value={email}
              autoCapitalize='none'
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={styles.input}
              value={password}
              placeholder="Password"
              secureTextEntry={true}
              autoCapitalize='none'
              onChangeText={(text) => setPassword(text)}
              placeholderTextColor="#aaa"
            />
            <TouchableOpacity style={styles.loginButton} onPress={handleRedirect}>
              <Text style={{ color: '#C83030', fontSize: 16 }}>Sign Up</Text>
            </TouchableOpacity>
  
            <View style={styles.separatorContainer}>
              <View style={styles.separator}></View>
            </View>
            <Text style={styles.footer}>
              Already have an account?
              <TouchableOpacity onPress={handleLogin}>
                <Text style={{ color: `rgba(200, 48, 48, 0.6)`, fontWeight: 'bold' }}> Log In</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 32,
    marginBottom: 20,
    color:'#ff5b5b'
  },
  input: {
    height: 40,
    borderColor: '#rgba(255, 255, 255, 0.6)',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    color: '#C83030',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
   },
   footer:{
     marginTop :20 ,
     textAlign :'left',
     color: 'rgba(200, 48, 48, 0.6)',
   },
   userTypeContainerWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  userTypeContainer: {
    backgroundColor: '#EEE6E6',
    borderRadius: 15,
    padding: 30,
    width: '90%',
    marginBottom: 20,
  },
  userTypeTitle: {
    color: '#C83030',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,
  },
  loginButton: {
    height: 40,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formInput: {
    height: 40,
    borderColor: '#rgba(255, 255, 255, 0.6)',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
    color: '#C83030',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    marginTop: 20,
  },
  
  separator: {
    height: 1,
    backgroundColor: '#F5CCCD',
    flex: 1,
    marginLeft: 1,
    marginRight: 1,
  },
});


export default SignupScreen;