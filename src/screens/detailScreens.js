import React, { useEffect, useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../config/style';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons'

export default function Detail({ navigation, route }) {

    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        const autoRefresh = navigation.addListener('focus', () => {
            setRefreshing(true);
        })
        return () => {
            autoRefresh;
        }
    }, [navigation]);

    const delData = (resData) => {
        // console.log(resData);
        fetch('http://192.168.0.2/tes/restApiSqlServer/apiDelete.php', {
            method: 'Delete',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                noteId: resData.noteId
            })
        })
        .then(response => response.json())
        .then(responseJson => {
            console.log(responseJson);
            if (responseJson.status == 200) {
                navigation.navigate('Home')
            } else {
                Alert.alert('Data Unsuccessfully')
            }
        })
        .catch(error => {
            console.error(error);
        });
    }

    return (
        <View style={globalStyles.container}>
            <Card>
                <View style={globalStyles.onCard}>
                    <View style={globalStyles.textOnCard}>
                        <Text>{ route.params.note }</Text>
                        <Text>{ route.params.desc }</Text>
                    </View>
                    <View style={globalStyles.btnOnCard}>
                        {/* <Button title='Update Contact' onPress={()=> this.navigateToUpdate()}/>
                        <View style={{margin: 10}}/>
                        <Button title='Delete Contact' onPress={()=> this.handleDelete()}/> */}
                        <MaterialIcons
                            name='edit'
                            size={24}
                            onPress={() => {navigation.navigate('Update', route.params)}}
                            style={globalStyles.btnUpdDel}
                        />
                        <MaterialIcons 
                            name='delete-outline'
                            size={24}
                            onPress={() => {
                                delData(route.params)
                            }}
                            style={globalStyles.btnUpdDel}
                        />
                    </View>
                </View>
            </Card>
        </View>
    )
}
