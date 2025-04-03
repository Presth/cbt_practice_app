import { View } from "react-native";
import useLocalStorage from "@/hooks/useLocalStorage";
import FirstScreen from "./(onboarding)/firstScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import SignIn from "./(auth)/signin";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [loaded, error] = useFonts({
    Lato_Thin: require("@/assets/fonts/Lato/Lato-Thin.ttf"),
    Lato_Regular: require("@/assets/fonts/Lato/Lato-Regular.ttf"),
    Lato_Medium: require("@/assets/fonts/Lato/Lato-Bold.ttf"),
    Lato_Bold: require("@/assets/fonts/Lato/Lato-Black.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  // if (!loaded && !error) {
  //   return null;
  // }

  const [isBoarded] = useLocalStorage("boarded");

  if (isBoarded === null) {
    return (
      <View style={{ flex: 1 }}>
        <FirstScreen />
      </View>
    );
  }
  return <SignIn />;
}
