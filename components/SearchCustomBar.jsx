import {Image, TextInput, TouchableOpacity, View} from 'react-native'
import React from 'react'
import icons from "../constants/icons";
import {router} from "expo-router";

export default function SearchCustomBar({value, onChange, onPress}) {
    return (
        <View className="bg-accent-100 rounded-lg flex-row items-center mt-6 px-4 py-2 border border-primary-100 ">
            <View className="flex-row items-center justify-start gap-4">
                <Image source={icons.search} className="size-5"/>
                <TextInput
                    value={value}
                    onPress={onPress ? () => router.push("/explore") : null}
                    onChangeText={onChange}
                    placeholder="Search something"
                    className="flex-1 color-black-100 font-rubik"
                />
                <TouchableOpacity>
                    <Image source={icons.filter} className="size-5"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
