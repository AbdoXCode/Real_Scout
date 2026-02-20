import {ActivityIndicator, Image, Text, View} from "react-native";
import "../../global.css"
import useUser from "../../../hooks/useUser";

export default function Index() {
    const {user} = useUser()

    if (!user) {
        return <ActivityIndicator style={{flex: 1}} size="large"/>
    }
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Edit app/index.tsx to edit this screen.</Text>
            <Image
                source={{uri: user.avatar}}
                className="size-44"
            />
        </View>
    );
}
