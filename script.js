'use script';

//  console.log(document.querySelector('.message').textContent);
//  document.querySelector('.message').textContent = '🎉correct Number!';
//  console.log(document.querySelector('.message').textContent);
 
//  document.querySelector('.number').textContent = 13;
//  document.querySelector('.score').textContent = 10;

//  document.querySelector('.guess').value = 23;
//  console.log(document.querySelector('.guess').value);
let score= 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random()*20) + 1;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function(){
   const guess= Number(document.querySelector('.guess').value);
   console.log(guess);
   
//    when there is no input
   if(!guess){
    //    document.querySelector('.message').textContent = '⛔ no number';
    displayMessage('⛔ no number');
//  when number is correct  
   }else if(guess === secretNumber ){
       displayMessage('🎉correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor ='#60b347';
        document.querySelector('.number').style.width ='30rem'

        if(score >highscore){
           highscore =score;
           document.querySelector('.highscore').textContent = highscore;
        }
    }else if( guess != secretNumber){
      if(score > 1){
        //   document.querySelector('.message').textContent = 
        //   guess > secretNumber ? '📈 too high': '📉 too low';
        displayMessage(guess > secretNumber ? '📈 too high': '📉 too low');
          score--;
          document.querySelector('.score').textContent = score;
      }else{
        displayMessage('💥 You lost game!');
        document.querySelector('.score').textContent ='0';
        document.querySelector('body').style.backgroundColor ='red';
      }
    } 
});
    
document.querySelector('.again').addEventListener('click',function(){
   score = 20;
   secretNumber = Math.trunc(Math.random()*20) + 1;

   displayMessage('🤔Start guessing...')
   document.querySelector('.score').textContent ='score';
   document.querySelector('.number').textContent ='?';
   document.querySelector('.guess').value ='';

   document.querySelector('body').style.backgroundColor ='#222';
        document.querySelector('.number').style.width ='15rem'
});
    




