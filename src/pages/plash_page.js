import { View } from "react-native";
import { useEffect } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SplashPage() {
  const navigation = useNavigation();
  useEffect(() => {
    const timeOut = setTimeout(navigationToLogin, 2000);
    return () => clearTimeout(timeOut);
  }, []);
  const navigationToLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <SafeAreaView
      style={[
        { flex: 1, paddingTop: StatusBar.currentHeight },
        styles.container,
      ]}
    >
      <View style={[styles.viewLogo]}>
        <Image
          style={styles.logo}
          source={require("./assets/images/shopee_logo.png")}
        ></Image>
        <Text style={styles.textStyle32}>Shopee</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  logo: { width: 160, height: 160 },
  viewLogo: {
    marginBottom: 32,
    marginTop: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle32: {
    fontSize: 52,
    color: "#dc593b",
    fontWeight: "normal",
  },
});
