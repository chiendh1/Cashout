import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CardCodeComponent from '../../components/CardCodeComponent';
import Button from 'react-native-button';
import { PrimaryColor } from '../../values/Colors';


class InviteFriendScreen extends Component {

    render() {

        const { container, buttonStyle } = styles;

        return (
            <View style={container}>
                <CardCodeComponent />

                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Button
                        style={{ color: 'black', fontSize: 14 }}
                        containerStyle={[buttonStyle, { marginRight: 10 }]}
                    >Invite Friends</Button>
                    <Button
                        style={{ color: 'black', fontSize: 14 }}
                        containerStyle={buttonStyle}
                    >Share</Button>
                </View>

                <View style={{width: '100%', backgroundColor: 'white',  padding: 15, borderRadius: 5, marginTop: 15}}>
                    <Text style={{alignSelf: 'center'}}>The Rewards</Text>
                    <Text style={{ fontSize: 11, color: '#808080', marginTop: 10 }}>Your friend will earn 50 coins immediately after they enter your referral code.</Text>
                    <Text style={{ fontSize: 11, color: '#808080', marginTop: 5 }} >You will earn 100 coins plus 5 of all your friends future earnings, once your friend collects 200 coins.</Text>
            </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    buttonStyle: {
        backgroundColor: PrimaryColor,
        borderRadius: 5,
        height: 35,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }

});

export default InviteFriendScreen;
