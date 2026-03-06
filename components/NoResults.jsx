import {Image, Text, View} from 'react-native'
import React from 'react'
import images from "../constants/images";

export default function NoResults() {
    return (
        <View className="size-80 items-center">
            <Image source={images.noResult} className="size-10/12 mb-3"/>
            <Text className="text-xl font-rubik-bold color-black-300">Nothing was Found Here</Text>
        </View>
    )
}
