
import React,{useState} from 'react'
import { View } from 'react-native';
// import { useNavigation } from '@react-navigation/native'
import { WebView } from 'react-native-webview';
import ProgressBar from 'react-native-progress/Bar';


export default function SignUp() {

  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(true);
  // const navigation = useNavigation();


  return (
    <View style={{ flex: 1 }}>
    {
      !isLoaded ? 
         null :
        <ProgressBar progress={progress} width={null}/>}
      <WebView source={{ uri: 'https://www.amazon.in' }}
      onLoadProgress={(evt) => setProgress(evt.nativeEvent.progress) }
      onLoadEnd={() => setIsLoaded(false)}
      />
    </View>
  )
}

