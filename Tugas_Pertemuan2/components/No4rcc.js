import React, { Component } from 'react';
import { View, StyleSheet, Text, } from 'react-native';

class No4rcc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MyBio: {
                identity: {
                    npm: 222310001,
                    fistName: "Muhammad",
                    lastName: "Ripaldi",
                },
                educations: [
                    { id: 1, school: "SDN Layungsari 2 Kota Bogor" },
                    { id: 2, school: "MTS Nur Tauhid Kota Bogor" },
                    { id: 3, school: "SMK Bhakti Insani Kota Bogor" },
                    { id: 4, school: "Institute Bisnis dan Informatika Kesatuan" }
                ],
                mobile_phone: "0895613114144",
                email: "222310001@student.ibik.ac.id",
                gender: 'M'
            }
        }
    }
    render() {
        const { MyBio } = this.state;
        const { educations } = this.state.MyBio;
        const instituteSchool = educations.find(education => education.school === "Institute Bisnis dan Informatika Kesatuan");
        return (
            <View>
                <Text style={{ textAlign: "center", color: "white", fontSize: 20, marginBottom: 30 }}>MyBio RCC</Text>
                <Text style={styles.style}>NPM : {MyBio.identity.npm}</Text>
                <Text style={styles.style}>Fullname : {MyBio.identity.fistName} {MyBio.identity.lastName}</Text>
                <Text style={styles.style}>University :  {instituteSchool ? instituteSchool.school : ''}</Text>
                <Text style={styles.style}>Email : {MyBio.email}</Text>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    style: {
        color: "white",
        textAlign: "justify",
        lineHeight: 30
    }
})

export default No4rcc;

