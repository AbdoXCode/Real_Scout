import {Image, Text, View} from 'react-native'
import React from 'react'
import icons from "../constants/icons";
import images from "../constants/images";

export default function Comment() {
    return (
        <View className="flex flex-col items-start">
            <View className="flex flex-row items-center">
                <Image source={images.avatar} className="size-14 rounded-full"/>
                <Text className="text-base text-black-300 text-start font-rubik-bold ml-3">
                    Charolette Hanlin
                </Text>
            </View>

            <Text className="text-black-200 text-base font-rubik mt-2">
                The apartment is very clean and modern. I really like the interior design. Looks like I'll feel at home
                😍
            </Text>

            <View className="flex flex-row items-center w-full justify-between mt-4">
                <View className="flex flex-row items-center">
                    <Image
                        source={icons.heart}
                        className="size-5"
                        tintColor={"#0061FF"}
                    />
                    <Text className="text-black-300 text-sm font-rubik-medium ml-2">
                        120
                    </Text>
                </View>
                <Text className="text-black-100 text-sm font-rubik">
                    6 days ago
                </Text>
            </View>
        </View>
    )
}
