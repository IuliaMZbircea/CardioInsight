import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { addDoc, collection, getDocs, DocumentData} from 'firebase/firestore';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { FIREBASE_DB} from '../../FirebaseConfig';

interface UserData {
  uid: string;
  age: string;
  gender: string;
  diagnosedCVD: string;
  height: string;
  weight: string;
  smoker: string;
}

const BasicUser: React.FC = () => {

  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [diagnosedCVD, setDiagnosedCVD] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [smoker, setSmoker] = useState<string>('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  const user = FIREBASE_AUTH.currentUser;
  const navigation = useNavigation<any>();

  

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const userRef = collection(FIREBASE_DB, 'users');
        const querySnapshot = await getDocs(userRef);

        querySnapshot.forEach((doc) => {
          const data = doc.data() as UserData;
          if (data.uid === user.uid) {
            setUserData(data);
          }
        });
      }
    };

    fetchData();
  }, [user]);

  const addUserToFirebase = async () => {
    if (user) {
      const userRef = collection(FIREBASE_DB, 'users');

      try {
        const docRef = await addDoc(userRef, {
          uid: user.uid,
          age,
          gender,
          diagnosedCVD,
          height,
          weight,
          smoker,
        });

        console.log('Document written with ID: ', docRef.id);
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    }
  };

  const handleAddUser = () => {
    addUserToFirebase();
  };

//   const handleSubmitForm = () => {
//     console.log('Navigation to next screen page.');
//     navigation.navigate('ProfileScreen');
//   }

  const handleModalToggle = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleSmokerSelect = (value: string) => {
    setSmoker(value);
    handleModalToggle();
  };

  return (

    // <div>
    //   {/* Your existing JSX */}
    //   <input
    //     type="text"
    //     placeholder="Age"
    //     value={age}
    //     onChange={(e) => setAge(e.target.value)}
    //   />
    //   {/* ... other input fields */}
    //   <button onClick={handleAddUser}>Add User</button>

    //   {/* Display user-specific data */}
    //   {userData && (
    //     <div>
    //       <p>Age: {userData.age}</p>
    //       <p>Gender: {userData.gender}</p>
    //       <p>Diagnosed CVD: {userData.diagnosedCVD}</p>
    //       <p>Height: {userData.height}</p>
    //       <p>Weight: {userData.weight}</p>
    //       <p>Smoker: {userData.smoker}</p>
    //     </div>
    //   )}
    // </div>
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.userTypeContainerWrapper}
      >
        <View style={styles.userTypeContainer}>
          <Text style={styles.userTypeTitle}>Let's start with the basics...</Text>

          {/* First row of textboxes */}
          <View style={styles.formRow}>
            <View style={styles.formColumn}>
              <TextInput
                style={styles.formInput}
                value={age} 
                onChangeText={(text) => setAge(text)}
                placeholder="Age"
                placeholderTextColor="#C83030"
                keyboardType="numeric"
                editable={true}
              />
            </View>
            <View style={styles.formColumn}>
              <TextInput
                style={styles.formInput}
                value={gender}
                onChangeText={(text) => setGender(text)}
                placeholder="Gender"
                placeholderTextColor="#C83030"
                editable={true}
              />
            </View>
          </View>

          {/* Second row of textboxes */}
          <View style={styles.formRow}>
            <View style={styles.formColumn}>
              <TextInput
                style={styles.formInput}
                value={diagnosedCVD}
                onChangeText={(text) => setDiagnosedCVD(text)}
                placeholder="Diagnosed CVD"
                placeholderTextColor="#C83030"
                editable={true}
              />
            </View>
            <View style={styles.formColumn}>
              <TextInput
                style={styles.formInput}
                value={height}
                onChangeText={(text) => setHeight(text)}
                placeholder="Height"
                placeholderTextColor="#C83030"
                keyboardType="numeric"
                editable={true}
              />
            </View>
          </View>

          {/* Third row of textboxes */}
          <View style={styles.formRow}>
            <View style={styles.formColumn}>
              <TextInput
                style={styles.formInput}
                value={weight}
                onChangeText={(text) => setWeight(text)}
                placeholder="Weight"
                placeholderTextColor="#C83030"
                keyboardType="numeric"
                editable={true}
              />
            </View>
            <View style={styles.formColumn}>
              <View style={styles.formInputContainer}>
                <TextInput
                  style={styles.formInput}
                  value={smoker}
                  placeholder="Smoker (Yes/No)"
                  placeholderTextColor="#C83030"
                  onFocus={handleModalToggle}
                  editable={true}
                />
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={isModalVisible}
                  onRequestClose={handleModalToggle}
                >
                  <View style={styles.modalContainer}>
                    <TouchableWithoutFeedback onPress={handleModalToggle}>
                      <View style={styles.modalOverlay} />
                    </TouchableWithoutFeedback>
                    <View style={styles.pickerModal}>
                      <Picker
                        style={styles.pickerStyle}
                        selectedValue={smoker}
                        onValueChange={handleSmokerSelect}
                      >
                        <Picker.Item label="Yes" value="Yes" />
                        <Picker.Item label="No" value="No" />
                      </Picker>
                    </View>
                  </View>
                </Modal>
              </View>
            </View>
          </View>

          {/* Submit button */}
          <Button title="Submit" onPress={handleAddUser} color="#C83030" />
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
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
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
  formRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  formColumn: {
    flex: 1,
    marginRight: 10,
  },
  formInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  pickerModal: {
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
  },
  pickerStyle: {
    height: 250,
    color: '#C83030',
  },
});

export default BasicUser;
