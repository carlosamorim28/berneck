import { TextInput, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
function StandardImput({
    borderColor='#2889B9',
    value='',
    defaultValue='',
    onChangeText=()=>{},
    placeholder='',
    ionicIcon='person-outline',
    doisNaLinha = false
}){
    return(
        <View style={{ 
            borderColor:borderColor,
            width:'100%',
            borderWidth:1,
            borderRadius:5,
            height:48,
            alignItems:'center',
            flexDirection:'row',
            margin: 10
            }}>
                <Ionicons name={ionicIcon} style={{marginLeft:5}} size={24} color="#5A6684" />
                <TextInput
                    value={value}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    style={{marginLeft:5,width:doisNaLinha ? '30%' :'100%'}}
                    onChangeText={(text)=>{
                        onChangeText(text)
                    }}
                />
        </View>
    )
}
export default StandardImput