import {View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import icons from "../constants/icons";

export default function Card({item,onPress}) {
    return (
        <TouchableOpacity onPress={onPress} className="bg-white flex-1 relative shadow-lg py-4 px-3 rounded-xl">

            <Image source={item.image} className="w-full h-40 rounded-lg"/>

            <View className="flex-row items-center absolute top-5 right-5 bg-white rounded-full px-2.5 py-1 gap-1">
                <Image source={icons.star} className="size-3.5"/>
                <Text className="font-rubik-semibold text-sm color-[#246BFD]">{item.rating}</Text>
            </View>

            <View className="p-4">
                <Text className="font-rubik-bold color-black text-lg">{item.title}</Text>
                <Text className="font-rubik color-black-100 text mt-1">{item.location}</Text>

                <View className="flex-1 flex-row w-full items-center justify-between mt-1">
                    <Text className="font-rubik-bold color-primary-300 text-lg">${item.price}</Text>
                    <Image source={icons.heart} className="size-5" tintColor="grey"/>
                </View>
            </View>


        </TouchableOpacity>
    )
}
