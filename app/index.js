// Import necessary modules and components from React and React Native
import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES, icons, images } from "../constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

// Define the Home component
const  Home = () => {
    const router = useRouter();// Initialize the router for navigation


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                ),
                headerTitle: ""
            }}
            />
            
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Welcome/>
                    <Popularjobs />
                    <Nearbyjobs />

                </View>
        </SafeAreaView>
    )
}

export default Home;// Export the Home component as default
