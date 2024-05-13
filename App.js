import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Modal, TouchableHighlight, Button } from 'react-native';

const initialQuestions = [
  {
    category: 'Geography',
    questionText: 'What is the capital of France?',
    difficulty: 'easy',
    answers: [
      { text: 'Paris', isCorrect: true },
      { text: 'London', isCorrect: false },
      { text: 'Berlin', isCorrect: false },
      { text: 'Madrid', isCorrect: false },
    ],
  },
  // Add more questions here...
];

// Additional Geography questions
const additionalGeographyQuestions = [
  {
    category: 'Geography',
    questionText: 'Which country is known as the Land of the Rising Sun?',
    difficulty: 'easy',
    answers: [
      { text: 'China', isCorrect: false },
      { text: 'Japan', isCorrect: true },
      { text: 'South Korea', isCorrect: false },
      { text: 'Vietnam', isCorrect: false },
    ],
  },
  {
    category: 'Geography',
    questionText: 'What is the largest desert in the world?',
    difficulty: 'easy',
    answers: [
      { text: 'Sahara Desert', isCorrect: true },
      { text: 'Arabian Desert', isCorrect: false },
      { text: 'Gobi Desert', isCorrect: false },
      { text: 'Kalahari Desert', isCorrect: false },
    ],
  },
];

// Additional Science questions
const additionalScienceQuestions = [
  {
    category: 'Science',
    questionText: 'What is the powerhouse of the cell?',
    difficulty: 'easy',
    answers: [
      { text: 'Nucleus', isCorrect: false },
      { text: 'Mitochondrion', isCorrect: true },
      { text: 'Ribosome', isCorrect: false },
      { text: 'Endoplasmic Reticulum', isCorrect: false },
    ],
  },
  {
    category: 'Science',
    questionText: 'What planet is known as the Red Planet?',
    difficulty: 'easy',
    answers: [
      { text: 'Earth', isCorrect: false },
      { text: 'Mars', isCorrect: true },
      { text: 'Jupiter', isCorrect: false },
      { text: 'Venus', isCorrect: false },
    ],
  },
  // Additional Science questions

  {
    category: 'Science',
    questionText: 'What is the powerhouse of the cell?',
    difficulty: 'easy',
    answers: [
      { text: 'Nucleus', isCorrect: false },
      { text: 'Mitochondrion', isCorrect: true },
      { text: 'Ribosome', isCorrect: false },
      { text: 'Endoplasmic Reticulum', isCorrect: false },
    ],
  },
  {
    category: 'Science',
    questionText: 'What planet is known as the Red Planet?',
    difficulty: 'easy',
    answers: [
      { text: 'Earth', isCorrect: false },
      { text: 'Mars', isCorrect: true },
      { text: 'Jupiter', isCorrect: false },
      { text: 'Venus', isCorrect: false },
    ],
  },
  {
    category: 'Science',
    questionText: 'What is the largest mammal?',
    difficulty: 'medium',
    answers: [
      { text: 'Blue whale', isCorrect: true },
      { text: 'African elephant', isCorrect: false },
      { text: 'Giraffe', isCorrect: false },
      { text: 'Sperm whale', isCorrect: false },
    ],
  },
  {
    category: 'Science',
    questionText: 'What is the fastest land animal?',
    difficulty: 'medium',
    answers: [
      { text: 'Cheetah', isCorrect: true },
      { text: 'Lion', isCorrect: false },
      { text: 'Gazelle', isCorrect: false },
      { text: 'Pronghorn', isCorrect: false },
    ],
  },
  {
    category: 'Science',
    questionText: 'What is the chemical symbol for gold?',
    difficulty: 'hard',
    answers: [
      { text: 'Au', isCorrect: true },
      { text: 'Ag', isCorrect: false },
      { text: 'Fe', isCorrect: false },
      { text: 'Cu', isCorrect: false },
    ],
  },
];
const additionalHistoryQuestions = [
  {
    category: 'History',
    questionText: 'Who was the first female Prime Minister of the United Kingdom?',
    difficulty: 'medium',
    answers: [
      { text: 'Margaret Thatcher', isCorrect: true },
      { text: 'Theresa May', isCorrect: false },
      { text: 'Indira Gandhi', isCorrect: false },
      { text: 'Golda Meir', isCorrect: false },
    ],
  },
  {
    category: 'History',
    questionText: 'Which war was fought between the North and South regions of the United States?',
    difficulty: 'hard',
    answers: [
      { text: 'American Civil War', isCorrect: true },
      { text: 'World War I', isCorrect: false },
      { text: 'World War II', isCorrect: false },
      { text: 'Vietnam War', isCorrect: false },
    ],
  },
  {
    category: 'History',
    questionText: 'Who was the first President of the United States?',
    difficulty: 'easy',
    answers: [
      { text: 'George Washington', isCorrect: true },
      { text: 'Thomas Jefferson', isCorrect: false },
      { text: 'John Adams', isCorrect: false },
      { text: 'James Madison', isCorrect: false },
    ],
  },
  {
    category: 'History',
    questionText: 'What year did the Titanic sink?',
    difficulty: 'medium',
    answers: [
      { text: '1912', isCorrect: true },
      { text: '1905', isCorrect: false },
      { text: '1916', isCorrect: false },
      { text: '1921', isCorrect: false },
    ],
  },
  {
    category: 'History',
    questionText: 'Who was the first man to step on the moon?',
    difficulty: 'medium',
    answers: [
      { text: 'Neil Armstrong', isCorrect: true },
      { text: 'Buzz Aldrin', isCorrect: false },
      { text: 'Michael Collins', isCorrect: false },
      { text: 'Yuri Gagarin', isCorrect: false },
    ],
  },
  // Add more history questions...
];

