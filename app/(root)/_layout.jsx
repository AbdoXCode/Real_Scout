import React from 'react'
import {Redirect, Stack} from "expo-router";
import {ActivityIndicator} from "react-native";
import useUser from "../../hooks/useUser";

export default function AppLayout() {
    const {user,loading} = useUser()

    if (loading) {
        return (
            <ActivityIndicator size="large" className="flex-1"/>
        )
    }

    if(!user){
        return <Redirect href="/sign_in"/>
    }

    return <Stack screenOptions={{headerShown: false}}/>
}
