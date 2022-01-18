import {Text} from 'react-native'
function Title({text,color='#F89D1D',textAlign='center'}){
    return(
        <Text style={{color:color,fontSize:40, textAlign,fontWeight:'bold'}}>{text}</Text>
    )
}
export default Title