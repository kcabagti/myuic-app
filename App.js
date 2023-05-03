import * as React from 'react'
// import { View, Text, TextInput, Image, ImageBackground, TouchableOpacity} from 'react-native';
// import Button from './components/ButtonStyles';
// import ImageViewer from './components/ImageViewer';
// import styles from './styles.style';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator }  from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';


const PlaceholderImage = require('./assets/images/background-image.png');
const image = {uri: 'https://www.uic.edu.ph/wp-content/uploads/2014/11/NIY_0345.jpg'};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={ LoginScreen } options={{ title: 'Login' }} />
        <Stack.Screen name='Dashboard' component={ DashboardScreen } options={{ title: 'Dashboard' }} />
        
      </Stack.Navigator> 
    </NavigationContainer>
  );
};

export default App;

// export default function Application() {
//   return (
//     <View style={styles.container}>
//       <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      
//         <View style={styles.imageContainer}>
//         <View style={styles.overlay} />
        
//             <ImageViewer placeholderImageSource={PlaceholderImage} />
//             <Image source={require('./assets/images/myuicportal.png')} />
//             <Text>
            
//               <View style={{margin:10, flexDirection: 'row', flex:6, paddingTop: 40}}>
        
//                 <TextInput 
//                   placeholder="USERNAME"
//                   underlineColorAndroid = "#616161"
//                   onChangeText={newText => setText(newText)}
//                   style={styles.input_container}
//                 />
//                 <TextInput
//                   placeholder="PASSWORD"
//                   underlineColorAndroid = "#616161"
//                   onChangeText={newText => setText(newText)}
//                   style={styles.input_container}
                  
                  
//                 />
//               </View>
//             </Text>
    
    
        
//           {/* <Text style={styles.forgot_button}>Forgot Password?</Text>  */}
//           <Button theme="primary" label="LOGIN" />
//         <Button theme="primary" label="Sign In" />


//         {/* <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} /> */}
//         <Text style={{color: '#039BE5', fontSize: 14, paddingTop: 20}}
//           onPress={() => Linking.openURL('https://my.uic.edu.ph/index.cfm?fa=login.reset_password_request')}> Forgot Password?
//         </Text>
//         <Text style={{color: '#039BE5', fontSize: 14}}
//           onPress={() => Linking.openURL('https://my.uic.edu.ph/index.cfm?fa=login.reset_password_request')}> Open a Support Ticket
//         </Text> 
        
//       </View>
//       </ImageBackground>
//     </View>
//   );
// }