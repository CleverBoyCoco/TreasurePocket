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

export default class FileManger extends Component {

    state = {
        avatarSource1: null,
        avatarSource2: null,
        avatarSource3: null
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
                    <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
                        { this.state.avatarSource1 === null ? <Text>Select a Photo</Text> :
                            <Image style={styles.avatar} source={this.state.avatarSource1} />
                        }
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this, 2)}>
                    <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
                        { this.state.avatarSource2 === null ? <Text>Select a Photo</Text> :
                            <Image style={styles.avatar} source={this.state.avatarSource2} />
                        }
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this, 3)}>
                    <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
                        { this.state.avatarSource3 === null ? <Text>Select a Photo</Text> :
                            <Image style={styles.avatar} source={this.state.avatarSource3} />
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
    avatar: {
        //borderRadius: 75,
        width: 150,
        height: 150
    }
});
