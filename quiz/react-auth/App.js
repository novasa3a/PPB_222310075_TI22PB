import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Alert, Button, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const myEmail = "222310001@student.ibik.ac.id";
  const myPass = "123";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlerSubmit = () => {
    if (email !== myEmail) {
      return Alert.alert("Email yang anda masukkan salah!");
    }else if (password !== myPass) {
      return Alert.alert("Password yang anda masukkan salah!");
    }
    Alert.alert(`Selamat datang, ${email}!`);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} />
      <View style={styles.containerform}>
        <View style={styles.form}>
          <Text style={styles.header}>Login Email</Text>
        </View>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="npm@student.ibik.ac.id"
            value={email}
            onChangeText={setEmail}
            color='black'
            placeholderTextColor='grey'
            keyboardType="email-address"
          />
        </View>
        <View>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              color='black'
              placeholderTextColor='grey'
            />
            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
              <Icon name={showPassword ? "eye" : "eye-slash"} size={20} color="grey" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ width: 240, marginVertical: 'auto', marginHorizontal: 'auto' }}>
          <TouchableOpacity onPress={handlerSubmit} style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerform: {
    width: '80%',
    height: 340,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
  },
  form: {
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  label: {
    fontSize: 18,
    alignItems: 'flex-start',
    marginLeft: 12,
    marginTop: 17
  },
  input: {
    borderWidth: 2,
    marginHorizontal: 10,
    borderRadius: 6,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    marginHorizontal: 10,
    borderRadius: 6,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    marginLeft: 10,
  },
  submitButton: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 10, 
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 15,
  }
});
