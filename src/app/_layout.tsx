import { Stack } from "expo-router";

import { SafeAreaView } from "react-native-safe-area-context";
import "@/global.css";
import { GluestackUIProvider } from "@src/components/ui/gluestack-ui-provider";

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
    </GluestackUIProvider>
  );
}
