import {ActivityIndicator, FlatList, Image, Text, View} from "react-native";
import "../../global.css"
import useUser from "../../../hooks/useUser";
import {SafeAreaView} from "react-native-safe-area-context";
import icons from "../../../constants/icons";
import SearchCustomBar from "../../../components/SearchCustomBar";
import FeaturedCard from "../../../components/FeaturedCard";
import Card from "../../../components/Card";
import Filter from "../../../components/filter";
import useData from "../../../hooks/useData";
import {useLocalSearchParams, useRouter} from "expo-router";

export default function Index() {
    const {user} = useUser()
    const {properties, featuredProperties} = useData()
    const router = useRouter()

    const params = useLocalSearchParams()

    const filteredProperties = (!params.filter || params.filter === "All") ? properties : properties.filter((item) => item.propertyType === params.filter)

    if (!user || !properties) {
        return <ActivityIndicator style={{flex: 1}} size="large"/>
    }

    function handlePress(item) {
        router.push(`properties/${item.$id}`)
    }

    return (
        <SafeAreaView className="bg-white flex-1">
            <FlatList
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                    <>
                        <View className="flex flex-row gap-2.5 items-center">
                            <Image source={{uri: user.avatar}} className="size-11 rounded-full"/>
                            <View>
                                <Text className="text-xs font-rubik color-black-100">Good Morning</Text>
                                <Text className="font-rubik-medium text-black-300">{user.name}</Text>
                            </View>
                            <Image source={icons.bell} className="size-6 ml-auto"/>
                        </View>

                        <SearchCustomBar onPress={true}/>

                        <View className="flex-row justify-between mt-6 items-center">
                            <Text className="text-xl font-rubik-semibold color-black-300">Featured</Text>
                            <Text className="font-rubik-semibold color-primary-300">See All</Text>
                        </View>

                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            className="mt-5"
                            contentContainerClassName="gap-5"
                            data={featuredProperties}
                            horizontal
                            renderItem={({item}) => (
                                <FeaturedCard item={item} onPress={() => handlePress(item)}/>)}
                        />

                        <View className="flex-row justify-between mt-8 mb-4 items-center">
                            <Text className="text-xl font-rubik-semibold color-black-300">Our Recommendation</Text>
                            <Text className="font-rubik-semibold color-primary-300">See All</Text>
                        </View>

                        <Filter/>

                    </>
                )}
                data={filteredProperties}
                numColumns={2}
                contentContainerClassName="gap-4 p-5 pb-28"
                columnWrapperClassName="gap-4"
                renderItem={({item}) => (
                    <Card item={item} onPress={() => handlePress(item)}/>
                )}
            />


        </SafeAreaView>
    );
}
