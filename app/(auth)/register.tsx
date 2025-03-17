import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import { registerUser } from "@/actions/user";
import { registerUserSchema } from "@/validation/user";

export default function Register() {
  return (
    <SafeAreaView style={styles.container}>
      <Formik
        validationSchema={registerUserSchema}
        initialValues={{
          name: "",
          email: "",
          password: "",
          password_confirmation: "",
        }}
        onSubmit={(values) => {
          registerUser(values);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <Text>Register user form</Text>
            <View style={styles.formItem}>
              <Text>Name</Text>
              <TextInput
                style={styles.formInput}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
              {errors.name && touched.name ? (
                <Text style={styles.validationError}>{errors.name}</Text>
              ) : null}
            </View>
            <View style={styles.formItem}>
              <Text>Email</Text>
              <TextInput
                style={styles.formInput}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <Text style={styles.validationError}>{errors.email}</Text>
              ) : null}
            </View>
            <View style={styles.formItem}>
              <Text>password</Text>
              <TextInput
                style={styles.formInput}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              {errors.password && touched.password ? (
                <Text style={styles.validationError}>{errors.password}</Text>
              ) : null}
            </View>
            <View style={styles.formItem}>
              <Text>password_confirmation</Text>
              <TextInput
                style={styles.formInput}
                onChangeText={handleChange("password_confirmation")}
                onBlur={handleBlur("password_confirmation")}
                value={values.password_confirmation}
              />
              {errors.password_confirmation && touched.password_confirmation ? (
                <Text style={styles.validationError}>
                  {errors.password_confirmation}
                </Text>
              ) : null}
            </View>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => handleSubmit()}
            >
              <Text>Submit register user form</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  formItem: {
    gap: 5,
    marginVertical: 10,
  },
  formInput: {
    borderWidth: 1,
    borderColor: "black",
    padding: 2,
    borderRadius: 5,
  },
  submitButton: {
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    backgroundColor: "lightblue",
    borderRadius: 5,
    color: "white",
    alignSelf: "flex-start",
    width: "auto",
  },
  validationError: {
    color: "red",
  },
});
