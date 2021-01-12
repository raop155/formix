import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFormik } from 'formik';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as Yup from 'yup';

export default function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required email'),
    }),
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
