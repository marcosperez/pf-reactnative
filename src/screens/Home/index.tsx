import React, { Component } from "react";
import { NavigationScreenProps } from "react-navigation";
import {Text, View } from "native-base";
import Layout from "../../components/Layout";

interface HomeScreenProps  {
}

export default class HomeScreen extends Component<HomeScreenProps & NavigationScreenProps<any>> {


    // static navigationOptions = {
    //     title: 'ddasdsadsadsadsaadsaas',
    // };
    static navigationOptions = {
      drawerLabel: 'Inicio',
    };

    render() { 
        // const {navigate} = this.props.navigation;
        return (
          <Layout>
            <View><Text>Home screen </Text></View>
          </Layout>
        );
    }

    componentDidMount(){
      // this.props.navigation.openDrawer();
    }
}
