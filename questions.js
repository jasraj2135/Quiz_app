const initialQuestions = [
    {
      category: 'Geography',
      questionText: 'What is the capital of France?',
      answers: [
        { text: 'Paris', isCorrect: true },
        { text: 'London', isCorrect: false },
        { text: 'Berlin', isCorrect: false },
        { text: 'Madrid', isCorrect: false },
      ],
    },
    {
      category: 'Geography',
      questionText: 'What is the largest ocean on Earth?',
      answers: [
        { text: 'Atlantic', isCorrect: false },
        { text: 'Indian', isCorrect: false },
        { text: 'Arctic', isCorrect: false },
        { text: 'Pacific', isCorrect: true },
      ],
    },
    {
      category: 'Geography',
      questionText: 'Which country has the most natural lakes?',
      answers: [
        { text: 'Canada', isCorrect: true },
        { text: 'USA', isCorrect: false },
        { text: 'Russia', isCorrect: false },
        { text: 'Brazil', isCorrect: false },
      ],
    },
    {
      category: 'Geography',
      questionText: 'Which continent is the Sahara Desert located in?',
      answers: [
        { text: 'Asia', isCorrect: false },
        { text: 'Africa', isCorrect: true },
        { text: 'Australia', isCorrect: false },
        { text: 'South America', isCorrect: false },
      ],
    },
    {
      category: 'Geography',
      questionText: 'What is the longest river in the world?',
      answers: [
        { text: 'Amazon', isCorrect: false },
        { text: 'Nile', isCorrect: true },
        { text: 'Yangtze', isCorrect: false },
        { text: 'Mississippi', isCorrect: false },
      ],
    },
    {
      category: 'Science',
      questionText: 'Which planet is known as the Red Planet?',
      answers: [
        { text: 'Earth', isCorrect: false },
        { text: 'Mars', isCorrect: true },
        { text: 'Jupiter', isCorrect: false },
        { text: 'Venus', isCorrect: false },
      ],
    },
    {
      category: 'Science',
      questionText: 'What is the chemical symbol for water?',
      answers: [
        { text: 'O2', isCorrect: false },
        { text: 'H2O', isCorrect: true },
        { text: 'CO2', isCorrect: false },
        { text: 'H2SO4', isCorrect: false },
      ],
    },
    {
      category: 'Science',
      questionText: 'What gas do plants absorb from the atmosphere?',
      answers: [
        { text: 'Oxygen', isCorrect: false },
        { text: 'Carbon Dioxide', isCorrect: true },
        { text: 'Nitrogen', isCorrect: false },
        { text: 'Hydrogen', isCorrect: false },
      ],
    },
    {
      category: 'Science',
      questionText: 'What is the hardest natural substance on Earth?',
      answers: [
        { text: 'Gold', isCorrect: false },
        { text: 'Iron', isCorrect: false },
        { text: 'Diamond', isCorrect: true },
        { text: 'Platinum', isCorrect: false },
      ],
    },
    {
      category: 'Science',
      questionText: 'What is the chemical symbol for gold?',
      answers: [
        { text: 'Au', isCorrect: true },
        { text: 'Ag', isCorrect: false },
        { text: 'Pb', isCorrect: false },
        { text: 'Fe', isCorrect: false },
      ],
    },
    {
      category: 'History',
      questionText: 'Who was the first President of the United States?',
      answers: [
        { text: 'Abraham Lincoln', isCorrect: false },
        { text: 'George Washington', isCorrect: true },
        { text: 'Thomas Jefferson', isCorrect: false },
        { text: 'John Adams', isCorrect: false },
      ],
    },
    {
      category: 'History',
      questionText: 'What year did World War II end?',
      answers: [
        { text: '1943', isCorrect: false },
        { text: '1944', isCorrect: false },
        { text: '1945', isCorrect: true },
        { text: '1946', isCorrect: false },
      ],
    },
    {
      category: 'History',
      questionText: 'Who was known as the Maid of Orléans?',
      answers: [
        { text: 'Marie Antoinette', isCorrect: false },
        { text: 'Joan of Arc', isCorrect: true },
        { text: 'Eleanor of Aquitaine', isCorrect: false },
        { text: 'Catherine de Medici', isCorrect: false },
      ],
    },
    {
      category: 'History',
      questionText: 'What was the name of the ship that brought the Pilgrims to America in 1620?',
      answers: [
        { text: 'Mayflower', isCorrect: true },
        { text: 'Santa Maria', isCorrect: false },
        { text: 'Endeavour', isCorrect: false },
        { text: 'Beagle', isCorrect: false },
      ],
    },
    {
      category: 'History',
      questionText: 'Which empire was ruled by Alexander the Great?',
      answers: [
        { text: 'Roman Empire', isCorrect: false },
        { text: 'Ottoman Empire', isCorrect: false },
        { text: 'Macedonian Empire', isCorrect: true },
        { text: 'British Empire', isCorrect: false },
      ],
    },
    {
      category: 'Entertainment',
      questionText: 'Which film won the Best Picture Oscar in 2020?',
      answers: [
        { text: 'Joker', isCorrect: false },
        { text: 'Parasite', isCorrect: true },
        { text: '1917', isCorrect: false },
        { text: 'Once Upon a Time in Hollywood', isCorrect: false },
      ],
    },
    {
      category: 'Entertainment',
      questionText: 'Who played the character of Harry Potter in the movie series?',
      answers: [
        { text: 'Elijah Wood', isCorrect: false },
        { text: 'Daniel Radcliffe', isCorrect: true },
        { text: 'Rupert Grint', isCorrect: false },
        { text: 'Tom Felton', isCorrect: false },
      ],
    },
    {
      category: 'Entertainment',
      questionText: 'Which TV show is known for the phrase "Winter is coming"?',
      answers: [
        { text: 'The Witcher', isCorrect: false },
        { text: 'Game of Thrones', isCorrect: true },
        { text: 'Vikings', isCorrect: false },
        { text: 'Stranger Things', isCorrect: false },
      ],
    },
    {
      category: 'Entertainment',
      questionText: 'Who directed the movie "Inception"?',
      answers: [
        { text: 'Steven Spielberg', isCorrect: false },
        { text: 'Christopher Nolan', isCorrect: true },
        { text: 'James Cameron', isCorrect: false },
        { text: 'Quentin Tarantino', isCorrect: false },
      ],
    },
    {
      category: 'Entertainment',
      questionText: 'What is the name of the kingdom where the 2013 animated movie "Frozen" is set?',
      answers: [
        { text: 'Arendelle', isCorrect: true },
        { text: 'Atlantis', isCorrect: false },
        { text: 'Narnia', isCorrect: false },
        { text: 'Hogwarts', isCorrect: false },
      ],
    },
    {
      category: 'Literature',
      questionText: 'Who wrote "1984"?',
      answers: [
        { text: 'George Orwell', isCorrect: true },
        { text: 'Aldous Huxley', isCorrect: false },
        { text: 'Ray Bradbury', isCorrect: false },
        { text: 'Philip K. Dick', isCorrect: false },
      ],
    },
    {
      category: 'Literature',
      questionText: 'Who wrote "Pride and Prejudice"?',
      answers: [
        { text: 'Charlotte Brontë', isCorrect: false },
        { text: 'Jane Austen', isCorrect: true },
        { text: 'Emily Brontë', isCorrect: false },
        { text: 'Mary Shelley', isCorrect: false },
      ],
    },
    {
      category: 'Literature',
      questionText: 'Which novel begins with the line "Call me Ishmael"?',
      answers: [
        { text: 'Moby-Dick', isCorrect: true },
        { text: 'To Kill a Mockingbird', isCorrect: false },
        { text: 'The Catcher in the Rye', isCorrect: false },
        { text: 'Pride and Prejudice', isCorrect: false },
      ],
    },
    {
      category: 'Literature',
      questionText: 'Who wrote "The Great Gatsby"?',
      answers: [
        { text: 'Ernest Hemingway', isCorrect: false },
        { text: 'F. Scott Fitzgerald', isCorrect: true },
        { text: 'John Steinbeck', isCorrect: false },
        { text: 'Mark Twain', isCorrect: false },
      ],
    },
    {
      category: 'Literature',
      questionText: 'Who wrote "Romeo and Juliet"?',
      answers: [
        { text: 'William Shakespeare', isCorrect: true },
        { text: 'Jane Austen', isCorrect: false },
        { text: 'Charles Dickens', isCorrect: false },
        { text: 'Emily Brontë', isCorrect: false },
      ],
    },
    {
      category: 'Technology',
      questionText: 'What does CPU stand for?',
      answers: [
        { text: 'Computer Personal Unit', isCorrect: false },
        { text: 'Central Processing Unit', isCorrect: true },
        { text: 'Computer Process Unit', isCorrect: false },
        { text: 'Central Personal Unit', isCorrect: false },
      ],
    },
    {
      category: 'Technology',
      questionText: 'What year was the first iPhone released?',
      answers: [
        { text: '2005', isCorrect: false },
        { text: '2006', isCorrect: false },
        { text: '2007', isCorrect: true },
        { text: '2008', isCorrect: false },
      ],
    },
    {
      category: 'Technology',
      questionText: 'What does HTML stand for?',
      answers: [
        { text: 'Hyperlinks and Text Markup Language', isCorrect: false },
        { text: 'Hyper Text Markup Language', isCorrect: true },
        { text: 'Home Tool Markup Language', isCorrect: false },
        { text: 'Hyper Tool Markup Language', isCorrect: false },
      ],
    },
    {
      category: 'Technology',
      questionText: 'What does CSS stand for?',
      answers: [
        { text: 'Computing Style Sheet', isCorrect: false },
        { text: 'Creative Style System', isCorrect: false },
        { text: 'Cascading Style Sheet', isCorrect: true },
        { text: 'Computer Style Sheet', isCorrect: false },
      ],
    },
    {
      category: 'Technology',
      questionText: 'Who is the founder of Apple Inc.?',
      answers: [
        { text: 'Bill Gates', isCorrect: false },
        { text: 'Steve Jobs', isCorrect: true },
        { text: 'Steve Wozniak', isCorrect: false },
        { text: 'Tim Cook', isCorrect: false },
      ],
    },
    {
      category: 'Sports',
      questionText: 'How many players are there in a rugby league team?',
      answers: [
        { text: '11', isCorrect: false },
        { text: '13', isCorrect: true },
        { text: '15', isCorrect: false },
        { text: '9', isCorrect: false },
      ],
    },
    {
      category: 'Sports',
      questionText: 'Which country hosted the first FIFA World Cup in 1930?',
      answers: [
        { text: 'Brazil', isCorrect: false },
        { text: 'France', isCorrect: false },
        { text: 'Uruguay', isCorrect: true },
        { text: 'Argentina', isCorrect: false },
      ],
    },
    {
      category: 'Sports',
      questionText: 'How many minutes is a rugby match?',
      answers: [
        { text: '60', isCorrect: false },
        { text: '70', isCorrect: false },
        { text: '80', isCorrect: true },
        { text: '90', isCorrect: false },
      ],
    },
    {
      category: 'Sports',
      questionText: 'How many Grand Slam singles titles has Serena Williams won?',
      answers: [
        { text: '21', isCorrect: false },
        { text: '23', isCorrect: true },
        { text: '25', isCorrect: false },
        { text: '27', isCorrect: false },
      ],
    },
    {
      category: 'Sports',
      questionText: 'Which country has won the most Olympic gold medals in men\'s hockey?',
      answers: [
        { text: 'India', isCorrect: true },
        { text: 'Australia', isCorrect: false },
        { text: 'Netherlands', isCorrect: false },
        { text: 'Germany', isCorrect: false },
      ],
    },
    {
      category: 'Art',
      questionText: 'Who painted the Mona Lisa?',
      answers: [
        { text: 'Leonardo da Vinci', isCorrect: true },
        { text: 'Pablo Picasso', isCorrect: false },
        { text: 'Vincent van Gogh', isCorrect: false },
        { text: 'Michelangelo', isCorrect: false },
      ],
    },
    {
      category: 'Art',
      questionText: 'Which artist cut off his own ear?',
      answers: [
        { text: 'Pablo Picasso', isCorrect: false },
        { text: 'Vincent van Gogh', isCorrect: true },
        { text: 'Salvador Dalí', isCorrect: false },
        { text: 'Claude Monet', isCorrect: false },
      ],
    },
    {
      category: 'Art',
      questionText: 'Who sculpted the Statue of David?',
      answers: [
        { text: 'Michelangelo', isCorrect: true },
        { text: 'Donatello', isCorrect: false },
        { text: 'Leonardo da Vinci', isCorrect: false },
        { text: 'Raphael', isCorrect: false },
      ],
    },
    {
      category: 'Art',
      questionText: 'Which artist is famous for painting melting clocks?',
      answers: [
        { text: 'Salvador Dalí', isCorrect: true },
        { text: 'Pablo Picasso', isCorrect: false },
        { text: 'Vincent van Gogh', isCorrect: false },
        { text: 'Claude Monet', isCorrect: false },
      ],
    },
  ];
  
  export default initialQuestions;
  
  
  