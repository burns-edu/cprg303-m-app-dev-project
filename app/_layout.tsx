import Header from "@/components/header";
import { Stack, useNavigation } from "expo-router";

export default function RootLayout() {
  const navigation = useNavigation();

  return (
    <Stack
      // Header default settings
      screenOptions={{
        header: () => <Header showBack={navigation.canGoBack()} showNav />,
      }}
    >
      {/* Login Page - No back or nav buttons */}
      <Stack.Screen name="index" options={{ header: () => <Header /> }} />
    </Stack>
  );
}
