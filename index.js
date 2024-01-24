const totalword=["Hello my name ix XYZ and I am from Gorakhpur, My goal is to make such a great country, In which people live their life peacefully and happily with good thoughts.",
"I am currently a student and improving myself by learning skills, skill is very important for growing.",
"So with hardworking it is most important to do smart working, Main purpose is just to gain knowledge and be tilented So that not a single person can use you. ",
"You know what There is difference between hardworking and smart working, You should have power and money to do something good and most necessary Attitude. Because without these noone gonna listen and believe you.",
"Because many good things you can't do without money and power, So give your first priority to improve yourself so that you can do whatever you want in your life.",
"And listen one thing never use your power in wrong thing okay, I think you will be aware that almost all people using their power not properly.",
"Now it's your turn to show everybody that one good person can change this world with his/her good deeds, You are super tilented than you think, You can do whatever you want in your life.",
"Don't giveup,keep smiling, keep growing no matter what is your condition, in which situation you are, Go ahead."];
const userText=document.getElementById('usertxt')
const typeWhat=document.getElementById('typewhat');
const btns=document.getElementById('btn')
let stime,etime;
const startWrite=()=>{
    //totalnumber=no of totalword
  let randomNumber=Math.floor(Math.random()*totalword.length)
  typeWhat.innerHTML=totalword[randomNumber];
  let date=new Date();
  stime=date.getTime();
  btns.innerHTML="Done"
}
const stopTyping=()=>{
    let date=new Date();
    etime=date.getTime();
    let ttime=((etime-stime)/1000);
    let ttword=userText.value;
    let userwrite=Counttxt(ttword);
    let speed=Math.round((userwrite/ttime)*60);
    let res="You typed at "+speed+" words per minutes. ";
    res+=Compareword(typeWhat.innerHTML,ttword);
    typeWhat.innerHTML=res;
}
const Compareword=(str1,str2)=>{
    let word1=str1.split(" ");
    let word2=str2.split(" ");
    let count=0;
    word1.forEach(function(crrvalue,index){
        if(crrvalue==word2[index]){
            count++;
        }
    })
    let wrongword=word1.length-count;
    return( count+" correct out of "+word1.length+" words and total number of wrong words are "+wrongword+ ".");

}
//if there are space betwwen two word then that will be one word
const Counttxt=(word)=>{
  let response=word.split(" ").length
  return response;
}
//after clicking button active textarea if button is start
btns.addEventListener('click',function(){
    if(this.innerHTML=='Start'){
      userText.disabled=false;
      startWrite();  
    }else if(this.innerHTML=='Done'){
        userText.disabled=true;
        btns.innerHTML="Start";
        stopTyping();
    }
})


