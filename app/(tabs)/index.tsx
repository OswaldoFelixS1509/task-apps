import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500 text-white">
        Welcome to Nativewind!
      </Text>
      <Link href='/onboarding' className="mt-4 rounded bg-primary text-white p-4"> Go to onboarding</Link>

      <Link href='/(auth)/sign-in' className="mt-4 rounded bg-primary text-white p-4"> Go to sign in</Link>

      <Link href='/(auth)/sign-up' className="mt-4 rounded bg-primary text-white p-4"> Go to sign up</Link>



      <Link href='/subscriptions/spotify' className="mt-4 rounded bg-primary text-white p-4"> Spotify subs</Link>

      <Link href='/subscriptions/mpplus' className="mt-4 rounded bg-primary text-white p-4"> Mercado pago +</Link>
    </View>
  );
}