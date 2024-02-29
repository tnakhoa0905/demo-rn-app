import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Text,
  TextInput,
} from "react-native";
import { Icon, IconButton } from "react-native-paper";

export default function HomePage() {
  return (
    <SafeAreaView style={[{ flex: 1, paddingTop: StatusBar.currentHeight }]}>
      <View style={{ flex: 1 }}>
        <View style={styles.squreStyle}></View>
        <View style={styles.arcStyle}></View>
        <View style={styles.containerRow}>
          <Icon source="magnify" color="grey" size={20} />
          <TextInput
            style={styles.textSearch}
            underlineColorAndroid="transparent"
            placeholder="Tìm kiếm"
          ></TextInput>
          <IconButton
            icon="cart-outline"
            iconColor={MD3Colors.error50}
            size={20}
            onPress={() => console.log("Pressed")}
          />{" "}
          <IconButton
            icon="message-outline"
            iconColor={MD3Colors.error50}
            size={20}
            onPress={() => console.log("Pressed")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  squreStyle: {
    width: "100%",
    height: "60%",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: "#dc593b",
  },
  arcStyle: {
    width: "20%",
    height: "65%",
    position: "absolute",
    // top: "51%",
    left: "40%",
    borderRadius: 35,
    backgroundColor: "#dc593b",
    transform: [{ scaleX: 5 }, { scaleY: 1 }],
  },
  containerRow: {
    height: "65%",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
    position: "absolute",
  },
  textSearch: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    borderColor: "#fff",
    zIndex: 2,
  },
});
