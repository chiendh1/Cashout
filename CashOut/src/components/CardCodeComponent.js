import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import imgAvatar from '../assets/ic_coin.png';

class CardCodeComponent extends Component {
    render() {

        const { container, codeContaner, imageStyle, textCopyStyle, textDescStyle } = styles;

        return (
            <View style={container}>
                {/* Day la phan avatar */}
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                    <Image source={imgAvatar} style={imageStyle} />
                    <View style={{ marginLeft: 15 }}>
                        <Text style={{ color: 'black' }}>Chien Do</Text>
                        <Text style={{ fontSize: 12 }}>Referred Friends: 0</Text>
                    </View>
                </View>

                {/* Your Referral Code */}
                <Text style={{ fontSize: 15 }}>Your Referral Code</Text>

                {/*Referral Code*/}
                <View
                    style={codeContaner}>

                    <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>VKP39PPG</Text>
                    <Text style={textCopyStyle}>Copy</Text>
                </View>

                {/*text desc*/}
                <Text style={[textDescStyle, { marginTop: 10 }]} >
                    Share your Referral Code with friends to earn your reward.
                </Text>
                <Text style={[textDescStyle, { color: 'red' }]} >
                    Posting codes on app reviews is prohibited and will lead to a ban!
                </Text>
            </View >
        );
    }
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
    },
    nameContainer: {

    },
    imageStyle: {
        width: 60,
        height: 60,
    },

    codeContaner: {
        width: '100%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 0.5,
        marginTop: 10
    },

    textCopyStyle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        marginRight: 5,
        marginBottom: 5
    },

    textDescStyle: {
        fontSize: 10,
        textAlign: 'center'
    }

});

export default CardCodeComponent;
