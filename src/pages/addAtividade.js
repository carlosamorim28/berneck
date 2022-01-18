import React from  'react'
import {Text,TouchableOpacity,View} from 'react-native'
import ScreenConteiner from '../components/ScreenContainer'
import StandardButton from '../components/StandardButton'
import StandardImput from '../components/StandardImput'
import rotas from '../constants/screens'
function AddAtividade({setScreen,usuarioLogado,alterausuarioLogado}){
    const [nomeAtividade,setNomeAtividade] = React.useState('')
    const [horaInicio,setHoraInicio] = React.useState('')
    const [horaFim,setHoraFim] = React.useState('')
    //const [horaFim,setHoraFim] = React.useState('')
    const [diasDaSemana,setDiasDaSemana] = React.useState({
        segunda:false,
        terca:false,
        quarta:false,
        quinta:false,
        sexta:false,
        sabado:false,
        domingo:false
    })
    return(
        <ScreenConteiner>
            <StandardImput
                value={nomeAtividade}
                defaultValue={nomeAtividade}
                onChangeText={setNomeAtividade}
                placeholder='Nome Da Tarefa'
            />
            <View style={{flexDirection:'row',justifyContent:'space-between',width:'90%'}}>
                <TouchableOpacity style={{backgroundColor:diasDaSemana.domingo ? 'blue':'gray',width:40,height:40,borderRadius:200, justifyContent:'center',alignItems:'center'}} onPress={()=>{diasDaSemana.domingo = true; setDiasDaSemana(diasDaSemana)}}><Text>D</Text></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:diasDaSemana.segunda ? 'blue':'gray',width:40,height:40,borderRadius:200, justifyContent:'center',alignItems:'center'}} onPress={()=>{diasDaSemana.segunda = !diasDaSemana.segunda; setDiasDaSemana(diasDaSemana)}}><Text>S</Text></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:diasDaSemana.terca ? 'blue':'gray',width:40,height:40,borderRadius:200, justifyContent:'center',alignItems:'center'}} onPress={()=>{diasDaSemana.terca = !diasDaSemana.terca; setDiasDaSemana(diasDaSemana)}}><Text>T</Text></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:diasDaSemana.quarta ? 'blue':'gray',width:40,height:40,borderRadius:200, justifyContent:'center',alignItems:'center'}} onPress={()=>{diasDaSemana.quarta = !diasDaSemana.quarta; setDiasDaSemana(diasDaSemana)}}><Text>Q</Text></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:diasDaSemana.quinta ? 'blue':'gray',width:40,height:40,borderRadius:200, justifyContent:'center',alignItems:'center'}} onPress={()=>{diasDaSemana.quinta = !diasDaSemana.quinta; setDiasDaSemana(diasDaSemana)}}><Text>Q</Text></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:diasDaSemana.sexta ? 'blue':'gray',width:40,height:40,borderRadius:200, justifyContent:'center',alignItems:'center'}} onPress={()=>{diasDaSemana.sexta = !diasDaSemana.sexta; setDiasDaSemana(diasDaSemana)}}><Text>S</Text></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:diasDaSemana.sabado ? 'blue':'gray',width:40,height:40,borderRadius:200, justifyContent:'center',alignItems:'center'}} onPress={()=>{diasDaSemana.sabado = !diasDaSemana.sabado; setDiasDaSemana(diasDaSemana)}}><Text>S</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <Text>Inicio</Text>
                        <StandardImput 
                        value={horaInicio}
                        defaultValue={horaInicio}
                        onChangeText={setHoraInicio}
                        placeholder='00:00'
                        doisNaLinha
                        />
                </View>
                <View style={{width:10}}/>
                <View style={{alignItems:'center',justifyContent:'center'}} >
                    <Text>Fim</Text>
                    <StandardImput 
                        value={horaFim}
                        defaultValue={horaFim}
                        onChangeText={setHoraFim}
                        placeholder='00:00'
                        doisNaLinha
                        />
                </View>

            </View>
            <StandardButton onPress={()=>{setScreen(rotas.inicio)}} title='inicio' />
        </ScreenConteiner>
    )

}
export default AddAtividade