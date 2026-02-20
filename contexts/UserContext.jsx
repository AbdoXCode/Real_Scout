import {createContext, useEffect, useState} from 'react'
import * as Linking from "expo-linking"
import {account} from "../lib/appwrite";
import {OAuthProvider} from "react-native-appwrite";
import {openAuthSessionAsync} from "expo-web-browser";

export const UserContext = createContext()

export function UserProvider({children}) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    async function login() {
        try {
            const redirectUrl = Linking.createURL("/sign_in")

            const response = await account.createOAuth2Token(
                OAuthProvider.Google,
                redirectUrl
            )

            const browserResult = await openAuthSessionAsync(
                response.toString(),
                redirectUrl
            )

            const url = new URL(browserResult.url)

            const secret = url.searchParams.get("secret")?.toString()
            const userId = url.searchParams.get("userId")?.toString()

            await account.createSession(userId, secret)

            await getUser()

        } catch (e) {
            throw Error("Login Aborted")
        }
    }

    async function logout() {
        try {
            await account.deleteSession("current")
            setUser(null)
        } catch (e) {
            console.error(e)
        }
    }

    async function getUser() {
        try {
            const response = await account.get()

            if (response.$id) {
                const userAvatar = `https://cloud.appwrite.io/v1/avatars/initials?name=${response.name}&project=6997224300143854529b`

                setUser({...response, avatar: userAvatar})
            }
        } catch (e) {
            setUser(null)
        } finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        getUser()
    }, []);

    return (
        <UserContext.Provider value={{user, loading, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}
