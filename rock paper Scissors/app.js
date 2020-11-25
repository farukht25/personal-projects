const app=()=>
{
  let hscore=0;
  let cscore=0;
  const players_choices=document.querySelectorAll('.buttons button')
  players_choices.forEach(players_choice=>{
    players_choice.addEventListener("click", function(){
      let player=players_choice.textContent;
      let comp=computerchoice();
      ////change img here
      document.querySelector('.player-image').src=`img/${player}.png`
      document.querySelector('.computer-image').src=`img/${comp}.png`
      ////check choices here
      console.log(player+comp);
      compare(player,comp);
      
    });
  });

  const computerchoice=()=>{
    const array=['Rock','Paper','Scissor']
    //console.log(Math.floor(Math.random() * 3));
    return array[Math.floor(Math.random() * 3)]
    
  }

  //////reset and restart
  const reset=()=>{
    hscore=0;
    cscore=0;
    document.querySelector('.result h3').textContent="";
    document.querySelector('.human p').textContent=hscore;
    document.querySelector('.computer p').textContent=cscore;

  }
  ////play again screen
  const playAgain=()=>
  {
    document.querySelector('.game').style.opacity=0;
        document.querySelector('.game').style.pointerEvents="none";
        document.querySelector('.play-again').style.opacity=1;
        document.querySelector('.play-again').style.pointerEvents="all";

        ////play again
        document.querySelector('.play-again button').addEventListener('click',function(){
          document.querySelector('.game').style.opacity=1;
          document.querySelector('.game').style.pointerEvents="all";
          document.querySelector('.play-again').style.opacity=0;
          document.querySelector('.play-again').style.pointerEvents="none";
        });
  }
  ////update
  const updateScore=()=>{
    document.querySelector('.human p').textContent=hscore;
    document.querySelector('.computer p').textContent=cscore;
    ////restart
    if(hscore===10||cscore===10){
      if(hscore===10)
      {
        document.querySelector('.play-again h2').textContent="Human Wins!";
        playAgain();
        reset();
      }
      if(cscore===10)
      {
        playAgain();
        reset();
      }
      
      
    }
    return;

  }
  



  
  const compare=(player,comp)=>{
    //tie
    if(player===comp)
    {
      document.querySelector('.result h3').textContent="Its a tie";
      
      return;
    }
    //player rock
    if(player==='Rock')
    {
      if(comp==="Paper"){
        document.querySelector('.result h3').textContent="Computer Wins";
        cscore++;
        updateScore();

        //document.querySelector('.computer p').textContent=c.toString();

        

        return;
      }
      if(comp==="Scissor"){
        document.querySelector('.result h3').textContent="Player Wins";
        hscore++;
        updateScore();

        
        return;
      }


    }
    ///player paper
    if(player==='Paper')
    {
      if(comp==="Rock"){
        document.querySelector('.result h3').textContent="Player Wins";
        hscore++;
        updateScore();
        return;
      }
      if(comp==="Scissor"){
        document.querySelector('.result h3').textContent="Computer Wins";
        cscore++;
        updateScore();
        return;
      }
    }
    ///player scissor
    if(player==='Scissor')
    {
      if(comp==="Rock"){
        document.querySelector('.result h3').textContent="Computer Wins";
        cscore++;
        updateScore();
        return;
      }
      if(comp==="Paper"){
        document.querySelector('.result h3').textContent="Player Wins";
        hscore++;
        updateScore();
        return;
      }
    }
  }
  

}
app();
