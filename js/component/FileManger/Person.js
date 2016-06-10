import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PixelRatio,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';

import ImagePicker from 'react-native-image-picker';

export default class Person extends Component {

    state = {
        avatarSource1: null,
        avatarSource2: null,
        avatarSource3: null,
        avatarSource4: null
    };

    selectPhotoTapped =(type) =>{
        const options = {
            title: '选择照片',
            cancelButtonTitle: 'Cancel',
            //takePhotoButtonTitle: '拍照...',
            chooseFromLibraryButtonTitle: '从相册选择...',
            cameraType: 'front', // 'front' or 'back'
            mediaType: 'photo', // 'photo' or 'video'
            quality: 0.5,// 0 to 1, photos only
            angle: 0, // android only, photos only
            maxWidth: 300,// photos only
            maxHeight: 300,// photos only
            allowsEditing: true,// Built in functionality to resize/reposition the image after selection
            noData: false, // photos only - disables the base64 `data` field from being generated (greatly improves performance on large photos)
            storageOptions: {// if this key is provided, the image will get saved in the documents directory on ios, and the pictures directory on android (rather than a temporary directory)
                skipBackup: true
            },
            allowsEditing: true
        };

        ImagePicker.launchImageLibrary(options, (response)  => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                var source;

                // You can display the image using either:
                source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

                // Or:
                // if (Platform.OS === 'android') {
                //   source = {uri: response.uri, isStatic: true};
                // } else {
                //   source = {uri: response.uri.replace('file://', ''), isStatic: true};
                // }

                switch (type){
                    case 1:{
                        this.setState({
                            avatarSource1: source
                        });
                        break;
                    }
                    case 2:{
                        this.setState({
                            avatarSource2: source
                        });
                        break;
                    }
                    case 3:{
                        this.setState({
                            avatarSource3: source
                        });
                        break;
                    }
                    case 4:{
                        this.setState({
                            avatarSource4: source
                        });
                        break;
                    }
                }

            }
        });

        //ImagePicker.showImagePicker(options, (response) => {
        //    console.log('Response = ', response);
        //
        //    if (response.didCancel) {
        //        console.log('User cancelled photo picker');
        //    }
        //    else if (response.error) {
        //        console.log('ImagePicker Error: ', response.error);
        //    }
        //    else if (response.customButton) {
        //        console.log('User tapped custom button: ', response.customButton);
        //    }
        //    else {
        //        var source;
        //
        //        // You can display the image using either:
        //        source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
        //
        //        // Or:
        //        // if (Platform.OS === 'android') {
        //        //   source = {uri: response.uri, isStatic: true};
        //        // } else {
        //        //   source = {uri: response.uri.replace('file://', ''), isStatic: true};
        //        // }
        //
        //        this.setState({
        //            avatarSource: source
        //        });
        //    }
        //});
    }


    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this, 1)}>
                    <View style={[styles.head, styles.avatarContainer]}>
                        { this.state.avatarSource1 === null ? <Text>选择头像</Text> :
                            <Image style={styles.head} source={this.state.avatarSource1} />
                        }
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this, 2)}>
                    <View style={[styles.body, styles.avatarContainer]}>
                        { this.state.avatarSource2 === null ? <Text>选择上衣</Text> :
                            <Image style={styles.body} source={this.state.avatarSource2} />
                        }
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this, 3)}>
                    <View style={[styles.leg, styles.avatarContainer]}>
                        { this.state.avatarSource3 === null ? <Text>选择裤子</Text> :
                            <Image style={styles.leg} source={this.state.avatarSource3} />
                        }
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this, 4)}>
                    <View style={[styles.foot, styles.avatarContainer]}>
                        { this.state.avatarSource4 === null ? <Text>选择鞋</Text> :
                            <Image style={styles.foot} source={this.state.avatarSource4} />
                        }
                    </View>
                </TouchableOpacity>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center'
    },
    head: {
        borderRadius: 75,
        width: 80,
        height: 80
    },
    body: {
        //borderRadius: 75,
        width: 250,
        height: 150
    },
    leg: {
        //borderRadius: 75,
        width: 150,
        height: 250
    },
    foot: {
        //borderRadius: 75,
        width: 60,
        height: 80
    },
});
