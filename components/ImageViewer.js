import { StyleSheet, Image, Text } from 'react-native';
export default function ImageViewer({ placeholderImageSource }) {
  return (    
    <Image source={placeholderImageSource} style={styles.image} />    
  );
}
const styles = StyleSheet.create({  
  image: {
    width: 200,
    height: 200,
    borderRadius: 1,
    // container: {
      // paddingtop: 50,
  },
  
 
});
