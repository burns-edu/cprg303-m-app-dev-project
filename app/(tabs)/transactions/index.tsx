import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

const Transactions = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#99B868" />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.welcomeText}>Transactions</Text>

        {/* Accounts Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Account: Spending</Text>
            <Text style={styles.sectionSubtitle}>(111042856)</Text>
          </View>

          <View style={styles.transactionsCard}>
            <Text style={styles.date}>March 23, 2026</Text>

            <View style={styles.transactionRow}>
              <Text style={styles.transactionTitle}>Credit Card Payment</Text>
              <Text style={styles.amount}>-$389.82</Text>
            </View>

            <View style={styles.transactionRow}>
              <Text style={styles.transactionTitle}>E-TRANSFER</Text>
              <Text style={styles.amount}>-$40.00</Text>
              <Text style={styles.pending}>Pending</Text>
            </View>

            <View style={styles.transactionRow}>
              <Text style={styles.transactionTitle}>PAYCHECK-AUTOPAY</Text>
              <Text style={styles.amount}>+$496.67</Text>
            </View>
          </View>
        </View>
        <View style={styles.transactionsCard}>
          <Text style={styles.date}>March 22, 2026</Text>

          <View style={styles.transactionRow}>
            <Text style={styles.transactionTitle}>Steam Purchase</Text>
            <Text style={styles.amount}>-$25.00</Text>
          </View>

          <View style={styles.transactionRow}>
            <Text style={styles.transactionTitle}>
              VISA DEBIT RETAIL PURCHASE AMZN
            </Text>
            <Text style={styles.amount}>-$15.31</Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.date}>End of recent transactions</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Transactions;

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
    marginHorizontal: 20,
    borderRadius: 12,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  sectionSubtitle: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  accountType: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
    color: "#666",
    fontSize: 14,
    fontWeight: "500",
  },
  transaction: {
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
  pending: {
    fontSize: 12,
    fontWeight: "600",
    color: "#505050",
    marginRight: 8,
  },
  transactionsCard: {
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
    fontSize: 14,
    color: "#333",
    textAlign: "center",
  },
  bottom: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    padding: 20,
    elevation: 2,
    textAlign: "center",
  },
});
