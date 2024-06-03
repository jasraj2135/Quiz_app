import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategorySelection from './screens/CategorySelection';
import QuizScreen from './screens/QuizScreen';
import ScoreScreen from './screens/ScoreScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CategorySelection">
        <Stack.Screen name="CategorySelection" component={CategorySelection} options={{ headerShown: false }} />
        <Stack.Screen name="QuizScreen" component={QuizScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ScoreScreen" component={ScoreScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
