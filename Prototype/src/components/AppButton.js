import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

function AppButton({
    title,
    onPress,
    style = styles.button,
    textstyle = styles.text,
}) {
    return (
        <TouchableOpacity style={style} onPress={onPress}>
            <Text style={textstyle}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 10,
        fontSize: 18,
        textTransform: "uppercase",
    },
    button: {
        alignSelf: "center"
    }
});

export default AppButton;
