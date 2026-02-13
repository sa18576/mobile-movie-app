import { Text, View } from "react-native";
import "../globals.css"
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      className="flex justify-center items-center"
    >
      <Text className="text-dark-200">Welcome!</Text>
      {/* <Link href="/onboarding" >Onboarding</Link>
      <Link href="/movie/avengers" > Avenger Movie</Link> */}
    </View>
  );
}
