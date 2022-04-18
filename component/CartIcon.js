import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux'



function CartIcon() {
 const navigation = useNavigation()
 const cartItems = useSelector(state => state)
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Cart')}
      style={styles.button}>
      <View style={styles.itemCountContainer}>
        <Text style={styles.itemCountText}>{cartItems.length}</Text>
      </View>
      <Icon name='shopping-cart' size={32} color='#101010' />
    </TouchableOpacity>
  )
}

export default CartIcon

const styles = StyleSheet.create({
  button: {
    marginRight: 8
  },
  itemCountContainer: {
    position: 'absolute',
    height: 25,
    width: 25,
    borderRadius: 15,
    backgroundColor: 'blue',
    right: 27,
    bottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000
  },
  itemCountText: {
    color: 'white',
    fontWeight: 'bold'
  }
})



