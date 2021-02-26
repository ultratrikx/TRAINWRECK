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
            question: 'Qui est le CEO de Carnaval?',
            answers: {
                a: 'Mr P.-Michel Bouchard',
                b: 'Une Trompette',
                c: 'Mr Serge Ferland',
            },
            correctAnswer: 'a',
        },
        {
            question: 'Quelle couleur est le motif de la chaussette?',
            answers: {
                a: 'Bleu',
                b: 'Orange',
                c: 'Rouge',
            },
            correctAnswer: 'c',
        },
        {
            question: 'Quel biscuit dans le beignet?',
            answers: {
                a: 'Ritz',
                b: 'Oreo',
                c: 'Reeses',
            },
            correctAnswer: 'b',
        },
        {
            question: 'Qui est Bonhomme?',
            answers: {
                a: 'courge cireuse',
                b: 'Un humain',
                c: 'Une mascotte',
            },
            correctAnswer: 'c',
        },
        {
            question: 'Quel est le Carnaval traditions?',
            answers: {
                a: 'Rouge Vetements',
                b: 'Carnaval Chanson',
                c: 'Fleche Ceinture',
                d: 'All of the above',
            },
            correctAnswer: 'd',
        },
        {
            question: 'Combien est lourd Bonhomme?',
            answers: {
                a: '400 livres de neige.',
                b: '330 livres de neige.',
                c: '200 livres de neige.',
            },
            correctAnswer: 'a',
        },
        {
            question: 'Que fait le bonhomme representer?',
            answers: {
                a: 'Esperer',
                b: 'une mascotte',
                c: 'La joie de vivre des Quebecers.',
            },
            correctAnswer: 'c',
        },
        {
            question:
                'Quel instrument de musique est très populaire avec Bonhomme?',
            answers: {
                a: 'Une Guitare ',
                b: 'Une Trompette',
                c: 'Un Piano',
            },
            correctAnswer: 'b',
        },
        {
            question: 'Quand est-ce que Bonhomme Carnaval est ne?',
            answers: {
                a: '1849',
                b: '1955',
                c: '2004',
            },
            correctAnswer: 'b',
        },

        {
            question: 'Quand etait le premier Carnaval?',
            answers: {
                a: '1902',
                b: '1894',
                c: '1937',
            },
            correctAnswer: 'b',
        },

        {
            question:
                "Quels quartier n'est pas seront les hotes en 2021?",
            answers: {
                a: 'Fermont',
                b: 'Limoilou',
                c: 'Saint-Roch',
            },
            correctAnswer: 'a',
        },
        {
            question: "Quelle activite n'est pas dans le carnaval?",
            answers: {
                a: 'Canot en glace',
                b: 'Hockey',
                c: 'Natation',
            },
            correctAnswer: 'c',
        },
        {
            question: 'Comment grand est Bonhomme?',
            answers: {
                a: '7 pieds(Feet)',
                b: '10 pieds',
                c: '9 pieds',
            },
            correctAnswer: 'a',
        },
        {
            question:
                'De quelle culture vient la technique de faire une ceinture flechee?',
            answers: {
                a: 'Les amerindiens',
                b: 'Les francais',
                c: 'Les anglais',
            },
            correctAnswer: 'a',
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
