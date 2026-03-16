import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const ForgotPasswordScreen: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    console.log("Reset password for:", email);
    alert("If this email exists, a reset link will be sent.");
    router.push("/login"); // Після відправки повертаємо на Login
  };

  const handleBackToLogin = () => {
    router.push("/login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/icon.png")}
          style={styles.logoImage}
        />
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.subtitle}>
          Enter your email to reset your password
        </Text>
      </View>

      <View style={styles.form}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#9ca3af"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Send Reset Link</Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Remembered your password?</Text>
          <TouchableOpacity onPress={handleBackToLogin}>
            <Text style={styles.loginButtonText}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },

  logoImage: {
    width: 120,
    height: 120,
    marginBottom: 12,
    resizeMode: "contain",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
  },

  subtitle: {
    fontSize: 16,
    color: "#94a3b8",
    marginTop: 6,
    textAlign: "center",
  },

  form: {
    gap: 16,
  },

  input: {
    backgroundColor: "#1e293b",
    borderRadius: 12,
    padding: 16,
    color: "#fff",
    fontSize: 16,
  },

  button: {
    backgroundColor: "#38bdf8",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#0f172a",
    fontWeight: "700",
    fontSize: 16,
  },

  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  loginText: {
    color: "#94a3b8",
    fontSize: 14,
  },

  loginButtonText: {
    color: "#38bdf8",
    fontWeight: "600",
    fontSize: 14,
  },
});
