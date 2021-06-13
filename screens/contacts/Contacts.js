import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Item from './Item';

const Contacts = ({list}) => {
    const renderItem = ({ item }) => (
        <Item item={item} />
    );
    return (
        < View style={styles.container}>
            <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={item => item.rawContactId}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
    }
});

export default Contacts;
