import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect, useState } from "react";

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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <AuthProvider>
      <AuthGuard>
        <Stack
          // Header default settings
          screenOptions={{
            header: () => (
              <Header
                showBack
                showNav
                onNavPress={() => setSidebarOpen(true)}
              />
            ),
          }}
        >
          {/* Login Page - No back or nav buttons */}
          <Stack.Screen name="index" options={{ header: () => <Header /> }} />
          {/* Sign Up Page - No back or nav button */}
          <Stack.Screen name="signup" options={{ header: () => <Header /> }} />
        </Stack>
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </AuthGuard>
    </AuthProvider>
  );
}
