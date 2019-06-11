/**
 * Sample React Native SideBar
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Left,
  Right,
  Body,
  Icon,
  Text,
  ListItem,
  List
} from "native-base";
import SvgUri from "react-native-svg-uri";
import { withNavigation,  DrawerItemsProps } from "react-navigation";

interface Props {}

class SideBar extends Component<Props &   DrawerItemsProps> {
  drawer: any;
  closeDrawer() {
    this.drawer._root.close();
  }

  openDrawer() {
    this.drawer._root.open();
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <Container style={{ backgroundColor: "white" }}>
        <Header style={{ height: 150 }}>
          <Body>
            <SvgUri
              fill={"#ffffff"}
              width="225"
              height="225"
              svgXmlData={
                '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="180.7" height="46" viewBox="0 0 180.7 46" xml:space="preserve"><style type="text/css">.st0{fill:#fff}.st1,.st2{opacity:.6;fill:#fff}.st2{opacity:.8}</style><path class="st0" d="M73.1 18V6.1c0-.4.5-.6.8-.3l6.4 6.4L86.6 6c.3-.3.9-.1.9.4v11.9c0 .2-.2.4-.4.4h-2.9v-5.9l-3.9 3.9-3.9-3.9v5.9h-2.8c-.3-.1-.5-.4-.5-.7M91.5 18.2V6c0-.3.2-.5.5-.5h9.2v3.2H95v1.8h5.7v2.9H95v2h6.2v3.2h-9.4c-.1 0-.3-.2-.3-.4M105 18.3V5.8c0-.2.1-.3.3-.3h5.6c1.3 0 2.4.4 3.3 1.3.9.9 1.4 1.9 1.4 3.2 0 1.7-.9 3.1-2.2 3.7l3 4.4c.1.2 0 .4-.2.4h-3.6l-2.7-4.1h-1.3v4.1h-3.2c-.3.1-.4-.1-.4-.2m3.5-6.6h2c1 0 1.5-.6 1.5-1.5 0-.8-.5-1.4-1.2-1.4h-2.3v2.9zM131.3 7.9l-2.4 2c-.8-.9-1.8-1.4-3-1.4-1 0-1.8.3-2.5 1s-1 1.5-1 2.5.3 1.9 1 2.5c.7.7 1.5 1 2.5 1 1.2 0 2.2-.5 3-1.4l2.4 2c-1.4 1.6-3.3 2.6-5.4 2.6-2 0-3.7-.6-5.1-1.9-1.4-1.3-2.1-2.9-2.1-4.8s.7-3.5 2.1-4.8c1.4-1.3 3.1-1.9 5.1-1.9 2.1 0 4.1 1 5.4 2.6M133.6 18.3l6.8-13.2c.1-.2.4-.2.5 0l6.7 12.9c.1.3-.1.6-.4.6h-3l-.8-1.7H138l-.8 1.7h-3.3c-.3 0-.4-.2-.3-.3m5.6-4.2h3l-1.5-3-1.5 3zM150.9 18.1V5.9c0-.2.2-.4.4-.4h4.9c2.3 0 4 .6 5.2 1.8 1.2 1.2 1.8 2.8 1.8 4.8s-.6 3.6-1.8 4.8c-1.2 1.2-2.9 1.8-5.2 1.8h-4.9c-.2-.1-.4-.3-.4-.6m3.5-2.7h1.5c1.5 0 2.5-.3 3-1s.6-1.3.6-2.3c0-1-.1-1.6-.6-2.2-.5-.6-1.5-1-3-1h-1.5v6.5zM178.6 16.9c-1.4 1.3-3.1 2-5.1 2-2 0-3.7-.7-5.1-2-1.4-1.3-2.1-2.9-2.1-4.8s.7-3.5 2.1-4.8c1.4-1.3 3.1-2 5.1-2 2 0 3.7.7 5.1 2 1.4 1.3 2.1 2.9 2.1 4.8s-.7 3.5-2.1 4.8m-7.7-2.3c.7.7 1.5 1 2.5 1s1.8-.4 2.5-1.1c.7-.7 1.1-1.6 1.1-2.5 0-1-.4-1.8-1.1-2.5-.7-.7-1.5-1.1-2.5-1.1s-1.8.4-2.5 1.1c-.7.7-1.1 1.5-1.1 2.5.1 1.1.4 1.9 1.1 2.6M73.4 25.9h3.1V33c0 2.2.8 3 2.3 3 1.5 0 2.3-.8 2.3-3v-7.1h3.3c.2 0 .3.1.3.3v7.2c0 1.9-.6 3.3-1.7 4.3s-2.5 1.5-4.2 1.5c-1.7 0-3.1-.5-4.2-1.5s-1.7-2.4-1.7-4.3v-7c0-.3.2-.5.5-.5m4.1-.9l.9-2.7H82L80 25h-2.5zM88.6 38.5V26.3c0-.3.4-.5.7-.3l8 6.5v-6.6h3c.2 0 .4.2.4.4v12.4c0 .3-.4.5-.6.3L92 32.4V39h-2.9c-.3 0-.5-.2-.5-.5M104.8 38.6V25.9h3.3c.2 0 .3.1.3.3V39h-3.1c-.3 0-.5-.2-.5-.4M124.5 28.3l-2.4 2c-.8-.9-1.8-1.4-3-1.4-1 0-1.8.3-2.5 1s-1 1.5-1 2.5.3 1.9 1 2.5c.7.7 1.5 1 2.5 1 1.2 0 2.2-.5 3-1.4l2.4 2c-1.4 1.6-3.3 2.6-5.4 2.6-2 0-3.7-.6-5.1-1.9-1.4-1.3-2.1-2.9-2.1-4.8s.7-3.5 2.1-4.8c1.4-1.3 3.1-1.9 5.1-1.9 2.1.1 4.1 1 5.4 2.6M139.3 37.3c-1.4 1.3-3.1 2-5.1 2-2 0-3.7-.7-5.1-2-1.4-1.3-2.1-2.9-2.1-4.8s.7-3.5 2.1-4.8c1.4-1.3 3.1-2 5.1-2 2 0 3.7.7 5.1 2 1.4 1.3 2.1 2.9 2.1 4.8.1 1.9-.7 3.5-2.1 4.8m-7.6-2.2c.7.7 1.5 1 2.5 1s1.8-.4 2.5-1.1c.7-.7 1.1-1.6 1.1-2.5 0-1-.4-1.8-1.1-2.5-.7-.7-1.5-1.1-2.5-1.1s-1.8.4-2.5 1.1c-.7.7-1.1 1.5-1.1 2.5s.4 1.9 1.1 2.6"/><path class="st1" d="M55.2 5.6L27.6 22.1 0 5.6V1.4C0 .5 1 0 1.7.4l25.9 15.5L54 .1c.5-.3 1.2.1 1.2.7v4.8z"/><path class="st2" d="M55.2 21.3L27.6 37.8 0 21.3v-6.2l27.6 16.5 27.6-16.5z"/><path class="st0" d="M15.2 39.7L0 30.6v5c0 .7.4 1.4 1 1.8L15.2 46v-6.3zM40 39.7V46l14.6-8.7c.4-.2.6-.6.6-1.1v-5.5l-15.2 9z"/></svg>'
              }
            />
          </Body>
        </Header>
        <Content>
          <List>
            <ListItem   onPress={() => navigate('Home')}>
              <Left>
                <Text>Inicio</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem onPress={() => navigate('Properties')}>
              <Left>
                <Text>Propiedades</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem onPress={() => navigate('Brokers')}>
              <Left>
                <Text>Inmobiliarias</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Contacto</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Preguntas Frecuentes</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default SideBar