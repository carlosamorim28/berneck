import React,{ useState } from 'react'
import { Text } from 'react-native'
import ScreenConteiner from './components/ScreenContainer'
import rotas from './constants/screens'
import LoginScreen from './pages/LoginScreen'
import CadastroScreen from './pages/CadastroScreen'
import InicioScreen from './pages/InicioScreen'
import RotinaScreen from './pages/RotinaScreen'
import StandardButton from './components/StandardButton'
import AddAtividade from './pages/addAtividade'

function Routes(){
    const [screen,setScreen] = useState(rotas.login)
    const [usuarioLogado,setUsuarioLogado] = useState(undefined)
    if(screen === rotas.login){
        return(
            <LoginScreen setScreen={setScreen} alterausuarioLogado={setUsuarioLogado} />
        )
    }
    if (screen === rotas.recuperarSenha){
        return(
            <ScreenConteiner>
                <Text>tela ainda em produção</Text>
                <StandardButton onPress={()=>{setScreen(rotas.inicio)}} title='inicio' />
            </ScreenConteiner>
        )
    }
    if (screen === rotas.cadastro){
        return(
            <CadastroScreen setScreen={setScreen} alterausuarioLogado={setUsuarioLogado} />
        )
    }
    if(screen === rotas.calendario){
        return(
            <ScreenConteiner>
                <Text>tela ainda em produção</Text>
                <StandardButton onPress={()=>{setScreen(rotas.inicio)}} title='inicio' />
            </ScreenConteiner>
        )
    }
    if(screen === rotas.inicio){
        return(
            <InicioScreen setScreen={setScreen} usuarioLogado={usuarioLogado} />
        )
    }
    if(screen === rotas.perfil){
        return(
            <ScreenConteiner>
                <Text>tela ainda em produção</Text>
                <StandardButton onPress={()=>{setScreen(rotas.inicio)}} title='inicio' />
            </ScreenConteiner>
        )
    }
    if(screen===rotas.rotina){
        return(
            <RotinaScreen setScreen={setScreen} usuarioLogado={usuarioLogado} />
        )
    }
    if(screen === rotas.adicionarTarefa){
        return(
            <AddAtividade setScreen={setScreen} usuarioLogado={usuarioLogado}/>
        )
    }
    return <View/>
}

export default Routes 