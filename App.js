import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './telas/Home';
import Detalhes from './telas/Detalhes';
export default function App() {
  
    const Stack = createNativeStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Detalhes" component={HomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}