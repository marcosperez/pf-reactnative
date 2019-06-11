import React, { Component } from "react";
import { NavigationScreenProps } from "react-navigation";
import {Text, View } from "native-base";
import Layout from "../../components/Layout";

interface PropertiesScreenProps  {
}

export default class PropertiesScreen extends Component<PropertiesScreenProps & NavigationScreenProps<any>> {


    // static navigationOptions = {
    //     title: 'ddasdsadsadsadsaadsaas',
    // };
    static navigationOptions = {
      drawerLabel: 'Propiedades',
    };

    render() { 
        // const {navigate} = this.props.navigation;
        return (
          <Layout>
            <View><Text>Properties screen </Text></View>
          </Layout>
        );
    }

    componentDidMount(){
      // this.props.navigation.openDrawer();
    }
}
