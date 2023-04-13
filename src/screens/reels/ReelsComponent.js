import React, { useState } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import SwiperFlatList from 'react-native-swiper-flatlist'
import { VideoData } from '../../../assets/data/VideoData'
import SingleReel from './SingleReel'

const ReelsComponent = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const handleChangeIndex = ({ index }) => {
        setCurrentIndex(index);
    }

    return (
        <SwiperFlatList 
        vertical={true}
        data={VideoData.sources}
        onChangeIndex={handleChangeIndex}
        renderItem={({item, index}) => (
            <SingleReel 
            item={item} 
            index={index} 
            currentIndex={currentIndex}
            />
            )
        }
        keyExtractor={(item, index) => index}
        />
        // <View>
        //     <Text>Hi</Text>
        // </View>
    )
}

export default ReelsComponent