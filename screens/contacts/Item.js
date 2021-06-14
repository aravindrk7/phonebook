import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';

const makeCall = (number) => {
    RNImmediatePhoneCall.immediatePhoneCall(number);
}

const getRandomColors = (name) => {
    if (name) {
        let colors = ['#FA9189', '#84C0F5', '#77DD77'];
        if (name.length > 0 && name.length <= 5) return colors[0];
        if (name.length > 5 && name.length <= 8) return colors[1];
        else return colors[2];
    }
    // return colors[Math.floor(Math.random() * colors.length)];
}

const getInitials = (name) => {
    if (name) {
        var names = name.split(' '),
            initials = names[0].substring(0, 1).toUpperCase();

        if (names.length === 1) {
            initials += names[names.length - 1].substring(1, 2).toUpperCase();
        }

        if (names.length > 1) {
            initials += names[names.length - 1].substring(0, 1).toUpperCase();
        }
        return initials;
    }
};

const Item = ({ item }) => {

    return (
        <View style={styles.item}>
            {/* <Image style={styles.thumbnail}
                source={require('../../assets/images/photo.jpg')}
            /> */}
            <TouchableOpacity style={[styles.avatar, { backgroundColor: getRandomColors(item.displayName) }]}>
                <Text style={styles.avatarText}>{getInitials(item.displayName)}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.info}
                onPress={() => makeCall(item.phoneNumbers[0].number)}>
                <Text style={styles.name}>{item.displayName}</Text>
                {item.company != '' && <Text style={styles.title}>{item.company}</Text>}
            </TouchableOpacity >
        </View>
    )
}

export default Item;

const styles = StyleSheet.create({
    item: {
        // width:Dimensions.get("window").width - 42,
        padding: 15,
        // marginTop: 5,
        // marginBottom: 5,
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: '#fff',
        // borderRadius: 5,

        // shadowColor: '#999',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.8,
        // shadowRadius: 2,  
        // elevation: 5
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexGrow: 1,
    },
    name: {
        fontSize: 19,
        fontFamily: 'ProximaNovaSoft-Semibold',
        marginBottom: 5
    },
    title: {
        fontSize: 14,
        fontFamily: 'ProximaNovaSoft-Regular',
        color: '#666'
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: '#ccc'
    },
    avatarText: {
        fontSize: 18,
        fontFamily: 'ProximaNovaSoft-Semibold'
    }
})