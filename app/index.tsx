import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { z } from "zod";

// Zod schema for Login fields
const loginSchema = z.object({
  username: z.email("Invalid email"),
  password: z.string().min(6, "Password must be minimum 6 characters"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = (data: LoginForm) => {
    router.replace("/(tabs)/home" as any); // Reroute as we set up more pages
  };

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        {/* Username */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <Controller
            control={control}
            name="username"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={[styles.input, errors.username && styles.inputError]}
                placeholder="e.g. John@gmail.com"
                //placeholderTextColor=???
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </View>

        {errors.username && (
          <Text style={styles.error}>{errors.username.message}</Text>
        )}

        {/* Password */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={[styles.input, errors.password && styles.inputError]}
                placeholder="******"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </View>

        {errors.password && (
          <Text style={styles.error}>{errors.password.message}</Text>
        )}

        {/* Submit Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signUpContainer}>
        <Text style={styles.text}>Don't have an account?</Text>
        <Text style={styles.signUp}>Sign Up</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  container: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 40,
    marginHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#EAEAEA",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
    width: "100%",
    height: 80,
    borderRadius: 20,
    backgroundColor: "#99B868",
    textAlignVertical: "center",
    paddingLeft: 20,
    marginBottom: 10,
  },

  inputContainer: {
    width: 300,
    marginVertical: 10,
    gap: 10,
  },

  label: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#878787",
  },

  input: {
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    padding: 10,
  },

  inputError: {
    borderWidth: 1,
    borderColor: "#FF5353",
  },

  error: {
    color: "#FF5353",
    fontSize: 13,
  },

  button: {
    width: 300,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#22A1FD",
    marginVertical: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  signUpContainer: {
    marginTop: "auto",
    marginBottom: 20,
    alignItems: "center",
  },

  text: {
    fontSize: 15,
    color: "#878787",
  },

  signUp: {
    fontSize: 18,
    color: "#00b3ff",
    textDecorationLine: "underline",
  },
});
