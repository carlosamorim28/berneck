import React,{useState} from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import ScreenConteiner from '../components/ScreenContainer'
import StandardButton from '../components/StandardButton'
import StandardImput from '../components/StandardImput'
import Title from '../components/Title'
import icons from '../constants/icons'
import rotas from '../constants/screens'
import BotonBar from '../components/BotonBar'
import { lerDados } from '../db'
function Login({setScreen,alterausuarioLogado}){
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')

    async function login(){
        var logou = false
        var usuarioLogado = undefined
        lerDados().then((item)=>{
            if(item.email === email && item.senha === senha){
                    logou = true
                    usuarioLogado = item
                    console.log(item)
                    console.log(usuarioLogado)
                    alterausuarioLogado(usuarioLogado)
            }
        
            if(logou){
                setScreen(rotas.inicio)
            }else{
                alert('Usuário ou senha incorretos')
            }
        })
    }

    return(
        <ScreenConteiner>
            <View style={{
                flex:1,
                alignItems:'center',
                justifyContent:'center',
                width:'100%'
                }}>
                <Title text={'FORTALEZA AZUL'} />
                <Text style={{color:'#AAAAAA',fontSize:20}}>Descrição</Text>
                <Text>Lorem Ipsun</Text>
                <StandardImput 
                    placeholder='login'
                    borderColor='#2889B9'
                    ionicIcon={icons.person}
                    value={email}
                    onChangeText={setEmail}
                />
                <StandardImput 
                    placeholder='Pasword'
                    borderColor='#2889B9'
                    ionicIcon={icons.lock}
                    value={senha}
                    onChangeText={setSenha}
                />
                <TouchableOpacity style={{
                    width:'100%',
                    flexDirection:'row-reverse',
                    paddingHorizontal:10,
                    marginBottom:10
                    }}>
                    <Text style={{color:'#F89D1D'}} >Esqueceu a senha?</Text>
                </TouchableOpacity>
                <StandardButton 
                    title='Acessar'
                    onPress={login}
                />
                <TouchableOpacity style={{marginTop:10}} onPress={()=>{
                    setScreen(rotas.cadastro)
                }}>
                    <Text style={{color:'#AEB4C2'}}>Ou Cadastre-se Aqui</Text>
                </TouchableOpacity>
            </View>
        </ScreenConteiner>
        
    )
}
export default Login