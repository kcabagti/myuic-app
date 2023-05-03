import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8',
      marginTop: 8,
      backgroundColor: '#F2F2F2',
    },
    header: {
      height: 60,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    nav: {
      flexDirection: 'row',
      height: 50,
      backgroundColor: '#ccc',
    },
    navItem: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    navItemText: {
      fontSize: 18,
    },
    activeNavItem: {
      backgroundColor: '#fff',
    },
    content: {
      flex: 1,
      padding: 20,
    },
    tabContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  