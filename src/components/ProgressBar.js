import { View,Image,Text } from 'react-native'
import {ProgressBar,Colors} from 'react-native-paper'
function StandardProgressBar({minimoDeXp=0,xpAtual=50,maximoDeXp=100}){
    return(
        <View style={{flexDirection:'row', alignItems:'center'}} >
            <Text style={{color:'#B4B4B4'}}>{minimoDeXp}</Text>
            <ProgressBar progress={xpAtual/maximoDeXp} color='#30A3DB' style={{width:200,margin:5}} />                
            <Text style={{color:'#B4B4B4'}}>{maximoDeXp} xp</Text>
        </View>
    )
}
export default StandardProgressBar