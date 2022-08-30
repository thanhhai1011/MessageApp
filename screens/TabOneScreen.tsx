import * as React from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';
import ChatRooms from '../assets/dummy-data/ChatRooms';
import ChatRoomItem from '../components/ChatRoomItem';


export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={ChatRooms}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1
  }
});
