import { useFonts } from 'expo-font';
import { View, Text, Platform, StatusBar , StyleSheet, ImageBackground, 
    Dimensions} from 'react-native'
import React from 'react'
import Timeline from 'react-native-timeline-flatlist'
import { useSelector } from 'react-redux';



  
    const Home = () => {
      const keyData= useSelector((state)=> state.mile)
      
    const [fontsLoaded] = useFonts({
        'Palanquin': require('../../assets/fonts/Palanquin-Medium.ttf'),
      });

      if (!fontsLoaded ) {
        return null;
      }

   
      
const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 
const RH = (percentage) => {
   return  (percentage / 100) * screenHeight; 
    };
   
const lh=RH(25)  
  return (
    <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
        <ImageBackground source={{uri: 'https://images.pexels.com/photos/459976/pexels-photo-459976.jpeg'}} 
        resizeMode="cover" style={{ 
            height: screenHeight, 
            width: screenWidth, 
           
            
            opacity: 0.9,
            
        }}>
       
        <Text className='text-fuchsia-950 text-center' style={{ fontFamily: 'Palanquin', fontSize: 30 }}>Milestones To Remember!!</Text>
              {
                    keyData.length=== 0 ?
                    <View  style={{paddingTop: lh}}>
                        <Text className='text-fuchsia-950 text-center '
                         style={{ fontFamily: 'Palanquin', fontSize: 25 }}> Welcome To 
                       </Text>
                        <Text className='text-fuchsia-950 text-center '
                        style={{ fontFamily: 'Palanquin', fontSize: 30 }}> Baby Milestone Tracker </Text>
                        <Text className='text-fuchsia-950 text-center '
                        style={{ fontFamily: 'Palanquin', fontSize: 25 }}>  click on Add to create your Milestones </Text>
                    </View> :

                    
                      <View style={styles.container} >
                      <Timeline 
                          style={styles.list}
                          data={keyData}
                          separator={true}
                          circleSize={20}
                          circleColor='rgb(45,156,219)'
                          lineColor='rgb(45,156,219)'
                          timeContainerStyle={{minWidth:100, marginTop: -5}}
                          timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'black', padding:5, borderRadius:13, overflow: 'hidden', fontSize:16}}
                          descriptionStyle={{ fontSize:18, color:'rgb(52,18,74)'}}
                          titleStyle={{fontSize:20, color:'rgb(52,18,74)'}}
                        
                          options={{
                            style:{paddingTop:5}
                          }}
                      />
               </View>

              }
         
        

       </ ImageBackground>
        
     
    </View>
  )
}

export default Home

const styles= StyleSheet.create({ 
    container: {
        flex: 1,
        padding: 20,
            paddingTop:25,
       
      },
      list: {
        flex: 1,
        marginTop:20,
        fontFamily: 'Palanquin',
      },
})