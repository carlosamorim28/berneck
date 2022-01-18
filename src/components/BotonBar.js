import * as React from 'react';
import { View,TouchableOpacity,Text} from 'react-native';
import { BottomNavigation, } from 'react-native-paper';
import rotas from '../constants/screens';
import { Ionicons } from '@expo/vector-icons';


const BotonBar = ({setScreen, inicialStatus={inicio:true, rotina:false,perfil:false,calenario:false}}) => {
  const [colors,setColor] = React.useState(inicialStatus)
  function clicouInicio(){
    setScreen(rotas.inicio)
    setColor({inicio:true, rotina:false,perfil:false,calenario:false})
  }
  function clicouRotina(){
    setScreen(rotas.rotina)
    setColor({inicio:false, rotina:true,perfil:false,calenario:false})
  }
  function clicouPerfil(){
    setScreen(rotas.perfil)
    setColor({inicio:false, rotina:false,perfil:true,calenario:false})
  }
  function clicouCalendario(){
    setScreen(rotas.calendario)
    setColor({inicio:false, rotina:false,perfil:false,calenario:true})
  }

  return(
    <View style={{
      height:60, 
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-around'
    }}>
      <TouchableOpacity onPress={clicouInicio}>
        <Ionicons name="home-outline" size={24} color={colors.inicio ? '#30A3DB':"#838383"} />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={clicouRotina}>
        <Ionicons name="bar-chart-outline" size={24} color={colors.rotina ? '#30A3DB':"#838383"} />
      </TouchableOpacity>
      <TouchableOpacity onPress={clicouPerfil}>
        <Ionicons name="person-outline" size={24} color={colors.perfil ? '#30A3DB':"#838383"} />
      </TouchableOpacity>
      <TouchableOpacity onPress={clicouCalendario}>
        <Ionicons name="md-calendar-outline" size={24} color={colors.calenario ? '#30A3DB':"#838383"} />
      </TouchableOpacity>
    </View>
  )
};

export default BotonBar