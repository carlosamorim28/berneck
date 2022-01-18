import React, { useState } from 'react'
import {} from 'react-native'
import ScreenConteiner from '../components/ScreenContainer'
import StandardButton from '../components/StandardButton'
import StandardImput from '../components/StandardImput'
import Title from '../components/Title'
import icons from '../constants/icons'
import periodos from '../constants/periodos'
import rotas from '../constants/screens'
import { gravarDados, lerDados } from '../db'
function CadastroScreen({setScreen,alterausuarioLogado}){
    const [nome,setNome] = useState('')
    const [senha,setSenha] = useState('')
    const [email,setEmail] = useState('')
    function cadastrar(){
        gravarDados({nome,senha,email,atividades:[
            {
                nome:'Atividade 1',
                horarioInicio:'10:00h',
                horarioFim: '10:30h',
                status:false,
                periodo:periodos.manha
            },
            {
                nome:'Atividade 2',
                horarioInicio:'10:00h',
                horarioFim: '10:30h',
                status:false,
                periodo:periodos.tarde
            },
            {
                nome:'Atividade 3',
                horarioInicio:'10:00h',
                horarioFim: '10:30h',
                status:false,
                periodo:periodos.noite
            },
            {
                nome:'Atividade 4',
                horarioInicio:'10:00h',
                horarioFim: '10:30h',
                status:false,
                periodo:periodos.manha
            },
            {
                nome:'Atividade 5',
                horarioInicio:'10:00h',
                horarioFim: '10:30h',
                status:false,
                periodo:periodos.tarde
            },
            {
                nome:'Atividade 6',
                horarioInicio:'10:00h',
                horarioFim: '10:30h',
                status:false,
                periodo:periodos.noite
            },
        ],nivel:1,XpAtual:30}).then(()=>{
            lerDados().then((item)=>{
                alterausuarioLogado(item)
                setScreen(rotas.inicio)
            })
        })
        //alert('Cadastrar')

    }
    return(
        <ScreenConteiner>
            <Title text={'CADASTRO'} color='#2889B9'/>
            <StandardImput
                ionicIcon={icons.person}
                placeholder='Digite seu nome aqui'
                value={nome}
                onChangeText={setNome}
            />
            <StandardImput
                ionicIcon={icons.person}
                placeholder='Digite seu login aqui'
                value={senha}
                onChangeText={setSenha}
            />
            <StandardImput
                ionicIcon={icons.person}
                placeholder='Digite sua senha aqui'
                value={email}
                onChangeText={setEmail}
            />
            <StandardButton title='Concluir' onPress={cadastrar}/>
        </ScreenConteiner>
    )
}

export default CadastroScreen