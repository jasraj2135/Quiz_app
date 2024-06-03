import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import initialQuestions from '../questions';

const QuizScreen = ({ route }) => {
  const { category } = route.params;
  const navigation = useNavigation();
  const questions = initialQuestions.filter(q => q.category === category);
  const totalQuestions = questions.length;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(new Animated.Value(1));

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    let isMounted = true;
  
    Animated.timing(progress, {
      toValue: 0,
      duration: 10000,
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished && isMounted) {
        handleAnswer(false);
      }
    });
  
    return () => {
      isMounted = false;
    };
  }, [currentQuestionIndex]);
  

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
  
    if (currentQuestionIndex + 1 < totalQuestions) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setProgress(new Animated.Value(1));
    } else {
      navigation.navigate('ScoreScreen', { score: isCorrect ? score + 1 : score, totalQuestions });
    }
  };
  
  

  if (!currentQuestion) {
    return null;
  }

  return (
    <ImageBackground source={require('../assets/images/background.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.category}>{category} Quiz</Text>
        <Text style={styles.question}>{currentQuestion.questionText}</Text>
        <Animated.View style={[styles.progressBar, { transform: [{ scaleX: progress }] }]} />
        {currentQuestion.answers.map(answer => (
          <TouchableOpacity
            key={answer.text}
            style={styles.answerButton}
            onPress={() => handleAnswer(answer.isCorrect)}
          >
            <Text style={styles.answerText}>{answer.text}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('CategorySelection')}>
          <Text style={styles.backButtonText}>Back to Categories</Text>
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
  category: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  question: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
    color: '#ffffff',
  },
  progressBar: {
    height: 10,
    width: '100%',
    backgroundColor: '#3498db',
    marginBottom: 20,
  },
  answerButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  answerText: {
    color: '#ffffff',
    fontSize: 18,
  },
  backButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#95a5a6',
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default QuizScreen;
