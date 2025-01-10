import "@/global.css";
import { Stack } from "expo-router";
import { GluestackUIProvider } from "@src/components/ui/gluestack-ui-provider";
import { Provider as ReduxProvider } from "react-redux";
import store from "@src/store";

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <ReduxProvider store={store}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="index" />
        </Stack>
      </ReduxProvider>
    </GluestackUIProvider>
  );
}
