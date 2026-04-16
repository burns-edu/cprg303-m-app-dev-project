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
      router.replace("/"); // not logged in, kick to login
    } else if (session && !inTabGroup) {
      router.replace("/(tabs)/home"); // logged in, go to app
    }
  }, [session, isLoading, segments]);

  return <>{children}</>;
};

export default function RootLayout() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const segments = useSegments();
  const onDashboard = segments[1] === "home";

  return (
    <AuthProvider>
      <AuthGuard>
        <Stack
          // Default settings
          screenOptions={{
            header: () => (
              <Header
                showBack={!onDashboard}
                onBackPress={() => router.push("/(tabs)/home")}
                showNav
                onNavPress={() => setSidebarOpen(true)}
              />
            ),
          }}
        >
          {/* Login Page - No back or nav buttons */}
          <Stack.Screen name="index" options={{ header: () => <Header /> }} />
          {/* Sign Up Page - No nav button */}
          <Stack.Screen
            name="signup"
            options={{
              header: () => (
                <Header showBack onBackPress={() => router.push("/")} />
              ),
            }}
          />
        </Stack>
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </AuthGuard>
    </AuthProvider>
  );
}
