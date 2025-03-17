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
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
        <Text>Navigate to registration</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  formItem: {},
});
