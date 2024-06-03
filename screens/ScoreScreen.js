import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ScoreScreen = ({ route }) => {
  const { score, totalQuestions } = route.params;
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../assets/images/background.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.scoreText}>Your Score</Text>
        <Text style={styles.score}>{score} / {totalQuestions}</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CategorySelection')}>
          <Text style={styles.buttonText}>Back to Categories</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)', // Add a transparent overlay to make text readable
  },
  scoreText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  score: {
    fontSize: 22,
    color: '#ffffff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});

export default ScoreScreen;
