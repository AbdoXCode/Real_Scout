import React, {useEffect, useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import icons from "../../../constants/icons";
import {router, useLocalSearchParams} from "expo-router";
import SearchCustomBar from "../../../components/SearchCustomBar";
import Filter from "../../../components/filter";
import useData from "../../../hooks/useData";
import Card from "../../../components/Card";

export default function Explore() {
    const {properties, searchForProperty} = useData()
    const params = useLocalSearchParams()
    const filteredProperties = (!params.filter || params.filter === "All") ? properties : properties.filter((item) => item.propertyType === params.filter)

    const [searchQuery, setSearchQuery] = useState("")
    const [debouncedQuery, setDebouncedQuery] = useState("")

    useEffect(() => {
        
    }, []);


    return (
        <SafeAreaView className="bg-white flex-1 px-5">
            <View className="flex-row justify-between items-center">
                <TouchableOpacity onPress={() => router.back()}>
                    <View className="bg-[#0061FF1A] rounded-full p-2">
                        <Image source={icons.backArrow} className="size-6"/>
                    </View>
                </TouchableOpacity>

                <Text className="font-rubik-medium">Search for Your Ideal Home</Text>

                <Image source={icons.bell} className="size-6"/>
            </View>

            <SearchCustomBar onPress={false} value={searchQuery} onChange={setSearchQuery}/>

            <View className="py-2">
                <Filter/>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={filteredProperties}
                numColumns={2}
                contentContainerClassName="gap-4 pb-28"
                columnWrapperClassName="gap-4"
                renderItem={({item}) => (
                    <Card item={item} onPress={() => router.push(`properties/${item.$id}`)}/>
                )}
            />

        </SafeAreaView>
    )
}
