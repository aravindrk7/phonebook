import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity,Dimensions } from 'react-native'
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';

const makeCall = (number) => {
    RNImmediatePhoneCall.immediatePhoneCall(number);
}

const getRandomColors = (name) => {
    let colors = ['#FA9189', '#84C0F5', '#77DD77'];
    if (name.length > 0 && name.length <= 5) return colors[0];
    if (name.length > 5 && name.length <= 8) return colors[1];
    else return colors[2];
    // return colors[Math.floor(Math.random() * colors.length)];
}

const getInitials = (name) => {
    var names = name.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();

    if (names.length === 1) {
        initials += names[names.length - 1].substring(1, 2).toUpperCase();
    }

    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
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
        padding: 20,
        display: 'flex',
        flexDirection: 'row'
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width:Dimensions.get("window").width - 115
    },
    name: {
        fontSize: 20,
        fontFamily: 'ProximaNovaSoft-Semibold',
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
        fontSize: 20,
        fontFamily: 'ProximaNovaSoft-Semibold'
    }
})