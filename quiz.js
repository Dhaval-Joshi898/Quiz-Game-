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
console.log(options)

// const questionDiv=document.getElementById('question')
const questionEl=document.getElementById('question')
questionEl.textContent=question 

// questionDiv.innerHTML='<h1>' + questionObj.question + '</h1>';
