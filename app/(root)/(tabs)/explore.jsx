import React, {useEffect, useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {ActivityIndicator, FlatList, Image, Keyboard, Text, TouchableOpacity, View} from "react-native";
import icons from "../../../constants/icons";
import {router, useLocalSearchParams} from "expo-router";
import SearchCustomBar from "../../../components/SearchCustomBar";
import Filter from "../../../components/filter";
import useData from "../../../hooks/useData";
import Card from "../../../components/Card";

export default function Explore() {
    const {properties, searchForProperty} = useData()
    const params = useLocalSearchParams()

    const [searchQuery, setSearchQuery] = useState("")
    const [loading, setLoading] = useState(false)
    const [debouncedQuery, setDebouncedQuery] = useState("")

    const [searchResults, setSearchResults] = useState([])

    function filterFromProperties() {
        if (debouncedQuery === "") {
            if (!params.filter || params.filter === "All") {
                return properties
            } else {
                return properties.filter((item) => item.propertyType === params.filter)
            }
        } else {
            if (!params.filter || params.filter === "All") {
                return searchResults
            } else {
                return searchResults.filter((item) => item.propertyType === params.filter)
            }
        }
    }

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(searchQuery);
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [searchQuery]);

    useEffect(() => {
        async function fetch() {
            if (debouncedQuery) {
                setLoading(true)
                const data = await searchForProperty(debouncedQuery, params.filter)
                setSearchResults(data)
                setLoading(false)
                Keyboard.dismiss()

            } else {
                setSearchResults([])
                Keyboard.dismiss()
            }
        }

        fetch()
    }, [debouncedQuery]);


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

            {!loading ? <FlatList
                showsVerticalScrollIndicator={false}
                data={filterFromProperties()}
                numColumns={2}
                contentContainerClassName="gap-4 pb-28"
                columnWrapperClassName="gap-4"
                renderItem={({item}) => (
                    <Card item={item} onPress={() => router.push(`properties/${item.$id}`)}/>
                )}
            /> : <ActivityIndicator size="large" className="flex-1"/>}

        </SafeAreaView>
    )
}
