import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import JobListScreen from "../screens/JobListScreen";
import JobScreen from "../screens/JobScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const JobListNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerTitleAlign: "center",
            headerShown: true,
            headerTintColor: "dodgerblue",
        }}
    >
        <Stack.Screen name={routes.JOB_LIST} component={JobListScreen} />
        <Stack.Screen name={routes.JOB} component={JobScreen} />
    </Stack.Navigator>
);

export default JobListNavigator;
