import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, KeyboardAvoidingView, Platform, Pressable, Keyboard, Alert } from "react-native";
import Input, { KeyboardTypes } from "../componets/Input";
import Button from "../componets/Button";
import { signInAsync } from "../api/auth";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setDisabled(!(email && password));
  }, [email, password]);

  const onSubmit = () => {
    if (disabled || loading) return;
    Keyboard.dismiss();
    setLoading(true);

    signInAsync(email.trim(), password)
      .then((user) => {
        Alert.alert("로그인 성공", `${user.name}님 환영합니다!`);
      })
      .catch(() => {
        Alert.alert("로그인 실패", "아이디 또는 비밀번호를 확인해주세요.");
      });
  };
return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({ ios: "padding" })}>
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.image}
            resizeMode="contain"
          />

          <Input
            title="아이디"
            placeholder="your@email.com"
            keyboardType={KeyboardTypes.EMAIL}
            iconName="email"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            title="비밀번호"
            placeholder="비밀번호"
            secureTextEntry
            iconName="lock"
            value={password}
            onChangeText={setPassword}
          />

        <Button title="로그인" onPress={onSubmit} disabled={disabled} />
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 200,
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 180,
    marginBottom: 10,
  },
});
