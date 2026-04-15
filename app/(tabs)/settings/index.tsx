import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#99B868" />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.settingsHeader}>
          <Text style={styles.settingsTitle}>Settings</Text>
        </View>

        {/* Banking Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Banking</Text>

          <TouchableOpacity style={styles.option}>
            <Ionicons name="card-outline" size={22} color="#99B868" />
            <Text style={styles.optionText}>Manage Cards</Text>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Ionicons name="paper-plane-outline" size={22} color="#99B868" />
            <Text style={styles.optionText}>Manage e-Transfers</Text>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Communication Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Communication</Text>

          <TouchableOpacity style={styles.option}>
            <Ionicons name="notifications-outline" size={22} color="#99B868" />
            <Text style={styles.optionText}>Notifications</Text>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Ionicons name="document-text-outline" size={22} color="#99B868" />
            <Text style={styles.optionText}>Statements</Text>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Ionicons name="bulb-outline" size={22} color="#99B868" />
            <Text style={styles.optionText}>Insights</Text>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* App and Security Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>App and Security</Text>

          <TouchableOpacity style={styles.option}>
            <Ionicons
              name="shield-checkmark-outline"
              size={22}
              color="#4CAF50"
            />
            <Text style={styles.optionText}>Login and Security</Text>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Ionicons name="options-outline" size={22} color="#99B868" />
            <Text style={styles.optionText}>Preferences</Text>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    backgroundColor: "#99B868",
    paddingHorizontal: 16,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  scrollView: {
    flex: 1,
  },
  settingsHeader: {
    backgroundColor: "#99B868",
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  settingsTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
  },
  section: {
    marginBottom: 25,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
    paddingHorizontal: 20,
    paddingBottom: 8,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginBottom: 1,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    marginLeft: 15,
  },
});
