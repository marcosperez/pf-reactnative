import React, { Component } from "react";

import { NavigationScreenProps } from "react-navigation";
import {Text, View } from "native-base";
import Layout from "../../components/Layout";

interface BrokersProps  {
}

export default class BrokersScreen extends Component<BrokersProps & NavigationScreenProps<any>> {


    // static navigationOptions = {
    //     title: 'ddasdsadsadsadsaadsaas',
    // };

    static navigationOptions = {
      drawerLabel: 'Inmobiliaria',
    };
    
    render() { 
        // const {navigate} = this.props.navigation;
        return (
          <Layout>
            <View><Text>Broker screen </Text></View>
          </Layout>
        );
    }
}
