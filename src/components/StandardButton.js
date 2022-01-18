import {TouchableOpacity,Text} from 'react-native'
function StandardButton({title='Título',bakgroundColor='#30A3DB',onPress=()=>{}}){
    return(
        <TouchableOpacity
        onPress={onPress} 
        style={{
            width:'100%',
            backgroundColor:bakgroundColor,
            height:48,
            borderRadius:10,
            alignItems:'center',
            justifyContent:'center'
        }}>

        <Text style={{color:"#FFF",fontSize:20,fontWeight:'600'}}>{title}</Text>
        </TouchableOpacity>
    )
}
export default StandardButton