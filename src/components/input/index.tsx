import React from 'react'
import { View, TextInput, Image, StyleSheet } from 'react-native';

function Input({ image, onChangeText,onPressIn, value }:any, props: any) {
    return (
        <View>
            <TextInput {...props} value={value} onPressIn={onPressIn} style={styles.textInput} onChangeText={onChangeText} />
            <Image source={image} resizeMode='contain' style={styles.image} />
        </View>
    )
}
const styles = StyleSheet.create({
    textInput: {
        color: '#000',
        borderWidth: 1,
        borderRadius: 10,
        paddingStart: 40,
        marginHorizontal: 20,
        backgroundColor: '#fff',
        borderColor: "#f0f0f0",
    },
    image: {
        position: "absolute",
        left: 30,
        marginTop: 13
    },
})
export default Input;