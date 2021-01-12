import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Formik, useFormikContext } from 'formik';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as Yup from 'yup';

const EmailForm = () => {
  const { handleChange, submitForm, values } = useFormikContext();
  return (
    <>
      <StatusBar style='auto' />
      <Text>Enter email:</Text>
      <TextInput style={styles.input} onChangeText={handleChange('email')} value={values.email} />
      <Button title='Send' onPress={submitForm} />
    </>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string().required('Email required').email('Email invalid'),
        })}
      >
        <EmailForm />
      </Formik>
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
