import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
} from "react-native";
import {
  IconButton,
  Icon,
  TextInput,
  Button,
} from "react-native-paper";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function LoginPage() {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={[
        { flex: 1, paddingTop: StatusBar.currentHeight },
        styles.container,
      ]}
    >
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={{ overflow: "hidden", paddingBottom: 5 }}>
            <View style={[styles.row]}>
              <View style={{ width: 100 }}>
                <IconButton
                  style={styles.button}
                  icon="arrow-left"
                  iconColor="orange"
                  size={20}
                  onPress={() => console.log("Pressed")}
                />
              </View>
              <Text>Shopee</Text>
              <View style={[, styles.rowChild, { width: 100 }]}>
                <IconButton
                  style={styles.button}
                  icon="store-plus-outline"
                  iconColor="orange"
                  size={20}
                  onPress={() => console.log("Pressed")}
                />
                <IconButton
                  style={styles.button}
                  icon="progress-question"
                  iconColor="orange"
                  size={20}
                  onPress={() => console.log("Pressed")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.rowChild, { marginBottom: 32, marginTop: 32 }]}>
            <Image
              style={styles.logo}
              source={require("./assets/images/shopee_logo.png")}
            ></Image>
          </View>
          <View
            style={{
              width: "80%",
            }}
          >
            <View style={[styles.textInput]}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Số điện thoại"
                left={
                  <TextInput.Icon
                    icon="account-outline"
                    size={24}
                    color="grey"
                  />
                }
              />
            </View>
            <View style={styles.textInput}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Mật khẩu"
                left={
                  <TextInput.Icon
                    icon="lock-outline"
                    size={24}
                    color="grey"
                    onPress={() => console.log("lock")}
                  />
                }
                right={<TextInput.Icon icon="eye" />}
              />
            </View>
            <Button
              style={styles.loginButton}
              mode="contained"
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              Đăng Nhập
            </Button>
            <View style={[styles.rowSpaceBtw, { marginTop: 8 }]}>
              <Text style={styles.textLogin}>Quên mật khẩu</Text>
              <Text style={styles.textLogin}>Đăng nhập bằng SMS</Text>
            </View>
            <View style={[styles.rowChild, { marginTop: 16 }]}>
              <Text>Hoặc</Text>
            </View>
            <Button style={styles.loginMore} mode="contained">
              <Text style={{ color: "#000" }}>Đăng nhập bằng Facebook</Text>
            </Button>
            <Button style={styles.loginMore} mode="contained">
              <Text style={{ color: "#000" }}>Đăng nhập bằng Google</Text>
            </Button>
            <Button style={styles.loginMore} mode="contained">
              <Text style={{ color: "#000" }}>Đăng nhập bằng Line</Text>
            </Button>
            <Button style={styles.loginMore} mode="contained">
              <Text style={{ color: "#000" }}>Đăng nhập bằng Apple</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
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
  row: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
    // eight: 150,
    width: "100%",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  logo: { width: 90, height: 90 },
  rowChild: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  rowSpaceBtw: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  input: { backgroundColor: "#fff", width: "100%" },
  loginButton: {
    marginTop: 12,
    backgroundColor: "#dc593b",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
  },
  loginMore: {
    marginTop: 12,
    backgroundColor: "#fff",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "grey",
  },
  textLogin: { color: "#638dde", fontWeight: "bold" },
});
