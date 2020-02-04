
$(document).ready(function () {

    var questions = [
        {
            question: "In what part of New York did Vito Corleone grow up?",
            answers: [
                 'Hells Kitchen',
            'Little Italy',
                'Staten Island',
            ],
            correctAnswer: 'Little Italy'
        },
        {
            question: "In the movie The Wizard of Oz, what did the Scarecrow want from the wizard?",
            answers: [
             'brain',
            'heart',
            'foot',
            'courage',
            ],
            correctAnswer: 'brain'
        }

        // {
        //     question: "Which 1952 musical comedy tells the story of three performers making the transition from silent movies to talkies?",
        //     answers: {
        //         a: 'Singing in the Rain',
        //         b: 'Monkey Business',
        //         c: 'Jack and the Beanstalk',
        //     },
        //     correctAnswer: 'a'
        // },
        // {
        //     question: "In the Superman movies, what newspaper does Clark Kent Work for?",
        //     answers: {
        //         a: 'The Daily Prophet',
        //         b: 'The Daily Planet',
        //         c: 'The Daily Bugle',
        //     },
        //     correctAnswer: 'b'
        // },
        // {
        //     question: "Which movie is famous for the quote 'There's no crying in baseball!'",
        //     answers: {
        //         a: 'The Sandlot',
        //         b: 'Rookie of the Year',
        //         c: 'A League of Their Own',
        //     },
        //     correctAnswer: 'c'
        // },
        // {
        //     question: "What 90s movie was the first and only animated film to receive a Special Achievement Academy Award?",
        //     answers: {
        //         a: 'Beauty and the Beast',
        //         b: 'Toy Story',
        //         c: 'Aladdin',
        //     },
        //     correctAnswer: 'b'
        // }
    ];

    //var countDown = 60000;
    //var correct = 0;
    //var incorrect = 0;
    //var unanswered = 0;

    var startButton = document.getElementById('start-btn');
    // var startButton = $('#start-btn')

    var nextButton = document.getElementById('next-btn');
    var questionContainerElement = document.getElementById('question-container');
    var questionElement = document.getElementById('question');
    var answerButtonsElement = document.getElementById('answer-buttons');

    //let shuffledTriviaQuestions, currentTriviaQuestions

    startButton.addEventListener('click', startTrivia);

    function startTrivia() {
        startButton.classList.add('hide');
        //shuffledTriviaQuestions = questions.sort(() => Math.random);
        currentTriviaQuestions = 0;
        questionContainerElement.classList.remove('hide');
        setNextQuestion()
    };

    function setNextQuestion() {
        showQuestion(questions[currentTriviaQuestions])
       // resetState()
    };

    function showQuestion(question) {
        questionElement.innerText = question.question;
        question.answers.forEach(answer => {
            var button = document.createElement('button');
            button.innerText = answer;
            console.log(answer)
            button.classList.add('btn');

           // if (answer.correct) {
             //   button.dataset.correct = answer.correct
            //}
        button.addEventListener('click',function(event){
            console.log('Is this button working')
            console.log(event)
        })
            answerButtonsElement.appendChild(button)

        })
    };
    //function selectAnswer(){
    //var selectedButton = 
    //}



    function resetState(e) {
        nextButton.classList.add('hide');
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild)
        }
    }
    //function selectAnswer() {

    //}









})





