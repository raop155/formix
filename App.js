import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFormik } from 'formik';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

function validateEmail(email) {
  return re.test(String(email).toLowerCase());
}

const validate = (values) => {
  const errors = {};
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!values.email) {
    errors.email = 'Email required';
  } else if (!re.test(values.email)) {
    errors.email = 'Email invalid';
  }
  return errors;
};

export default function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (x) => console.warn(x),
  });
  return (
    <View style={styles.container}>
      <Text>Enter email:</Text>
      <TextInput
        onBlur={formik.handleBlur('email')}
        style={styles.input}
        onChangeText={formik.handleChange('email')}
        value={formik.values.email}
      />
      {formik.errors.email && formik.touched.email ? (
        <Text style={styles.error}>{formik.errors.email}</Text>
      ) : null}
      <Button title='Send' onPress={formik.handleSubmit} />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 30,
    width: 150,
    paddingHorizontal: 10,
    backgroundColor: '#eeeeee',
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
});
