import React, { useState } from "react";
import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const LoginScreen: React.FC = () => {
  const router = useRouter(); // 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login:", email, password);
  };

  const handleRegister = () => {
    router.push("/register"); 
  };

  const handleForgotPassword = () => {
    router.push("/forgot-password"); 
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/images/icon.png")} style={styles.logoImage} />
        <Text style={styles.title}>TickTickly</Text>
        <Text style={styles.subtitle}>Stay Organized. Stay Productive.</Text>
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

        <TextInput
          placeholder="Password"
          placeholderTextColor="#9ca3af"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Not registered yet?</Text>
          <TouchableOpacity onPress={handleRegister}>
            <Text style={styles.registerButtonText}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
    fontSize: 32,
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

  forgotText: {
    color: "#38bdf8",
    textAlign: "right",
    marginTop: -8,
    marginBottom: 10,
    fontSize: 14,
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

  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  registerText: {
    color: "#94a3b8",
    fontSize: 14,
  },

  registerButtonText: {
    color: "#38bdf8",
    fontWeight: "600",
    fontSize: 14,
  },
});
