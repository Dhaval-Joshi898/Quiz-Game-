//The second part of the project where object is converted into json
const quesJSON = [
    {
        'correctAnswer': 'Three',
        'options': ['Two', 'Three', 'Four', 'Five'],
        'question':
            "How many pieces of bun are in a Mcdonald's Big Mac?",
    },
    {
        'correctAnswer': 'Bootstrap',
        'options': ['Bootstrap', 'HTML', 'Jquery', 'Python'],
        'question':
            "Out of this which is a CSS framework?",
    },
    {
        'correctAnswer': '()',
        'options': ['{}', '()', '[]', '<>'],
        'question':
            "What is parentheses in the following option? mark the correct answer",
    },
    {
        'correctAnswer': 'Chris Evans',
        'options': ['Robert Downey Jr', 'Chris Hemsworth', 'Tom Holland', 'Chris Evans'],
        'question':
            "Who played Captain America in Avengers?",
    },
    {
        'correctAnswer': 'Robert Downey Jr',
        'options': ['Robert Downey Jr', 'Chris Hemsworth', 'Tom Holland', 'Chris Evans'],
        'question':
            "Who played Iron Man in Avengers?",
    }
]
//we need this object everytime so lets destructure ,this will helo us in not using questionObj.otions or answers
// const {correctAnswer,options,question}=questionObj;


let score = 0;
let currentQues = 0; // to keep the count of question in quesJSON beacuse it is an ARRAY of obejct
let totalQues=quesJSON.length

// console.log(options)
// console.log(correctAnswer)

// const questionDiv=document.getElementById('question')
const questionEl = document.getElementById('question');
// for option div
const optionEl = document.getElementById('options'); //fetch option div 

const scoreEl = document.getElementById('score'); //fetch score div

const nextBtn=document.getElementById('nextBtn');

showQuestion()   //calling the below function for woking of question,option in dom and shuffling option

function showQuestion() {
    // destructuring object
    const { correctAnswer, options, question } = quesJSON[currentQues];

    //MAnipulating DOM
    questionEl.textContent = question;

    const shuffleOptionContains = shuffleOption(options)

    //Populating the Options div with the buttons
    // options.forEach((opt)=>{   before it was only options.forwach this will iterate to option

    shuffleOptionContains.forEach((opt) => {  //this will iterate over shuffle options array which is returned form shuffleOptions Function
        const btn = document.createElement('button');
        btn.textContent = opt;
        optionEl.appendChild(btn);

        //Event handling on the all buttons
        btn.addEventListener("click", () => {
            if (opt === correctAnswer) {
                score++;
                optionEl.textContent = '';//here i have written the logic if answer is right remove the options so that new options is added
                scoreEl.textContent = `Score:${score}/${totalQues}`;  //to show score on every answer 

            } else {
                score = score - 0.25;
                optionEl.textContent = '';  // for vevery wrong answer it will keep the option and add other 4 option below
                //here i have written the logic if naswer is wrong remove the options so that new options is added

            }
            console.log(score); //for checking debugging
            currentQues++; //for moving to next index of array of object

            nextQues()
            // if()
            // scoreEl.textContent = `Score:${score}`;  //this will print socre in  webpage

            // //the below is for when the quiz is completed(marked with answer) it will write quiz over in place of the question div
            // questionEl.textContent = 'Quiz Completed'

            // //and afeter quiz over the option is still there ,for that empty the option using ''
            // optionEl.textContent = ''

        })
    })


}


function nextQues(){
    if(currentQues==(totalQues)){
        scoreEl.textContent = `Score:${score}/${totalQues}`;
        questionEl.textContent = 'Quiz Completed';
        optionEl.textContent = '';
    }
    else{
        showQuestion()
    }
}


function shuffleOption(options) {
    for (let i = options.length - 1; i >= 0; i--) {   //this loop will start form last element

        const j = Math.floor(Math.random() * i); //semicolon important try removing it will give error that j is not initialized and cannot be used

        [options[i], options[j]] = [options[j], options[i]]

        // console.log(options)  for debugging but to use somewhere else we need to return it
        return options

    }
}
// shuffleOption([1,2,3,4])