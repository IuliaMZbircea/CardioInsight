import React, { useState } from 'react';
import { View, Text, TextInput, Button,TouchableOpacity, StyleSheet, KeyboardAvoidingView, SafeAreaView, Platform, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AppleButton } from '@invertase/react-native-apple-authentication';

const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;
    const navigation = useNavigation<any>();

    const handleLogin = async () => {
        setLoading(true);
        try{
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            navigation.navigate('BasicUser')
        } catch(error : any){
            console.log(error);
            alert('Log in failed ' + error.message);
        } finally{
            setLoading(false);
        }
    } 

    const handleSignUp = async () => {
        navigation.navigate("Signup");
    }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.userTypeContainerWrapper}
      >
        <View style={styles.userTypeContainer}>
          <Text style={styles.userTypeTitle}>Login</Text>
          <TextInput
            style={styles.input}
            value = {email}
            placeholder="Email address"
            autoCapitalize='none'
            onChangeText={(text) => setEmail(text)}
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            autoCapitalize='none'
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor="#aaa"
          />

            { loading ? ( <ActivityIndicator size = "large" color = "#0000ff" />
            ) : ( 
                <>
                    <TouchableOpacity style={styles.loginButton}>
                        <Button title = "Login" onPress={() => handleLogin()} />
                    </TouchableOpacity>
                    
                    <Text style={styles.footer}>
                        Not registered yet?
                        <TouchableOpacity> 
                            <Text onPress={() => handleSignUp}style={{ color: `rgba(200, 48, 48, 0.6)`, fontWeight: 'bold' }}> Create an account</Text>
                        </TouchableOpacity>
                     </Text>
                </> 
            )}

          

          <View style={styles.separatorContainer}>
            <View style={styles.separator}></View>
          </View>
          

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


export default LoginScreen;