import {View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import images from "../constants/images";
import icons from "../constants/icons";

export default function FeaturedCard({item , onPress}) {
    return (
        <TouchableOpacity onPress={onPress} className="w-60 h-80 relative">
            <Image source={images.japan} className="size-full rounded-2xl"/>
            <Image source={images.cardGradient} className="size-full absolute bottom-0 rounded-2xl"/>

            <View className="flex-col absolute bottom-0 p-4">
                <Text className="font-rubik-bold color-white text-lg">Merialla Villa</Text>
                <Text className="font-rubik color-white text mt-1">New York, US</Text>

                <View className="flex-1 flex-row w-full items-center justify-between mt-1">
                    <Text className="font-rubik-bold color-white text-lg">$12219</Text>
                    <Image source={icons.heart} className="size-5"/>
                </View>
            </View>
        </TouchableOpacity>
    )
}
