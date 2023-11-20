import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const PlayListRenderer = ({playlist}) => {
  return (
    <FlatList
          data={playlist}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
           
            <View style={{flexDirection: 'column',  marginBottom: 10,}}>
                <View style={{flexDirection: 'row', marginLeft: 10, }}>
                    <View style={{backgroundColor: 'black', width: 50, height: 50}}/>
                    <View style={{marginLeft:10}}>
                        <Text style={{ padding: 0, color:'white', fontSize: 15, }}>{item.name}</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{paddingTop: 0,borderRadius: 4,fontSize: 10,fontWeight: '600',  backgroundColor: 'gray'}}>LYRICS</Text>
                            <Text style={{ padding: 0,  marginLeft: 5,color:'white', fontSize: 12}}>{item.artist}</Text>
                        </View>

                    </View>
                    </View>
                </View>
          )}
    />
  )
}

export default PlayListRenderer