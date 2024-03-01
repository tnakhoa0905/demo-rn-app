import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { Icon, IconButton } from "react-native-paper";

export default function HomePage() {
  return (
    <SafeAreaView style={[{ flex: 1, paddingTop: StatusBar.currentHeight }]}>
      <ScrollView style={{}}>
        <View style={{ height: 450 }}>
          <View style={styles.squreStyle}></View>
          <View style={styles.arcStyle}></View>
          <View style={styles.containerRow}>
            <View style={styles.containerSearch}>
              <View style={{ width: "10%" }}>
                <Icon
                  style={{ width: "10%" }}
                  source="magnify"
                  color="grey"
                  size={24}
                />
              </View>

              <TextInput
                style={styles.textSearch}
                underlineColorAndroid="transparent"
                placeholder="Tìm kiếm"
              ></TextInput>
            </View>
            <IconButton
              icon="cart-outline"
              iconColor="red"
              size={20}
              onPress={() => console.log("Pressed")}
            />
            <IconButton
              icon="message-outline"
              iconColor="red"
              size={20}
              onPress={() => console.log("Pressed")}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  squreStyle: {
    width: "100%",
    height: 400,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: "#dc593b",
  },
  arcStyle: {
    width: "20%",
    height: "100%",
    position: "absolute",
    left: "40%",
    borderRadius: 35,
    backgroundColor: "#dc593b",
    transform: [{ scaleX: 5 }, { scaleY: 1 }],
  },
  containerRow: {
    flexDirection: "row",
    alignItems: "start",
    // flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
    position: "absolute",
  },
  containerSearch: {
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
    borderRadius: 8,
    backgroundColor: "#fff",
    // height: 50,
  },
  textSearch: {
    backgroundColor: "#fff",
    width: "90%",
    height: "100%",
    borderRadius: 8,
    borderColor: "#fff",
    zIndex: 1,
  },
});
