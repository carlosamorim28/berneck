import {Text} from 'react-native'
function Subtitle({text,color='#F89D1D'}){
    return(
        <Text style={{fontSize:24,color:color,fontWeight:'bold'}}>{text}</Text>
    )
}
export default Subtitle