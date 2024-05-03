import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Loading = () =>{

    const loadingDuration = 4500; // in milliseconds
    const navigation = useNavigation<any>();
    useEffect(() => {

        const timer = setTimeout(() => {
            navigation.navigate('Login');
        }, loadingDuration);

    return () => clearTimeout(timer);
  }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../images/logo2.png')}
                style={styles.image}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    image: {
      width: 700,
      height: 700,
      resizeMode: 'contain',
    },
  });

  export default Loading;