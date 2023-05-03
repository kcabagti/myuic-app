import * as React from 'react'
import { View, Text, TextInput, Image, ImageBackground,Button} from 'react-native';
import ImageViewer from '../components/ImageViewer';
// import Button from '../components/Button';
import styles from '../styles.style';

import UserInterface from './User';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator }  from '@react-navigation/stack';

const Stack = createStackNavigator()


const PlaceholderImage = require('./../assets/images/background-image.png');
const image = {uri: 'https://www.uic.edu.ph/wp-content/uploads/2014/11/NIY_0345.jpg'};

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <View style={styles.imageContainer}>
                    <View style={styles.overlay} />
                    <ImageViewer placeholderImageSource={PlaceholderImage} />
                    <Image source={require('./../assets/images/myuicportal.png')} />
                    <Text>
                        <View style={{margin:10, flexDirection: 'row', flex:6, paddingTop: 40}}>
                        <TextInput 
                            placeholder="USERNAME"
                            underlineColorAndroid = "#616161"
                            onChangeText={newText => setText(newText)}
                            style={styles.input_container}
                        />
                        <TextInput
                            placeholder="PASSWORD"
                            underlineColorAndroid = "#616161"
                            onChangeText={newText => setText(newText)}
                            style={styles.input_container}
                        />
                        </View>
                    </Text>
                    {/* <Text style={styles.forgot_button}>Forgot Password?</Text>  */}
    
                    <Button theme="primary" title="LOGIN" onPress={() => { navigation.navigate('Dashboard', { name: 'John' })}}/>
                    <Button theme="primary" title="Sign In" onPress={() => {navigation.navigate('User')}}/>

                    {/* <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} /> */}
                    <Text style={{color: '#039BE5', fontSize: 14, paddingTop: 20}}
                        onPress={() => Linking.openURL('https://my.uic.edu.ph/index.cfm?fa=login.reset_password_request')}> Forgot Password?
                    </Text>
                    <Text style={{color: '#039BE5', fontSize: 14}}
                        onPress={() => Linking.openURL('https://my.uic.edu.ph/index.cfm?fa=login.reset_password_request')}> Open a Support Ticket
                    </Text> 
                </View>
            </ImageBackground>
        </View>
    )
}

export default LoginScreen;