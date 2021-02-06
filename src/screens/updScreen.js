import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { globalStyles } from '../config/style';
import { Formik } from 'formik';
import * as yup from 'yup'

const addSchema = yup.object({
    note: yup.string()
            .required()
            .min(4),
    desc: yup.string()
            .required()
            .min(8)
});

export default function Update({ navigation, route }) {

    const updData = (resData) => {
        // console.log({
        //     noteId: route.params.noteId,
        //     title: resData.note,
        //     desc: resData.desc
        // });
        fetch('http://192.168.0.2/tes/restApiSqlServer/apiUpdate.php', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                noteId: route.params.noteId,
                title: resData.note,
                desc: resData.desc
            })
        })
        .then(response => response.json())
        .then(responseJson => {
            console.log(responseJson);
            if (responseJson.status == 200) {
                navigation.navigate('Detail', {noteId: route.params.noteId, note: resData.note, desc: resData.desc});
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
            <Formik 
                initialValues={{ note: route.params.note, desc: route.params.desc }} 
                validationSchema={addSchema}
                onSubmit={(values, actions) => {
                    // console.log(values);
                    actions.resetForm();
                    updData(values);
                }}
            >
                {(props) => (
                    <View>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Note Title'
                            onChangeText={props.handleChange('note')}
                            value={props.values.note}
                            onBlur={props.handleBlur('note')}
                        />
                        <Text style={globalStyles.errorText}>{ props.touched.note && props.errors.note }</Text>
                        
                        <TextInput 
                            multiline 
                            minHeight={60}
                            style={globalStyles.input}
                            placeholder='Note Describe'
                            onChangeText={props.handleChange('desc')}
                            value={props.values.desc}
                            onBlur={props.handleBlur('desc')}
                        />
                        <Text style={globalStyles.errorText}>{ props.touched.desc && props.errors.desc }</Text>
                        
                        <TouchableOpacity onPress={props.handleSubmit}>
                            <View style={globalStyles.button}>
                                <Text style={globalStyles.buttonText}>Submit</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
    )
}
