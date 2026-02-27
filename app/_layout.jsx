import {useFonts} from "expo-font";
import {UserProvider} from "../contexts/UserContext";
import {SplashScreen, Stack} from "expo-router";
import useUser from "../hooks/useUser";
import {useEffect} from "react";

export default function RootLayout() {
    const [fonts] = useFonts({
        "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
        "Rubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
        "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
        "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
        "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
        "Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
    })

    if (!fonts) {
        return null
    }


    return (
        <UserProvider>
            <InnerApp fontsLoaded={fonts}/>
        </UserProvider>
    )
}

function InnerApp({fontsLoaded}) {
    const {user, loading} = useUser()

    useEffect(() => {
        if (fontsLoaded && !loading) {
            SplashScreen.hideAsync()
        }
    }, [fontsLoaded, loading]);

    if (!fontsLoaded || loading) {
        return null;
    }
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="(auth)" options={{headerShown: false}}/>
            <Stack.Screen name="(root)" options={{headerShown: false}}/>

        </Stack>
    )
}