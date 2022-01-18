import React from 'react'
import { View,Image,Text, ScrollView, TouchableOpacity } from 'react-native'
import ScreenConteiner from '../components/ScreenContainer'
import StandardProgressBar from '../components/ProgressBar'
import Atividades from '../components/Atividades'
import Atividade from '../classes/Atividade'
import BotonBar from '../components/BotonBar'
import { Ionicons } from '@expo/vector-icons';
import rotas from '../constants/screens'
function InicioScreen({setScreen,usuarioLogado}){
    const user = {
        nome:'Bernardo',
        nivel:'1',
        XpAtual:30,
        atividades:[
            new Atividade({
                nome:'Café da manhã',
                horarioInicio:'10:00h',
                horarioFim: '10:30h',
                status:false
            }),
            new Atividade({
                nome:'Domir',
                horarioInicio:'10:00h',
                horarioFim: '10:30h',
                status:false
            }),
            new Atividade({
                nome:'Regar as plantas',
                horarioInicio:'10:00h',
                horarioFim: '10:30h',
                status:false
            }),
            new Atividade({
                nome:'Chorar depois que tudo der errado',
                horarioInicio:'10:00h',
                horarioFim: '10:30h',
                status:false
            })
        ]
    }
    const nivel = {'1':{XpMaximo:100}}
    return(
        <View style={{flex:1}}>
            <ScreenConteiner>
                <TouchableOpacity
                style={{width:'100%',justifyContent:'flex-end',alignItems:'flex-end'}}
                onPress={()=>{
                    setScreen(rotas.login)
                }}
                >
                    <Ionicons name="exit-outline" size={24} color="#838383" />
                </TouchableOpacity>
                <Image 
                    source={{uri:'https://media.discordapp.net/attachments/307163370744840193/927673452599586876/unknown.png'}}
                    style={{width:'50%',height:'50%'}}
                />
                <Text style={{color:'#F89D1D',fontSize:25}}> {`Reino de ${usuarioLogado.nome}`}</Text>
                <Text style={{color:'#30A3DB',fontSize:30}}>{`Nv. ${usuarioLogado.nivel}`}</Text>
                <StandardProgressBar minimoDeXp={0}xpAtual={usuarioLogado.XpAtual}maximoDeXp={nivel[1].XpMaximo}/>
            </ScreenConteiner>
            <ScreenConteiner 
                backgroundColor='#F0F0F0'

            >
                <ScrollView style={{width:'100%'}}>
                    {usuarioLogado.atividades.map((item)=>{
                        return(
                            <Atividades data={item}/>
                        )
                    })}
                </ScrollView>
            </ScreenConteiner>
            <BotonBar setScreen={setScreen} />
        </View>
    )
}
export default InicioScreen