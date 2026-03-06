import React, {createContext, useEffect, useState} from 'react'
import {databases} from "../lib/appwrite";
import {Query} from "react-native-appwrite";

export const DataContext = createContext()

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID

export default function DataProvider({children}) {
    const [properties, setProperties] = useState([])
    const [featuredProperties, setFeaturedProperties] = useState([])

    async function fetchProperties() {
        try {
            const response = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID,
            )

            setProperties(response.documents)
        } catch (e) {
            console.log(e)
        }
    }

    async function fetchFeaturedProperties() {
        try {
            const response = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID,
                [Query.limit(5)]
            )

            setFeaturedProperties(response.documents)
        } catch (e) {
            console.log(e)
        }
    }

    async function fetchPropertyById(id) {
        try {
            const response = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID,
                [Query.equal("$id", id)]
            )

            return response.documents[0]
        } catch (e) {
            console.log(e)
        }
    }

    async function searchForProperty(value) {
        if (!value) return [];

        try {
            const nameResponse = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID,
                [
                    Query.search("propertyName", value)
                ]
            )

            const locationResponse = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID,
                [
                    Query.search("location", value)
                ]
            )
            return [...nameResponse.documents, ...locationResponse.documents]
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchProperties()
        fetchFeaturedProperties()
    }, []);

    return (
        <DataContext.Provider value={{properties, featuredProperties, fetchPropertyById, searchForProperty}}>
            {children}
        </DataContext.Provider>
    )
}
