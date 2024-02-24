import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import React from 'react';

type Props = {};

const InputSearch = (props: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="What are you looking for?"
        style={styles.textInput}
      />
      <TouchableOpacity style={styles.btn}>
        <Ionicons name='search' size={20} color={'white'}/>
    </TouchableOpacity> 
    </View>
  );
};

export default InputSearch;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
    gap: 10,
    height: 50,
  },
  btn: {
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    borderRadius: 10,
  },
  textInput: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 10,
    fontSize: 15,
    flex: 1,
  },
});
