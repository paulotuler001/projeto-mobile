// import { View, Text, TouchableOpacity } from 'react-native'
// import React, { useEffect } from 'react'
// // import TrackPlayer from 'react-native-track-player'
// import songs  from '../../components/constants'
// import { usePlaybackState } from 'react-native-track-player'

// const setupPlayer = async () => {
//   await TrackPlayer.setupPlayer()/

//   await TrackPlayer.add(songs)
// }

// const togglePlayback = async(playbackState) => {
//   const currentTrack = await TrackPlayer.getCurrentTrack();

//   if(currentTrack !== null)  {
//     if(playbackState === State.Paused) {
//       await TrackPlayer.play()
//     }else {
//       await TrackPlayer.pause()
//     }
// }
// }
// const Home = () => {

//   const playBackState = usePlaybackState();

//   useEffect(() =>{
//     setupPlayer();
//   })

//   return (
//     <View>
//       <TouchableOpacity
//       onPress={() => togglePlayback(playBackState)}
//      ></TouchableOpacity>
//     </View>
//   )
// }

// export default Home
