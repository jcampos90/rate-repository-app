import React from 'react';
import { Button, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import FormikTextInput from './formik/FormikTextInput';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const initialValues = {
  username: '',
  password: '',
};

// VALIDATIO SCHEMA WITH YUP
const validationSchema = yup.object().shape({
  username: yup.string().label("Username").required('${label} required').min(2),
  password: yup.string().label("Password").required('${label} is required').min(4)
})

const SignIn = ({ setIsSignedIn }) => {


  const navigate = useNavigate()
  const { signIn } = useSignIn()

  const onSubmit = async values => {
    const { errors } = await signIn(values)
    // console.log(data);
    if (!errors) {
      navigate("/")
      setIsSignedIn(true)
    }

  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => (
        <View style={{ padding: 10 }}>
          <FormikTextInput name="username" placeholder="Username" />
          <FormikTextInput name="password" placeholder="Password" secureTextEntry />
          <Button title='Log In' onPress={handleSubmit} style={{ padding: 5, borderRadius: 10 }} />
        </View>
      )}
    </Formik>
  );
};

export default SignIn