import { Stack } from "expo-router";

function Layout() {
  return (
    <Stack>
      <Stack.Screen name="firstScreen" options={{ headerShown: false }} />
      <Stack.Screen name="secondScreen" options={{ headerShown: false }} />
      <Stack.Screen name="thirdScreen" options={{ headerShown: false }} />
    </Stack>
  );
}

export default Layout;
