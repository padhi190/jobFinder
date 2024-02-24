import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputSearch from '../component/InputSearch';

type Props = {};

const Home = (props: Props) => {
  return (
    <SafeAreaView style={{ padding: 20, backgroundColor: 'white', flex: 1 }}>
      <Text style={{ fontSize: 24, marginTop: 20, fontWeight: 'bold' }}>
        Find your perfect job
      </Text>
      
      <InputSearch />
      <Link href={`/job/123`}>Job Detail</Link>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
