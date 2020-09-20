import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

function AddTodo({ input, setInput, submitHandler }) {
    const [text, setText] = useState('');
    const changeHandler = (val) => {
        setText(val);
        setInput(val);
    }

    return (
        <View>
            <TextInput
                value={input}
                clearButtonMode="always"
                style={styles.input}
                placeholder='new todo...'
                onChangeText={changeHandler}
            />
            <TouchableOpacity onPress={() => submitHandler(text)} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Add Todo</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "coral",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 10
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
})

export default AddTodo
