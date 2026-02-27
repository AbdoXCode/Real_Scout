import React from 'react'
import {Tabs} from "expo-router";
import icons from "../../../constants/icons";
import {Image} from "react-native";

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: "white",
                minHeight: 70,
                position: "absolute",
                borderTopColor: "#0061FF1A",
                borderTopWidth: 1
            }
        }}>
            <Tabs.Screen name="index" options={{
                title: "Home",
                tabBarIcon: ({focused}) => (
                    <Image source={icons.home} className="size-6" tintColor={focused ? "#0061FF" : "#666876"}/>
                )
            }}/>
            <Tabs.Screen name="explore" options={{
                title: "Explore",
                tabBarIcon: ({focused}) => (
                    <Image source={icons.search} className="size-6" tintColor={focused ? "#0061FF" : "#666876"}/>
                )
            }}/><Tabs.Screen name="profile" options={{
            title: "Profile",
            tabBarIcon: ({focused}) => (
                <Image source={icons.person} className="size-6" tintColor={focused ? "#0061FF" : "#666876"}/>
            )
        }}/>

        </Tabs>
    )
}
