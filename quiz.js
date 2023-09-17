const questionObj = 
    {
      category: 'Food & Drink',
      id: 'qa-1',
      correctAnswer: 'Three',
      options: ['Two', 'Three ', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    };

//we need this object everytime so lets destructure ,this will helo us in not using questionObj.otions or answers

const {correctAnswer,options,question}=questionObj;
// console.log(options)

// const questionDiv=document.getElementById('question')
const questionEl=document.getElementById('question')


// for option div
const optionEl=document.getElementById('options'); //fetch option div 

const scoreEl=document.getElementById('score'); //fetch score div


//creating a button and adding the option inside button



//MAnipulating DOM
questionEl.textContent=question 

//Populating the Options div with the buttons

options.forEach((opt)=>{  //first it will contain opt1 then opt2
  const btn=document.createElement('button');
  btn.textContent=opt
  optionEl.appendChild(btn)
})