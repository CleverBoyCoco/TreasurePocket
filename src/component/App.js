
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
import TabBar from './tabBar/TabBar';
import Person from './person/Person';

export default class App  extends Component {
    render() {

        return (
            <View style={styles.container}>
                <TabBar style={styles.content}>
                    <TabBar.Item
                        icon={require('./../image/start_normal.png')}
                        selectedIcon={require('./../image/start_hightlight.png')}
                        onPress={() => {
                        console.log("first onPress");
                    }}
                        title='Ê×Ò³'>
                        <View style={styles.text}>
                            <Person></Person>
                        </View>
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('./../image/start_normal.png')}
                        selectedIcon={require('./../image/start_hightlight.png')}
                        title='°Ù'>
                        <View>
                            <Image
                                style={styles.icon}
                                source={require('./../image/tmp1.jpg')}
                                />
                        </View>
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('./../image/start_normal.png')}
                        selectedIcon={require('./../image/start_hightlight.png')}
                        title='±¦'>
                        <View>
                            <Image
                                style={styles.icon}
                                source={require('./../image/tmp2.jpg')}
                                />
                        </View>
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('./../image/start_normal.png')}
                        selectedIcon={require('./../image/start_hightlight.png')}
                        title='´ü'>
                        <View>
                            <Image
                                style={styles.icon}
                                source={require('./../image/tmp3.jpg')}
                                />
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

//AppRegistry.registerComponent('treasurePocket', () => treasurePocket);
