import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

const Search = ({ list, setFilteredList }) => {
    const onChangeText = (text) => {
        let tempList = list.filter(item => {
            if (item.displayName)
                return item.displayName.toLowerCase().startsWith(text.toLowerCase())
        });
        setFilteredList(tempList);
    }
    return (
        <View>
            <TextInput
                placeholder="Search a contact"
                style={styles.searchInput}
                onChangeText={text => onChangeText(text)}
                defaultValue=''
            />
        </View>
    )
}

export default Search;

const styles = StyleSheet.create({
    searchInput: {
        fontSize: 18,
        fontFamily: 'ProximaNovaSoft-Regular',
        color: '#666',
        padding: 15,
        paddingLeft: 20,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    }
})
