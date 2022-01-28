import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, SafeAreaView, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { Icons } from './assets/Themes';
import * as React from 'react'; 
import themes from './assets/Themes/themes';


export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  return (
    <View style={styles.container}>
      {/* Navigation bar */}
      <SafeAreaView style={styles.navbar}>
        <Image source={require("./assets/Icons/menu_light.png")} style={styles.navBarIcons}/>
        <Text style={styles.logo}>ensom</Text>
        <Image source={require("./assets/Icons/sun.png")} style={styles.navBarIcons}/>
      </SafeAreaView>

    <View style={{width: '80%', height: '70%', display: 'flex', alignSelf: 'center', justifyContent: 'flex-start', marginTop: '-18%'}}>
      {/* Profile picture*/}
      <View style={{aspectRatio: 1/1.1, width: '100%'}}>
        <View style={styles.profile}>
            <ImageBackground source={require("./assets/Profiles/mtl.jpg")} style={styles.profile} imageStyle={{ borderRadius: 8}}>
              <Text style={styles.profileNameText}>MTL</Text>
              <Text style={styles.profileDistanceText}>2 Miles away</Text>
            </ImageBackground>
        </View>
      </View>
        
        
      {/* Recording*/}  
      <View style={styles.recording}> 
        <Text style={styles.recordingText}>My hottest take</Text>
          <View style={{flexDirection:'row', alignItems:'center', marginTop: -24, marginBottom: -24}}>
            <Image source={require("./assets/Icons/player_light.png")} style={styles.recordingImage}/>
            <Image source={require("./assets/Icons/audio_waveform_light.png")} style={styles.recordingWave}/>
          </View>
        </View>
    </View>
     

      {/* Bottom bar */}
    <View style={{width: '100%', height: '8%', display: 'flex', flexDirection:'row', backgroundColor: Themes.light.navigation, alignItems: 'center', marginTop: 40, justifyContent: 'space-around'}}>
      <View style={{width: '75%', display:"flex", alignItems: 'center'}}>
        <Image source={require("./assets/Icons/discover_light.png")} style={styles.bottomImage}/>
        <Text style={styles.bottomText}>Discover</Text>
      </View>
      <View style={{width: '75%', display:"flex", alignItems: 'center'}}>
        <Image source={require("./assets/Icons/heart_light.png")} style={styles.bottomImage}/>
        <Text style={styles.bottomText}>Matches</Text>
      </View>
      <View style={{width: '75%', display:"flex", alignItems: 'center'}}>
        <Image source={require("./assets/Icons/messages_light.png")} style={styles.bottomImage}/>
        <Text style={styles.bottomText}>DMs</Text>
      </View>
    </View>
  
  </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.light.bg,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logo: {
    display: "flex",
    fontFamily: 'Sydney-Bold',
    fontSize: 36,
    color: Themes.light.text,
    textAlign: 'center',
    justifyContent: 'center',
  },

  navbar: {
    width: '100%',
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
    marginBottom: 16,
    marginTop: '-8%'
  },

  navBarIcons: {
    width: 32,
    height: 32,
    margin: '10%',
    display: "flex",
    flexDirection: "row", 
    justifyContent: "flex-end", 
    alignItems: "flex-end" 
  },

  profile: {
    display: "flex",
    height: '95%',
    width: '100%',
    borderRadius: 8,
    justifyContent: 'space-between',
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowOffset: Themes.light.shadows.shadowOffset,
  },

  profileNameText: {
    fontFamily: 'Sydney',
    fontSize: 32,
    marginLeft: '4%',
    marginTop: '2%',
    color: Themes.light.textSecondary,
  },

  profileDistanceText: {
    fontFamily: 'Sydney',
    fontSize: 18,
    marginLeft: '4%',
    justifyContent: 'flex-end',
    alignSelf: 'flex-start',
    marginBottom: '8%',
    color: Themes.light.textSecondary,
  },

  recording: {
    width: '100%',
    height: '25%',
    backgroundColor: Themes.light.bgSecondary,
    display: "flex",
    borderRadius: 16,
    marginTop: '-11%',
    padding: 16,

    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowOffset: Themes.light.shadows.shadowOffset,
  },

  recordingText: {
    display: "flex",
    fontFamily: 'Sydney',
    marginTop: 4,
    fontSize: 24,
    color: Themes.light.text,
    textAlign: 'left',
    justifyContent: 'flex-start',
  },

  recordingImage: {
    display: "flex",
    width: '20%',
    height: '50%',
    resizeMode: 'contain'
  },

  recordingWave: {
    display: "flex",
    width: '70%',
    marginLeft: 10,
    resizeMode: 'contain'
  },

  bottomImage: {
    width: 36,
    height: 36,
    marginTop: 8,
    display: "flex",
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  bottomText: {
    display: "flex",
    fontFamily: 'Sydney',
    marginTop: 4,
    marginBottom: 8, 
    fontSize: 16,
    color: Themes.light.textSecondary,
    textAlign: 'center',
    justifyContent: 'space-evenly',
  },
});
