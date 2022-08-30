import * as React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './style';

export default function ChatRoomItem({ chatRoom }) {
  
  const user = chatRoom.users[1];
  
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.imageUri }} resizeMode='contain' style={styles.imgAvatar} />
      {chatRoom.newMessages && <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
      </View>}
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>{chatRoom.lastMessage.content}</Text>
      </View>
    </View>
  )
}

