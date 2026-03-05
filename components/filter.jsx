import {View, Text, TouchableOpacity, FlatList} from 'react-native'
import React, {useState} from 'react'
import {router, useLocalSearchParams} from "expo-router";
import {categories} from "../constants/data";

export default function Filter() {
    const params = useLocalSearchParams()
    const [selectedCategory,setSelectedCategory] = useState(params.filter || "All")

    function handleSelectedCategory(category){
        if(selectedCategory === category){
            setSelectedCategory("")
            router.setParams({filter:""})
            return
        }
        setSelectedCategory(category)
        router.setParams({filter:category})
    }

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            className="my-4"
            contentContainerClassName="gap-3"
            renderItem={({item}) => (
                <TouchableOpacity
                    onPress={() => handleSelectedCategory(item.category)}
                    className={`py-2 px-5 rounded-3xl ${selectedCategory === item.category ? "bg-primary-300" :"bg-primary-300/10"}`}>
                    <Text className={`text-sm ${selectedCategory === item.category ? "text-white font-rubik-semibold" :"text-black-300 font-rubik"}`}>{item.title}</Text>
                </TouchableOpacity>
            )}
        />
    )
}
