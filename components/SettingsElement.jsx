import {View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import icons from "../constants/icons";

export default function SettingsElement({icon , title , onPress , textStyle , showArrow = true}) {
    return (
        <TouchableOpacity className="flex-row items-center" onPress={onPress}>
            <View className="flex-row items-center flex-1 gap-3">
                <Image source={icon} className="size-7"/>
                <Text className={`text-lg font-rubik-medium ${textStyle}`}>{title}</Text>
            </View>

            {showArrow && <Image source={icons.rightArrow} className="size-5"/>}
        </TouchableOpacity>
    )
}
