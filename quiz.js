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

//Populating the Options div with the buttons
options.forEach((opt)=>{  
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
 console.log(score);
    
  })
})
//-----------------------------------------------
