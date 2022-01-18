import React from 'react'
import {Text, View} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Atividade from '../classes/Atividade'
import Subtitle from './SubTitle'
const atividade = new Atividade({
    nome:'Café da manhã',
    horarioInicio:'10:00h',
    horarioFim: '10:30h',
    status:false
})
function Atividades({data = new Atividade({})}){
    return(
        <View style={{
                width:'95%',
                backgroundColor:'#FFF', 
                minHeight:100,
                justifyContent:'center',
                borderRadius:20,
                elevation:10,
                margin:10,
                padding:10,
                flexDirection:'row',
            }}>
            <View style={{flex:1,justifyContent:'center'}}>
                <Subtitle text={data.nome} />
                <View style={{height:10}}/>
                <Text style={{color:'#4E4E4E'}}>{data.horarioInicio} às {data.horarioFim}</Text>
            </View>
            <View style={{justifyContent:'center'}}>
                <Ionicons name="notifications-outline" size={24} color="black" />
            </View>
        </View>
    )
}
export default Atividades