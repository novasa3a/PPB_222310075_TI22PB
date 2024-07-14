import React from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, View } from 'react-native';
import FriendlistUI from '../widgets/FriendlistUI';

const ExpScrollView = ({Data}) => {
    return (
        <ScrollView>
            {Data.map((v, index) => (
                <FriendlistUI items={v} key={index}/>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({})

export default ExpScrollView;
