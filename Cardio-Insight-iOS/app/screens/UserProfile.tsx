import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, KeyboardAvoidingView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const ProfileScreen = () => {
  const navigation = useNavigation<any>();
  const [wellnessScore, setWellnessScore] = useState(87);
  const [riskOf, setRiskOf] = useState("Hypertension");//will be taken from ml file
  
  const handleInfoButton = () => {
    Alert.alert(
      'Info',
      'The Wellness Score is a straightforward arithmetic function scaled to a maximum of 100. It is calculated using various parameters from your medical data record. This score provides an easy-to-understand summary of your overall health status.',
      [{ text: 'OK' }]
    );
  }


  const getCurrentDate = () => {
    const date = new Date();
    const options = { year: 'numeric', month: 'short', day: '2-digit' } as const;
    return date.toLocaleDateString('en-US', options);
  }

  const handleInsights = async () => {
    navigation.navigate("Insights");
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.userTypeContainerWrapper}
      >
        <View style={styles.innerContainer}>
          <View style={styles.scoreContainer}>
            <AnimatedCircularProgress
              size={200}
              width={18}
              fill={(wellnessScore / 100) * 100}
              tintColor="#C83030"
              backgroundColor="#EAE8E8"
              padding={10}
              lineCap="round" 
              
            >
              {/*Show wellness score inside AnimatedCircularProgress */}
              {(fill) => (
                <Text style={styles.progressText}>
                  {Math.round((fill / 100) * 100)}
                </Text>
              )}

            </AnimatedCircularProgress>
            <Text style={[styles.text, { marginBottom: 5 }, {marginTop: 40}]}>Your Wellness Score</Text>
            <Text style={styles.dateText}>({getCurrentDate()})</Text>

          </View>
          <TouchableOpacity onPress={handleInfoButton} style={styles.infoButton}>
              <Text style={styles.infoButtonText}>What's the Wellness Score?</Text>
          </TouchableOpacity>

          <View style={styles.riskContainer}>
            <Text style={styles.text}>Risk of: {riskOf}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInsights()}>
          <Text style={styles.buttonText}>See Insights</Text>
        </TouchableOpacity>
        
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFCFC', 
  },
  userTypeContainerWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#C83030',
  },
  innerContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  scoreContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  score: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#C83030',
  },
  progressText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#C83030',
  },
  text: {
    color: '#C83030',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dateText: {
    color: '#D68E8D', 
    fontSize: 16, 
    marginBottom: 10,
  },
  buttonText:{
    color: '#C83030',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#EEE6E6', 
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 15,
    marginBottom: 120, 
  },
  riskContainer: {
    marginTop: '10%',
  },
  infoButtonText: {
    color: '#D68E8D',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  infoButton: {
    backgroundColor: '#FFFCFC',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
});

export default ProfileScreen;
