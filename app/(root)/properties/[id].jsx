import {ActivityIndicator, FlatList, Image, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import {router, useLocalSearchParams} from "expo-router"
import useData from "../../../hooks/useData";
import icons from "../../../constants/icons";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import images from "../../../constants/images";
import {facilities, gallery} from "../../../constants/data";
import Comment from "../../../components/Comment";

export default function Property() {
    const {id} = useLocalSearchParams()
    const {fetchPropertyById} = useData()

    const [property, setProperty] = useState(null)

    const insets = useSafeAreaInsets()

    useEffect(() => {
        async function getPropertyData() {
            const res = await fetchPropertyById(id)

            setProperty(res)
        }

        getPropertyData()
    }, []);

    if (!property) {
        return (
            <ActivityIndicator size="large" className="flex-1"/>
        )
    }
    return (
        <View className="flex-1">
            <View className="absolute left-0 m-5 p-2 rounded-full bg-white z-10" style={{top: insets.top}}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Image source={icons.backArrow} className="size-7"/>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-36"
                        className="bg-white flex-1">
                <View className="h-[400px] relative">
                    <Image source={{uri: property.image}} className="size-full"/>

                    <View
                        style={{top: insets.top}}
                        className={`flex-1 flex-row absolute right-0 left-0 m-5 items-center justify-end`}>

                        <View className="flex-row gap-5">
                            <Image source={icons.heart} className="size-6" tintColor="black"/>
                            <Image source={icons.send} className="size-6"/>
                        </View>
                    </View>
                </View>

                <View className="mt-6 mx-5">
                    <View className="gap-4">
                        <Text className="text-2xl font-rubik-bold">{property.propertyName}</Text>
                        <View className="flex-row items-center">
                            <View className="bg-primary-300/10 px-2.5 py-1.5 rounded-full mr-2.5">
                                <Text className="font-rubik-semibold color-primary-300">{property.propertyType}</Text>
                            </View>

                            <Image source={icons.star} className="size-5"/>
                            <Text className="text-sm font-rubik-medium color-black-200">
                                {property.rating} (1,275 reviews)
                            </Text>
                        </View>
                    </View>

                    <View className="flex flex-row items-center mt-4">
                        <View className="flex flex-row items-center justify-center bg-primary-100 rounded-full size-10">
                            <Image source={icons.bed} className="size-4"/>
                        </View>
                        <Text className="text-black-300 text-sm font-rubik-medium ml-2">
                            8 Beds
                        </Text>
                        <View
                            className="flex flex-row items-center justify-center bg-primary-100 rounded-full size-10 ml-7">
                            <Image source={icons.bath} className="size-4"/>
                        </View>
                        <Text className="text-black-300 text-sm font-rubik-medium ml-2">
                            3 Baths
                        </Text>
                        <View
                            className="flex flex-row items-center justify-center bg-primary-100 rounded-full size-10 ml-7">
                            <Image source={icons.area} className="size-4"/>
                        </View>
                        <Text className="text-black-300 text-sm font-rubik-medium ml-2">
                            2150 sqft
                        </Text>
                    </View>

                    <View className="w-full border-t border-primary-200 pt-7 mt-5">
                        <Text className="text-black-300 text-xl font-rubik-bold">
                            Agent
                        </Text>

                        <View className="flex flex-row items-center justify-between mt-4">
                            <View className="flex flex-row items-center">
                                <Image
                                    source={images.avatar}
                                    className="size-14 rounded-full"
                                />

                                <View className="flex flex-col items-start justify-center ml-3">
                                    <Text className="text-lg text-black-300 text-start font-rubik-bold">
                                        Natasya Wilodra
                                    </Text>
                                    <Text className="text-sm text-black-200 text-start font-rubik-medium">
                                        Owner
                                    </Text>
                                </View>
                            </View>

                            <View className="flex flex-row items-center gap-3">
                                <Image source={icons.chat} className="size-7"/>
                                <Image source={icons.phone} className="size-7"/>
                            </View>
                        </View>
                    </View>


                    <View className="mt-8">
                        <Text className="text-black-300 text-xl font-rubik-bold">
                            Overview
                        </Text>
                        <Text className="text-black-200 text-base font-rubik mt-2">
                            Sleek, modern 2-bedroom apartment with open living space, high-end finishes, and city views.
                            Minutes from downtown, dining, and transit.
                        </Text>
                    </View>

                    <View className="mt-7">
                        <Text className="text-black-300 text-xl font-rubik-bold">
                            Facilities
                        </Text>

                        <View className="flex-row flex-wrap gap-2 mt-5 flex-1">
                            {facilities.map((item, index) => {
                                return (
                                    <View key={index} className="w-[6rem] justify-center items-center">
                                        <View className="bg-[#0061FF0A] rounded-full items-center p-4">
                                            <Image source={item.icon} className="size-7"/>
                                        </View>
                                        <Text numberOfLines={1}
                                              className="text-black-300 text-sm text-center font-rubik mt-1.5">
                                            {item.title}
                                        </Text>
                                    </View>
                                )
                            })}
                        </View>
                    </View>


                    <View className="mt-7">
                        <Text className="text-black-300 text-xl font-rubik-bold">
                            Gallery
                        </Text>
                        <FlatList
                            data={gallery}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({item}) => (
                                <TouchableOpacity>
                                    <Image
                                        source={item.image}
                                        className={`size-40 rounded-xl ${item.id === 3 ? "shadow-md" : ""}`}
                                    />
                                    {item.id === 3 && (
                                        <View
                                            className="absolute inset-0 bg-black/60 rounded-xl items-center justify-center">
                                            <Text className="text-white text-xl font-rubik-bold">
                                                20+
                                            </Text>
                                        </View>
                                    )}
                                </TouchableOpacity>
                            )}
                            contentContainerClassName="flex gap-4 mt-5"
                        />
                    </View>


                    <View className="mt-7">
                        <Text className="text-black-300 text-xl font-rubik-bold">
                            Location
                        </Text>
                        <View className="flex flex-row items-center justify-start mt-4 gap-2">
                            <Image source={icons.location} className="w-7 h-7"/>
                            <Text className="text-black-200 text-sm font-rubik-medium">
                                Grand City St. 100, New York, United States
                            </Text>
                        </View>

                        <Image
                            source={images.map}
                            className="h-40 w-full mt-5 rounded-xl"
                        />
                    </View>


                    <View className="mt-7">
                        <View className="flex flex-row items-center justify-between">
                            <View className="flex flex-row items-center">
                                <Image source={icons.star} className="size-6"/>
                                <Text className="text-black-300 text-xl font-rubik-bold ml-2">
                                    {property?.rating} (1,275 reviews)
                                </Text>
                            </View>

                            <TouchableOpacity>
                                <Text className="text-primary-300 text-base font-rubik-bold">
                                    View All
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View className="mt-6">
                            <Comment/>
                        </View>
                    </View>


                </View>

            </ScrollView>
            <View
                className="absolute bottom-0 right-0 left-0 p-6 pb-10 bg-white rounded-t-3xl border border-[#0061FF1A] flex-row items-center justify-between">
                <View>
                    <Text className="font-rubik-medium text-xs color-black-200 mb-2">Price</Text>
                    <Text className="font-rubik-semibold text-2xl color-primary-300">${property.price}</Text>
                </View>

                <TouchableOpacity className="bg-primary-300 py-4 rounded-full">
                    <Text className="color-white px-16 font-rubik-semibold">Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}