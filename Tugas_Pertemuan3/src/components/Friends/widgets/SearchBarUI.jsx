import React from 'react';
import { TextInput } from 'react-native';
import { StyleSheet, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const SearchBarUI = () => {
    return (
        <View style={styles.search_bar}>
            <View style={{ justifyContent: 'center' }}>
                <FontAwesome5 name={'search'} size={18} color={'grey'} />
            </View>
            <TextInput style={styles.search_input} placeholder='Search'></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    search_bar: {
        padding: 9,
        flexDirection: "row",
        backgroundColor: "red",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 20,

    },

    search_input: {
        backgroundColor : 'grey',
        fontSize: 20,
        width: "90%",
        marginLeft: 10,
        color: "white"
    },
});

export default SearchBarUI;
