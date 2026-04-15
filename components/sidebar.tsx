// components/Sidebar.tsx
import { useAuth } from "@/context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useSegments } from "expo-router";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");
const SIDEBAR_WIDTH = width * 0.78;

interface MenuItem {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  route: string;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const segments = useSegments();
  const { signOut } = useAuth();

  const menuItems: MenuItem[] = [
    { icon: "person", label: "Profile", route: "/profile" },
    { icon: "grid", label: "Dashboard", route: "/(tabs)/home" },
    { icon: "settings", label: "Settings", route: "/(tabs)/settings" },
    // Add more items as needed
  ];

  const navigateTo = (route: string) => {
    router.push(route as any);
    onClose();
  };

  const handleLogout = async () => {
    await signOut();
    onClose();
  };

  const isActiveRoute = (route: string) => {
    return segments.join("/").includes(route.replace("/", ""));
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <TouchableOpacity
        style={styles.backdrop}
        activeOpacity={1}
        onPress={onClose}
      />

      {/* Sidebar */}
      <View style={styles.sidebar}>
        {/* Header */}
        <View style={styles.sidebarHeader}>
          <Text style={styles.title}>Menu</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item) => {
            const isActive = isActiveRoute(item.route);
            return (
              <TouchableOpacity
                key={item.route}
                style={[styles.menuItem, isActive && styles.activeMenuItem]}
                onPress={() => navigateTo(item.route)}
              >
                <Ionicons
                  name={item.icon}
                  size={26}
                  color={isActive ? "#99B868" : "#555"}
                />
                <Text
                  style={[styles.menuText, isActive && styles.activeMenuText]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Logout */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={26} color="#FF3B30" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 100,
  },
  sidebar: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: SIDEBAR_WIDTH,
    backgroundColor: "#ffffff",
    zIndex: 101,
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 15,
    paddingTop: 55,
  },
  sidebarHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 22,
    paddingBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1c1c1e",
  },
  closeText: {
    fontSize: 32,
    color: "#888",
    fontWeight: "300",
  },
  menuContainer: {
    flex: 1,
    paddingTop: 12,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 17,
    paddingHorizontal: 22,
  },
  activeMenuItem: {
    backgroundColor: "#f0f8ff",
  },
  menuText: {
    fontSize: 19,
    marginLeft: 18,
    color: "#333",
  },
  activeMenuText: {
    color: "#99B868",
    fontWeight: "600",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 22,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  logoutText: {
    fontSize: 19,
    marginLeft: 18,
    color: "#FF3B30",
    fontWeight: "600",
  },
});

export default Sidebar;
