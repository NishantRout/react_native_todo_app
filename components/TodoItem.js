import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function TodoItem({ item, pressHandler }) {
    return (

        <View style={styles.item}>
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
                <View style={styles.icon}>
                    <MaterialIcons
                        name='delete'
                        size={18}
                        color='#333'
                    />
                </View>
            </TouchableOpacity>
            <Text>{item.text}</Text>
        </View >

    )
}
const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
        marginLeft: 20,
    },
    icon: {
        marginRight: 15,
    }
})

export default TodoItem;