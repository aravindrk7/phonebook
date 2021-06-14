import React from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';

const Search = ({ list, setFilteredList }) => {
    const onChangeText = (text) => {
        // let tempList = list.filter(item => {
        //     return item.data.filter(contact => {
        //         if (contact.displayName)
        //             return contact.displayName.toLowerCase().startsWith(text.toLowerCase())
        //     })
        // });

        let tempList = list.reduce((result, sectionData) => {
            const { title, data } = sectionData;
            const filteredData = data.filter(
                element => element.displayName.toLowerCase().includes(text.toLowerCase()
                ));

            if (filteredData.length !== 0) {
                result.push({
                    title,
                    data: filteredData
                });
            }

            return result;
        }, [])

        setFilteredList(tempList);
    }
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Search a contact"
                placeholderTextColor={'#fff'}
                style={styles.searchInput}
                onChangeText={text => onChangeText(text)}
                defaultValue=''
            />
            <Image style={styles.icon}
                source={require('../assets/images/search.png')}
            />
        </View>
    )
}

export default Search;

const styles = StyleSheet.create({
    container: {
    },
    searchInput: {
        fontSize: 20,
        fontFamily: 'ProximaNovaSoft-Semibold',
        color: '#fff',
        padding: 10,
        paddingLeft: 30,
        marginHorizontal: 20,
        backgroundColor: 'rgba(0,0,0,.5)',
        borderRadius: 50,
        // shadowColor: '#999',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
        // elevation: 5
    },
    icon: {
        width: 20,
        height: 20,
        position: 'absolute',
        right: 40,
        top: 15
    }
})
