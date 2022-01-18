import { View } from 'react-native'
function ScreenConteiner({children,backgroundColor='#FFF',alignItems='center'}){
    return(
        <View style={{
            flex:7,
            backgroundColor,
            padding:30,
            alignItems,
            justifyContent:'center',
            }}>
            {children}
        </View>
    )
}
export default ScreenConteiner