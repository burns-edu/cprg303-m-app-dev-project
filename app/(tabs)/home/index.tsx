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

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#99B868" />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.welcomeText}>Welcome, John</Text>

        {/* Accounts Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Accounts</Text>
          </View>

          <View style={styles.accountCard}>
            <Text style={styles.accountType}>Chequing Accounts</Text>

            <TouchableOpacity style={styles.accountRow}>
              <Text style={styles.accountName}>Spending</Text>
              <View style={styles.amountContainer}>
                <Text style={styles.amount}>$67.00</Text>
                <Ionicons name="chevron-forward" size={20} color="#666" />
              </View>
            </TouchableOpacity>

            <Text style={styles.accountType}>Saving Accounts</Text>

            <TouchableOpacity style={styles.accountRow}>
              <Text style={styles.accountName}>Savings</Text>
              <View style={styles.amountContainer}>
                <Text style={styles.amount}>$1,234.56</Text>
                <Ionicons name="chevron-forward" size={20} color="#666" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.accountRow, styles.lastAccountRow]}
            >
              <Text style={styles.accountName}>Vacation</Text>
              <View style={styles.amountContainer}>
                <Text style={styles.amount}>$78.90</Text>
                <Ionicons name="chevron-forward" size={20} color="#666" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Transactions */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Transactions</Text>
          </View>

          <View style={styles.transactionCard}>
            <Text style={styles.date}>March 23, 2026</Text>

            <View style={styles.transactionRow}>
              <Text style={styles.transactionTitle}>Deposit (Vacation)</Text>
              <Text style={styles.positiveAmount}>+$12.00</Text>
            </View>

            <View style={styles.transactionRow}>
              <Text style={styles.transactionTitle}>Withdraw (Spending)</Text>
              <Text style={styles.negativeAmount}>-$30.00</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    backgroundColor: "#99B868",
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  scrollView: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 15,
  },
  section: {
    marginBottom: 25,
  },
  sectionHeader: {
    backgroundColor: "#99B868",
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginBottom: 1,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  accountCard: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 12,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  accountType: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
    color: "#666",
    fontSize: 14,
    fontWeight: "500",
  },
  accountRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  lastAccountRow: {
    borderBottomWidth: 0,
  },
  accountName: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  amount: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginRight: 8,
  },
  transactionCard: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  date: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
  },
  transactionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  transactionTitle: {
    fontSize: 16,
    color: "#333",
  },
  positiveAmount: {
    color: "#99B868",
    fontWeight: "600",
    fontSize: 16,
  },
  negativeAmount: {
    color: "#f44336",
    fontWeight: "600",
    fontSize: 16,
  },
});
