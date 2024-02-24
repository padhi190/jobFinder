import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

type Props = {}

const JobDetail = (props: Props) => {
    const { id } = useLocalSearchParams();
  return (
    <View>
          <Text>JobDetail - {id} </Text>
    </View>
  )
}

export default JobDetail