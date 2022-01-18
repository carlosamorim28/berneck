import React from 'react'
import { ScrollView, View } from 'react-native'
import { FAB, Portal, Provider } from 'react-native-paper';
import ScreenConteiner from '../components/ScreenContainer'
import Title from '../components/Title'
import periodos from '../constants/periodos'
import user from '../constants/usuarios'
import Atividades from '../components/Atividades'
import { TouchableOpacity } from 'react-native-web'
import FABMenu from '../components/Fabgroup';
import BotonBar from '../components/BotonBar';
function RotinaScreen({setScreen,usuarioLogado}){
    return(
        <View style={{flex:1}}>

        <ScreenConteiner alignItems='flex-start' >
            <ScrollView style={{width:'100%',marginTop:'20%'}}>
                <Title textAlign={undefined} color={'#30A3DB'} text={"TODA MANHÃ:"} />
                {usuarioLogado.atividades.map((item)=>{
                    if(item.periodo === periodos.manha){
                        return(
                            <Atividades data={item}/>
                        )
                    }
                })}
                <Title text={"TODA TARDE:"} color={'#30A3DB'} />
                {usuarioLogado.atividades.map((item)=>{
                    if(item.periodo === periodos.tarde){
                        return(
                            <Atividades data={item}/>
                        )
                    }
                })}
                <Title text={"TODA NOITE:"} color={'#30A3DB'} />
                {usuarioLogado.atividades.map((item)=>{
                    if(item.periodo === periodos.noite){
                        return(
                            <Atividades data={item}/>
                        )
                    }
                })}
                
            </ScrollView>
            <FABMenu setScreen={setScreen} />
        </ScreenConteiner>
        <BotonBar setScreen={setScreen} inicialStatus={{inicio:false, rotina:true,perfil:false,calenario:false}}/>
        </View>
    )
}
export default RotinaScreen