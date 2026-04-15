import Header from "@/components/header";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { Stack, useNavigation, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

// AuthGuard enforces protected routes globally
const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { session, isLoading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    const inTabGroup = segments[0] === "(tabs)";

    if (!session && inTabGroup) {
      router.replace("/"); // not signed in, kick to login
    } else if (session && !inTabGroup) {
      router.replace("/(tabs)/home"); // signed in, go to app
    }
  }, [session, isLoading, segments]);

  return <>{children}</>;
};

export default function RootLayout() {
  const navigation = useNavigation();

  return (
    <AuthProvider>
      <AuthGuard>
        <Stack
          // Header default settings
          screenOptions={{
            header: () => <Header showBack={navigation.canGoBack()} showNav />,
          }}
        >
          {/* Login Page - No back or nav buttons */}
          <Stack.Screen name="index" options={{ header: () => <Header /> }} />
        </Stack>
      </AuthGuard>
    </AuthProvider>
  );
}
