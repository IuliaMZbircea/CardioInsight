import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserTypeSelection: React.FC = () => {
  const navigation = useNavigation<any>();

  const handleUserTypeSelection = (isAdvancedUser: boolean) => {
    if (isAdvancedUser) {
      navigation.navigate('AdvancedUser'); 
    } else {
      navigation.navigate('BasicUser'); 
    }
  };

  const UserTypeContainer = ({ title, description, isAdvancedUser }: any) => (
    <TouchableWithoutFeedback onPress={() => handleUserTypeSelection(isAdvancedUser)}>
      <View style={styles.userTypeContainer}>
        <Text style={styles.userTypeTitle}>{title}</Text>
        <Text style={styles.userTypeDescription}>{description}</Text>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userTypeContainerWrapper}>
        <UserTypeContainer
          title="Basic User"
          description={`\u2022 Personalized predictions based on key indicators\n\u2022 Quick and easy registration\n\u2022 Essential health data input\n\u2022 Fast access to personalized insights\n\u2022 Less accurate predictions`}
          isAdvancedUser={false}
        />
      </View>

      <View style={styles.separatorContainer}>
        <View style={styles.separator}></View>
        <Text style={styles.separatorText}>or</Text>
        <View style={styles.separator}></View>
      </View>

      <View style={styles.userTypeContainerWrapper}>
        <UserTypeContainer
          title="Advanced User"
          description={`\u2022 Detailed input for accurate predictions\n\u2022 Tailored recommendations based on comprehensive health data\n\u2022 Fine-tune your heart health strategy`}
          isAdvancedUser={true}
        />
      </View>
    </SafeAreaView>
  );
};

// Define the styles for SignupScreen
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
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  separatorText: {
    color: '#C83030',
    marginHorizontal: 5,
    fontSize: 14,
  },
  separator: {
    height: 1,
    backgroundColor: '#F5CCCD',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
});
export default UserTypeSelection;
