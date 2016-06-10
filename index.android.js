
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
    Image,
    TouchableHighlight,
    Dimensions,
  View
} from 'react-native';
import TabBar from './js/component/tabBar/TabBar';
import FileManger from './js/component/FileManger/FileManger';

class treasurePocket extends Component {
  render() {

    return (
      <View style={styles.container}>
          <TabBar style={styles.content}>
              <TabBar.Item
                  icon={require('./js/image/start_normal.png')}
                  selectedIcon={require('./js/image/start_hightlight.png')}
                  onPress={() => {
                        console.log("first onPress");
                    }}
                  title='首页'>
                  <View style={styles.text}>
                      <FileManger></FileManger>
                  </View>
              </TabBar.Item>

              <TabBar.Item
                  icon={require('./js/image/start_normal.png')}
                  selectedIcon={require('./js/image/start_hightlight.png')}
                  title='百'>
                  <View style={styles.text}>
                      <Text style={{fontSize: 18}}>Location</Text>
                  </View>
              </TabBar.Item>

              <TabBar.Item
                  icon={require('./js/image/start_normal.png')}
                  selectedIcon={require('./js/image/start_hightlight.png')}
                  title='宝'>
                  <View style={styles.text}>
                      <Text style={{fontSize: 18}}>Find</Text>
                  </View>
              </TabBar.Item>

              <TabBar.Item
                  icon={require('./js/image/start_normal.png')}
                  selectedIcon={require('./js/image/start_hightlight.png')}
                  title='袋'>
                  <View style={styles.text}>
                      <Text style={{fontSize: 18}}>Me</Text>
                  </View>
              </TabBar.Item>
          </TabBar>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

});

AppRegistry.registerComponent('treasurePocket', () => treasurePocket);
