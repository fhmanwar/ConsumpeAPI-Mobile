import React, { Component } from "react";
import { Text, View, FlatList, TouchableOpacity, ActivityIndicator, Alert, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import FAB from "react-native-fab";
import { MaterialIcons } from '@expo/vector-icons'
import { globalStyles } from '../config/style'
import Card from "../shared/card";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            // dataSource: [],
            isLoading: true,
            refreshing: false,
        };
    }

    // pressHandler = (id) => {
    //     console.log(id);
    //     setPeople((prevPeople) => {
    //       return prevPeople.filter(person => person.id != id)
    //     })
    //   }


    componentDidMount() {
        // return fetch('http://192.168.0.2/tes/restApiSqlServer/apiList.php')
        // .then(response => response.json())
        // .then(responseJson => {
        //     console.log(responseJson);
        //     this.setState(
        //     {
        //         isLoading: false,
        //         dataSource: responseJson,
        //     },
        //     function() {}
        //     );
        // })
        // .catch(error => {
        //     console.error(error);
        // });
        this.getData();
        this._autoRefresh = this.props.navigation.addListener('focus', () => {
            this.onRefresh();
        })
    }

    componentWillUnmount() {
        this._autoRefresh();
    }

    getData = () => {
        fetch('http://192.168.0.2/tes/restApiSqlServer/apiList.php')
        .then(response => response.json())
        .then(responseJson => {
            // console.log(responseJson);
            this.setState(
            {
                isLoading: false,
                dataSource: responseJson,
                refreshing: false
            },
            function() {}
            );
        })
        .catch(error => {
            console.error(error);
        });
    }

    addData = () => {
        console.log('move add');
        const {navigate} = this.props.navigation;
        // navigate('Add', {refetch: this.getData})
        navigate('Add')
    }

    navigateToDetail(itemId) {
        const {navigate} = this.props.navigation;
        // navigate('Detail', {id: itemId})
        navigate('Detail', itemId)
    }

    onRefresh() {
        this.setState({ refreshing: true }, function() { this.getData() });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            <View style={globalStyles.container}>

                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => this.navigateToDetail(item)}>
                            <Card>
                                <Text style={globalStyles.titleText} >{item.note}</Text>
                                <Text style={globalStyles.paragraph} >{item.desc}</Text>
                            </Card>
                        </TouchableOpacity>
                    )}
                    // keyExtractor={({ id }, index) => id }
                    keyExtractor = { (item, index) => index.toString() }
                    onRefresh = { () => this.onRefresh() }
                    refreshing = { this.state.refreshing }
                />

                <FAB 
                    buttonColor="red" 
                    iconTextColor="#FFFFFF" 
                    onClickAction={() => {
                        this.addData()
                    }} 
                    visible={true} 
                    iconTextComponent={
                        // <Icon name="all-out"/>
                        <MaterialIcons
                            name='add'
                            size={24}
                            style={globalStyles.fabButton}
                        />
                    } 
                />
            </View>
        );
    }
}