import {Alert, Image, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import {settings} from "../../../constants/data";
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import icons from "../../../constants/icons";
import images from "../../../constants/images";
import SettingsElement from "../../../components/SettingsElement";
import useUser from "../../../hooks/useUser";
import {useRouter} from "expo-router";

export default function Profile() {
    const {user , logout} = useUser()

    async function handleLogout(){
        try{
            await logout()
            Alert.alert("Logout Successful" , "You have been logged out successfully.")
        }catch (e) {
            Alert.alert("Logout Failed" , "Unable to logout. Please try again.")
            console.log(e.message)
        }

    }
    return (
        <SafeAreaView className="flex-1 p-5 bg-white">
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="flex-row items-center justify-between">
                    <Text className="text-xl font-rubik-bold">Profile</Text>
                    <Image source={icons.bell} className="size-5"/>
                </View>

                <View className="items-center mt-10 relative">
                    <View>
                        <Image source={{uri:user?.avatar}} className="size-36 rounded-full"/>
                        <TouchableOpacity className="absolute bottom-0 right-1">
                            <Image source={icons.edit} className="size-8"/>
                        </TouchableOpacity>
                    </View>
                    <Text className="text-xl font-rubik-semibold mt-4">
                        {user?.name}
                    </Text>

                </View>

                <View className="mt-12 border-t border-primary-200 pt-6 gap-6">
                    <SettingsElement icon={icons.calendar} title="My Booking"/>
                    <SettingsElement icon={icons.wallet} title="Payments"/>
                </View>

                <View className="border-t border-primary-200 my-6 pt-6 gap-6">
                    {settings.map((setting, index) => (
                        <SettingsElement {...setting} key={index}/>
                    ))}
                </View>

                <SettingsElement icon={icons.logout} title="Logout" showArrow={false} textStyle="text-danger" onPress={handleLogout}/>
            </ScrollView>
        </SafeAreaView>
    )
}
