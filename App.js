import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFormik } from 'formik';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const formik = useFormik({
    initialValues: {
      email: 'lala@lala.com',
    },
    onSubmit: (x) => console.warn(x),
  });
  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput onChangeText={formik.handleChange('email')} value={formik.values.email} />
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
});
