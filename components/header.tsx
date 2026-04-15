import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type HeaderProps = {
  showBack?: boolean;
  showNav?: boolean;
  onNavPress?: () => void;
};

export default function Header({
  showBack = false,
  showNav = false,
  onNavPress,
}: HeaderProps) {
  return (
    <View style={styles.header}>
      {/* Back Button */}
      <View style={styles.placeholder}>
        {showBack && (
          <TouchableOpacity
            style={styles.buttonBox}
            onPress={() => console.log("Back pressed")}
          >
            <Text style={styles.button}>❮</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Logo */}
      <Text style={styles.title}>Bingo Banking</Text>

      {/* Nav Button */}
      <View style={styles.placeholder}>
        {showNav && (
          <TouchableOpacity
            style={styles.buttonBox}
            onPress={onNavPress}
          >
            <Text style={styles.button}>☰</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#7F9C50",
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 10,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  placeholder: {
    width: 40,
    height: 40,
  },

  buttonBox: {
    width: 40,
    height: 40,
    backgroundColor: "#99B868",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    textAlignVertical: "center",
    top: -2,
  },
});
