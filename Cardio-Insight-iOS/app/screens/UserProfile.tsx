import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
// import { Button } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

const ProfilePage : React.FC = ()  => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.scoreContainer}>
          <View style={styles.scoreCircle}>
            <Text style={styles.scoreText}>87</Text>
          </View>
          <Text style={styles.scoreLabel}>Your Wellness Score</Text>
          <Text style={styles.scoreDate}>(20 Dec 2023)</Text>
          <Text style={styles.scoreLink}>What's a Wellness Score?</Text>
        </View>
        <View style={styles.riskContainer}>
          <Text style={styles.riskText}>Risk of: Hypertension</Text>
          {/* <Button
            title="See Insights"
            icon={<MaterialIcons name="insights" size={24} color="white" />}
            buttonStyle={styles.riskButton}
          /> */}
        </View>
      </View>
      <View style={styles.footer}>
        <MaterialIcons name="person" size={32} color="black" />
        <MaterialIcons name="settings" size={32} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 10,
    borderColor: '#f00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreCircle: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 10,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  scoreLabel: {
    fontSize: 18,
    marginTop: 10,
  },
  scoreDate: {
    fontSize: 14,
    color: '#999',
  },
  scoreLink: {
    fontSize: 16,
    color: '#00f',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  riskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  riskText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  riskButton: {
    backgroundColor: '#f00',
    paddingHorizontal: 20,
  },
  footer: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default ProfilePage;
