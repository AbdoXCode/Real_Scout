import React from 'react'
import {Redirect, Stack} from "expo-router";
import useUser from "../../hooks/useUser";
import {ActivityIndicator} from "react-native";

export default function AuthLayout() {
    const {user,loading} = useUser()

    if (loading) {
        return (
            <ActivityIndicator size="large" className="flex-1"/>
        )
    }

    if(user){
        return <Redirect href="/"/>
    }
    return <Stack screenOptions={{headerShown: false}}/>;
}
