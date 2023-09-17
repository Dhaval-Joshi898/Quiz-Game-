const questionObj = 
    {
      correctAnswer: 'Three ',
      options: ['Two', 'Three ', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    };
    // Destructuring the object
    const{correctAnswer, options, question}=questionObj;

    let score=0;

    //Accessing all the elements:
    const questionEl = document.getElementById("question");
    const optionEl = document.getElementById("options");
    const scoreEl = document.getElementById("score");

    //Manipulating the DOM:
    //Setting question text content
    questionEl.textContent = question; // directly accessing 'question' due to destructuring.

    //Populating the Options div with the buttons.
    options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        optionEl.appendChild(btn);

    // Event handling on the button:
    btn.addEventListener("click", () => {
        if(opt === correctAnswer){
            score++;
        }
        else{
            score=score-0.25;
        }
    console.log(score);
    scoreEl.textContent = `Score: ${score}`;
    questionEl.textContent = 'Quiz Completed!!';
    optionEl.textContent = '';
        });
    });

