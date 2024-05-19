// AdvancedUser.tsx
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const AdvancedUser: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userTypeContainerWrapper}>
        <View style={styles.userTypeContainer}>
          <Text style={styles.userTypeTitle}>Advanced User</Text>
          <Text style={styles.userTypeDescription}>
            {`\u2022 Age\n\u2022 Gender\n\u2022 Diagnosed CVD\n\u2022 Height\n\u2022 Weight\n\u2022 Smoker (Yes/No)\n\u2022 Cholesterol\n\u2022 Systolic Blood Pressure\n\u2022 Diastolic Blood Pressure\n\u2022 Heart Rate`}
          </Text>
        </View>
      </View>
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
    userTypeContainerWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    userTypeContainer: {
      backgroundColor: '#EEE6E6',
      borderRadius: 15,
      padding: 30,
      width: '80%',
      marginBottom: 20,
    },
    userTypeTitle: {
      color: '#C83030',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    userTypeDescription: {
      color: '#C83030',
      fontSize: 16,
      marginTop: 10,
    },
    formLabel: {
      color: '#C83030',
      fontSize: 18,
      marginTop: 10,
    },
    formInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingLeft: 10,
    },
  });
  

export default AdvancedUser;
