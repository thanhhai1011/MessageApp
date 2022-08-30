import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 10,
    },
    imgAvatar: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginRight: 15
    },
    badgeContainer: {
      backgroundColor: '#3872E9',
      width: 22,
      height: 22,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      left: 55,
      top: 10,
      borderWidth: 1,
      borderColor: 'white'
    },
    badgeText: {
      color: 'white'
    },
    rightContainer: {
      flex: 1,
      justifyContent: 'center'
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    name: {
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 3
    },
    text: {
      color: 'grey',
      fontSize: 18
    },
  });

export default styles;