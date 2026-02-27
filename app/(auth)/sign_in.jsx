import {Alert, Image, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import Images from "../../constants/images";
import "../global.css"
import icons from "../../constants/icons";
import useUser from "../../hooks/useUser";


export default function SignIn() {
    const {login} = useUser()

    async function loginWithGoogle() {
        try {
            await login()
        } catch (error) {
            Alert.alert("Login Failed", "Unable to login with Google. Please try again.")
            console.log(error.message)
        }
    }


    return (
        <SafeAreaView className="bg-white flex-1">
            <ScrollView contentContainerStyle={{height: "100%"}}>
                <Image source={Images.onboarding} className="h-4/6 w-full" resizeMode="contain"/>
                <View>
                    <Text className="text-center uppercase font-rubik text-black-200">Welcome to Real Scout</Text>

                    <Text className="text-center text-3xl text-black-300 font-rubik-semibold mt-3">Let’s Get You
                        Closer to {"\n"}
                        <Text className="text-primary-300">Your Ideal Home</Text>
                    </Text>

                    <Text className="text-center text-lg text-black-200 mt-5 font-rubik">Login to Real Scout with
                        Google</Text>

                    <View className="mx-5 w-auto">
                        <TouchableOpacity className="bg-white shadow-md shadow-zinc-300 rounded-full py-4 mt-6"
                                          onPress={loginWithGoogle}>
                            <View className="flex-row justify-center items-center">
                                <Image source={icons.google} className="w-5 h-5" resizeMode="contain"/>
                                <Text className="text-center font-rubik-medium text-lg ml-2.5">
                                    Sign Up with Google
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
