import React, { useEffect, useState, useMemo } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Item from './Item';
import Search from './../../shared/Search';

const Contacts = ({ list }) => {
    // const memoizedValue = useMemo(() => renderItem, [list]);
    const [filteredList, setFilteredList] = useState(list);
    useEffect(() => {
        setFilteredList(list);
    }, [list])

    const renderItem = ({ item }) => (
        <Item item={item} />
    );

    return (
        < View style={styles.container}>
            <TouchableOpacity style={styles.search}>
                <Search list={list} setFilteredList={setFilteredList} />
            </TouchableOpacity>
            {filteredList &&
                <FlatList
                    data={filteredList}
                    renderItem={renderItem}
                    keyExtractor={item => item.rawContactId}
                />
            }
            {/* {filteredList?.map(item => (
                <Item item={item} />
            ))} */}
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("window").height - 98,
    },
    search: {
        marginVertical: 20
    }
});

export default Contacts;
