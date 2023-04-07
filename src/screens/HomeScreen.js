import { View, Text, ScrollView, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
// import axios from 'axios';

export default function HomeScreen() {

  const [data, setData] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchApiData = async () => {
    // try {
    //   setIsRefreshing(true)
    //   const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    //   console.log('response', response);
    //   setData(response.data);
    // } catch (error) {
    //   console.log('error', error)
    // } finally {
    //   setIsRefreshing(false)
    // }
  }
  useEffect(() => { fetchApiData() }, [])
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <ScrollView refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={fetchApiData} />
      }>

        {data?.map((item, index) => {
          return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} key={index}>
              <Text>Id :- {item.id}</Text>
              <Text>Title:- {item.title}</Text>
              <Text>Body:- {item.body}</Text>
            </View>
          )
        })}

      </ScrollView>
    </View>
  )
}