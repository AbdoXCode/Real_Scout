import {Image, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import images from "../constants/images";
import icons from "../constants/icons";

export default function FeaturedCard({item, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} className="w-60 h-80 relative">
            <Image source={{uri: item.image}} className="size-full rounded-2xl"/>
            <Image source={images.cardGradient} className="size-full absolute bottom-0 rounded-2xl"/>

            <View className="flex-row items-center absolute top-4 right-4 bg-white rounded-full px-2.5 py-1 gap-1">
                <Image source={icons.star} className="size-3.5"/>
                <Text className="font-rubik-semibold text-sm color-[#246BFD]">{item.rating}</Text>
            </View>

            <View className="flex-col absolute bottom-0 p-4">
                <Text className="font-rubik-bold color-white text-lg">{item.propertyName}</Text>
                <Text className="font-rubik color-white text mt-1">{item.location}</Text>

                <View className="flex-1 flex-row w-full items-center justify-between mt-1">
                    <Text className="font-rubik-bold color-white text-lg">${item.price.toLocaleString("en-US")}</Text>
                    <Image source={icons.heart} className="size-5"/>
                </View>
            </View>
        </TouchableOpacity>
    )
}
