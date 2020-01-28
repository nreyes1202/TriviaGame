    
$(document).ready(function() {

    var questions = [
        {   
            question: "In what part of New York did Vito Corleone grow up?",
            answers: {
                a: 'Hells Kitchen',
                b: 'Little Italy',
                c: 'Staten Island',
            },
            correctAnswer: 'b'
        },
        {
            question: "In the Superman movies, what newspaper does Clark Kent Work for?",
            answers: {
                a: 'The Daily Planet',
                b: 'The Daily Prophet',
                c: 'The Daily Bugle',
            }
            correctAnswer: 'a'
        },
        {
            question: "In the movie The Wizard of Oz, what did the Scarecrow want from the wizard?",
            answers: {
                a: 'a brain',
                b: 'a heart',
                c: 'courage',
            }
            correctAnswer: 'a'
        },
        {
            question: "Which 1952 musical comedy tells the story of three performers making the transition from silent movies to talkies?",
            answers: {
                a: 'Singing in the Rain',
                b: 'Monkey Business',
                c: 'Jack and the Beanstalk',
            }
            correctAnswer: 'a'
        },
        {
            question: "Which movie is famous for the quote 'There's no crying in baseball!'",
            answers: {
                a: 'The Sandlot',
                b: 'Rookie of the Year',
                c: 'A League of Their Own',
            }
            correctAnswer: 'c'
        },
        {
            question: "What 90s movie was the first and only animated film to receive a Special Achievement Academy Award?",
            answers: {
                a: 'Beauty and the Beast',
                b: 'Toy Story',
                c: 'Aladdin',
            }
            correctAnswer: 'b'
        }
    ];

    var countDown = 60000;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    function showQuestion (){
        $('#trivia-questions').html(question[key].triviaquestions);

        for (var i = 0; i < question[key].answers.length; i++){
            var response = answers(questions);
        }

    }
    
    




    

        
        
    })

    


    
