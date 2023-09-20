const questionObj = 
    {
      category: 'Food & Drink',
      id: 'qa-1',
      correctAnswer: 'Three',     
      options: ['Two', 'Three', 'Four', 'Five'],   //before here it was inside array 'Three ' with extra space and in answer it was three with no extra space asfter that why is was giving -0.25 whike clicking on correct ans
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    };
//we need this object everytime so lets destructure ,this will helo us in not using questionObj.otions or answers
const {correctAnswer,options,question}=questionObj;

let score=0;

// console.log(options)
// console.log(correctAnswer)

// const questionDiv=document.getElementById('question')
const questionEl=document.getElementById('question');
// for option div
const optionEl=document.getElementById('options'); //fetch option div 

const scoreEl=document.getElementById('score'); //fetch score div

//MAnipulating DOM
questionEl.textContent=question;

const shuffleOptionContains=shuffleOption(options)

//Populating the Options div with the buttons
// options.forEach((opt)=>{   before it was only options.forwach this will iterate to option

shuffleOptionContains.forEach((opt)=>{  //this will iterate over shuffle options array which is returned form shuffleOptions Function
  const btn=document.createElement('button');
  btn.textContent=opt;
  optionEl.appendChild(btn);

  //Event handling on the all buttons
btn.addEventListener("click",()=>{
    if(opt === correctAnswer){
      score++;
      
    }else{
      score=score-0.25;
      
    }
    console.log(score); //for checking debugging
    scoreEl.textContent=`Score:${score}`;  //this will print socre in  webpage

    //the below is for when the quiz is completed(marked with answer) it will write quiz over in place of the question div
    questionEl.textContent='Quiz Completed'

    //and afeter quiz over the option is still there ,for that empty the option using ''
    optionEl.textContent=''

  })
})
//Shuffling the options

/* Below is the logic of shuffle option using ARRAY DESTRUCTURING */
// function shuffleOption(options){  //this options parameter, it should take  array

//   [options[3],options[1]]=[options[1],options[3]] // Ihave used array destructuring fot shuffing the option .But at time it can only replace two option

//   console.log(options)

// }

function shuffleOption(options){
  for(let i=options.length-1; i>=0 ; i--){   //this loop will start form last element

    const j =Math.floor(Math.random()*i); //semicolon important try removing it will give error that j is not initialized and cannot be used

    [options[i],options[j]]=[options[j],options[i]]

    // console.log(options)  for debugging but to use somewhere else we need to return it
    return options

  }
}
// shuffleOption([1,2,3,4])