import React, { useEffect, useState, useMemo } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Dimensions, SectionList, Text } from 'react-native';
import Item from './Item';
import Search from './../../shared/Search';

const Contacts = ({ list }) => {
    const [filteredList, setFilteredList] = useState(list);
    useEffect(() => {
        setFilteredList(list);
    }, [list])

    const renderItem = ({ item }) => (
        <Item item={item} />
    );
    const renderSectionHeader = ({ section }) => (
        <Text style={styles.header}>{section.title}</Text>
    );

    return (
        < View style={styles.container}>
            <TouchableOpacity style={styles.search}>
                <Search list={list} setFilteredList={setFilteredList} />
            </TouchableOpacity>
            {/* {filteredList &&
                <FlatList
                    data={filteredList}
                    renderItem={renderItem}
                    keyExtractor={item => item.rawContactId}
                />
            } */}
            <View style={styles.listWrapper}>
                {filteredList.length !== 0 ?
                    <SectionList
                        style={styles.list}
                        sections={filteredList}
                        renderItem={renderItem}
                        renderSectionHeader={renderSectionHeader}
                        keyExtractor={(item, index) => index}
                    />
                    :
                    <View style={styles.noContactsContainer}>
                        <Text style={styles.noContactsText}>No one in your Contact</Text>
                    </View>

                }
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("window").height - 185,
    },
    search: {
        marginVertical: 20
    },
    listWrapper: {
        height: Dimensions.get("window").height - 185,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    header: {
        paddingTop: 20,
        paddingLeft: 25,
        paddingBottom: 5,
        fontSize: 25,
        fontFamily: 'ProximaNovaSoft-Semibold',
        textShadowRadius: 5,
    },
    noContactsContainer: {
        height: Dimensions.get("window").height - 98,
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    noContactsText: {
        fontSize: 20,
        fontFamily: 'ProximaNovaSoft-Semibold',
    }
});

export default Contacts;
