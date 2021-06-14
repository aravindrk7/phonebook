import React from 'react'
import { StyleSheet, Text, View, Dimensions, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'

const Tabs = ({ activeTab, setActiveTab }) => {
    const listTab = [
        {
            id: 1,
            title: 'recents'
        },
        {
            id: 2,
            title: 'contacts'
        }
    ]
    const goToScreen = tab => {
        setActiveTab(tab)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.tabList}>
                {
                    listTab.map(tab => (
                        <TouchableOpacity
                            style={styles.tab}
                            onPress={() => goToScreen(tab.title)}
                            key={tab.id}>
                            <Text style={[styles.text, activeTab === tab.title && styles.textTabActive]}>{tab.title}</Text>
                            {tab.id !== listTab.length && <Text style={styles.seperator}>{'|'}</Text>}
                        </TouchableOpacity>
                    ))
                }
            </View>
        </SafeAreaView>
    )
}

export default Tabs;

const styles = StyleSheet.create({
    container: {
    },
    tabList: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    tab: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 25,
        padding: 20,
        textAlign: 'center',
        textTransform: 'capitalize',
        letterSpacing: 2,
        color: '#fff',
        fontFamily: 'ProximaNovaSoft-Semibold',
    },
    textTabActive: {
        color: '#fff'
    },
    seperator: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',

    }
})
