(function () {
    // Functions
    function buildQuiz() {
        // variable to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // variable to store the list of possible answers
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`,
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="slide">
              <div class="question"> ${
                  currentQuestion.question
              } </div>
              <div class="answers"> ${answers.join('')} </div>
            </div>`,
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(
            '.answers',
        );

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (
                answerContainer.querySelector(selector) || {}
            ).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color =
                    'lightgreen';
            }
            // if answer is wrong or blank
            else {
                // color the answers red
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if (currentSlide === 0) {
            previousButton.style.display = 'none';
        } else {
            previousButton.style.display = 'inline-block';
        }
        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        } else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }
    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
        {
            question:
                'What happens to your muscles that makes them grow?',
            answers: {
                a: 'They swell up',
                b: 'They get tiny cracks which heal',
                c: 'Nothing happens, since science isnt cool',
            },
            correctAnswer: 'b',
        },
        {
            question:
                'What is the next version of Minecraft? (TM Mojang Studios 2009-21)',
            answers: {
                a: 'Version 1.24 "Lots o\' food',
                b: 'Version 1.14 "Village and Pillage',
                c: 'Version 1.17 "Caves and Cliffs"',
            },
            correctAnswer: 'c',
        },
        {
            question: 'What is more important to make muscles grow?',
            answers: {
                a: 'Nutrition',
                b: 'Exercise',
                c: 'Both',
            },
            correctAnswer: 'c',
        },
        {
            question:
                'What metaphor/simile could you use to explain how muscle grows?',
            answers: {
                a: 'Muscles are amazing',
                b:
                    'The reward in growing muscles is like the reward in winning the lottery',
                c: 'Muscles are basically goo',
            },
            correctAnswer: 'b',
        },
        {
            question: 'What is Conduction',
            answers: {
                a: 'The transfer of heat through a solid',
                b: 'The transfer of heat through a liquid/gas',
                c: 'The transfer of heat through waves of energy',
                d: 'The evaporation of water',
            },
            correctAnswer: 'a',
        },
        {
            question:
                'What geothermal Icelandic site has the same name as a 1980 movie?',
            answers: {
                a: 'Xanadu',
                b: 'The Shining',
                c: 'Heaven’s Gate',
                d: 'The Blue Lagoon',
            },
            correctAnswer: 'd',
        },
        {
            question:
                'In Swedish, a skvader is a rabbit with what unusual feature?',
            answers: {
                a: 'Wings',
                b: 'Glasses',
                c: 'Leotard',
                d: 'Giant Hands',
            },
            correctAnswer: 'a',
        },
        {
            question:
                'So far, which has been the only FIFA World Cup host not to make it out of the group stage?',
            answers: {
                a: 'Sweden',
                b: 'Mexico',
                c: 'United States',
                d: 'South Africa',
            },
            correctAnswer: 'd',
        },
        {
            question:
                'Worldwide, which is the most commonly transplanted organ from living donors?',
            answers: {
                a: 'The kidney',
                b: 'The colon',
                c: 'The stomach',
            },
            correctAnswer: 'a',
        },
        {
            question:
                'How many calories does the average 178lb human being burn while playing Fortnite for 6 hours',
            answers: {
                a: '1065',
                b: '689',
                c: '510',
                d: '368',
            },
            correctAnswer: 'c',
        },
        {
            question: '',
            answers: {
                a: 'They swell up',
                b: 'They get tiny cracks which heal',
                c: 'Nothing happens, since science isnt cool',
            },
            correctAnswer: 'b',
        },
        {
            question:
                "How many times has France changed it's constitution after 1800",
            answers: {
                a: '4',
                b: '11',
                c: '3',
            },
            correctAnswer: 'b',
        },
        {
            question:
                'How many blue stripes are there on the U.S. flag?',
            answers: {
                a: '13',
                b: '50',
                c: '4',
                d: 'None of the above',
            },
            correctAnswer: 'd',
        },
        {
            question: "What is Raghav's favorite thing?",
            answers: {
                a: 'Bananas',
                b:
                    'Intensly Automated Constructions that Operate Through the Use of Moving Electrons, or IACOTUME (or as you like to call them, "Computers")',
                c: 'Trains',
            },
            correctAnswer: 'c',
        },
        {
            question: "What is Rohanth's favourite kind of apple?",
            answers: {
                a: 'Red Delicious',
                b: 'Granny Smith',
                c: 'Fuji',
                d: 'Honeycrisp',
            },
            correctAnswer: 'c',
        },
    ];

    // Kick things off
    buildQuiz();

    // Pagination
    const previousButton = document.getElementById('previous');
    const nextButton = document.getElementById('next');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Show the first slide
    showSlide(currentSlide);

    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener('click', showPreviousSlide);
    nextButton.addEventListener('click', showNextSlide);
})();
