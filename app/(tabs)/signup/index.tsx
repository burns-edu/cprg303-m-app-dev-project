import { useAuth } from "@/context/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { z } from "zod";

// Zod schema for Sign Up fields
const signupSchema = z
  .object({
    email: z.email("invalid email"),
    username: z.string().min(6, "Username must be minimum 6 characters"),
    password: z.string().min(6, "Password must be minimum 6 characters"),
    password2: z.string(),
  })
  .refine((data) => data.password === data.password2, {
    message: "passwords must match exactly",
    path: ["password2"],
  });

type LoginForm = z.infer<typeof signupSchema>;

export default function Login() {
  const { session, isLoading, signUp: signUp } = useAuth();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      password2: "",
    },
    mode: "onSubmit",
  });

  // Call Supabase for authentication
  const onSubmit = async (data: LoginForm) => {
    try {
      await signUp(data.username, data.password);
    } catch (error: any) {
      setError("root", { message: error.message });
    }
  };

  // Show spinner while loading
  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // If logged in, redirect to dashboard
  // if (session) {
  //   return <Redirect href={"/(tabs)/home"} />;
  // }

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>

        {/* Email */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={[styles.input, errors.email && styles.inputError]}
                placeholder="example@provider.com"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <Controller
            control={control}
            name="username"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={[styles.input, errors.username && styles.inputError]}
                placeholder="JohnSmith123"
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
                placeholder="must contain at least 6 digits"
                secureTextEntry
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </View>

        {errors.password && (
          <Text style={styles.error}>{errors.password.message}</Text>
        )}

        {/* Confirm Password */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <Controller
            control={control}
            name="password2"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={[styles.input, errors.password && styles.inputError]}
                placeholder="must match password exactly"
                secureTextEntry
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </View>

        {errors.password2 && (
          <Text style={styles.error}>{errors.password2.message}</Text>
        )}

        {errors.root && <Text style={styles.error}>{errors.root.message}</Text>}

        {/* Submit Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signUpContainer}>
        <Text style={styles.text}>Already have an account?</Text>
        <Text style={styles.signUp}>Log In</Text>
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

  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
