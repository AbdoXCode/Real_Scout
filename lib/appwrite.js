import {Account, Avatars, Client, Databases} from "react-native-appwrite"

export const client = new Client()

client
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID)
    .setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PACKAGE_NAME)

export const account = new Account(client)
export const avatars = new Avatars(client)
export const databases = new Databases(client)