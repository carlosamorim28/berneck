import * as React from 'react';
import { FAB, Portal, Provider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import rotas from '../constants/screens';

const FABMenu = ({setScreen}) => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? 'exit-run':'plus'}
          
          color='#FFF'
          fabStyle={{backgroundColor:open ? 'gray':'#30A3DB'}}
          actions={[
            {
              icon: 'book-plus-multiple-outline',
              label: 'Tarefas',
              onPress: () =>{
                setScreen(rotas.adicionarTarefa)
              },
              small:false,
              style:{backgroundColor:'#30A3DB'},
              color:"#FFF"
            },
            
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
  );
};

export default FABMenu;