const QuizGame = () => {
  const [questions, setQuestions] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [score, setScore] = useState(0);

  const allQuestions = [...initialQuestions, ...additionalGeographyQuestions, ...additionalScienceQuestions, ...additionalHistoryQuestions];

  const displayQuestions = (category) => {
    const filteredQuestions = allQuestions.filter(q => q.category === category);
    setQuestions(filteredQuestions);
  };

  const handleAnswer = (answer) => {
    if (answer.isCorrect) {
      setIsAnswerCorrect(true);
      setScore(score + 1);
    } else {
      setIsAnswerCorrect(false);
    }
    setModalVisible(true);
    setAnsweredQuestions(answeredQuestions + 1);
  };

  const restartQuiz = () => {
    setQuestions([]);
    setModalVisible(false);
    setAnsweredQuestions(0);
    setScore(0);
  };

  const closePopup = () => {
    if (answeredQuestions === questions.length) {
      restartQuiz();
    } else {
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.categoryText}>Category</Text>
          <Button title="Geography" onPress={() => displayQuestions('Geography')} />
          <Button title="Science" onPress={() => displayQuestions('Science')} />
          <Button title="History" onPress={() => displayQuestions('History')} />
          {/* Add more category buttons */}
        </View>
        <View>
          {questions.map((question, index) => (
            <View key={index} style={styles.questionContainer}>
              <Text style={styles.questionText}>{question.questionText}</Text>
              <ScrollView>
                {question.answers.map((answer, answerIndex) => (
                  <View key={answerIndex} style={styles.buttonContainer}>
                    <Button
                      title=""
                      onPress={() => handleAnswer(answer)}
                      color="#2196F3"
                    />
                    <Text style={styles.buttonText}>{answer.text}</Text>
                  </View>
                ))}
              </ScrollView>
            </View>
          ))}
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          closePopup();
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>{isAnswerCorrect ? 'Correct!' : 'Incorrect!'}</Text>
            <Text style={styles.scoreText}>Score: {score}</Text>
            {answeredQuestions === questions.length && (
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
                onPress={() => {
                  restartQuiz();
                }}
              >
                <Text style={styles.textStyle}>Restart</Text>
              </TouchableHighlight>
            )}
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                closePopup();
              }}
            >
              <Text style={styles.textStyle}>{answeredQuestions === questions.length ? 'Close' : 'Next'}</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginVertical: 100,
  },
  categoryText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    flex: 1,
    marginLeft: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginVertical: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scoreText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default QuizGame;