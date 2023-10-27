// ScrollLock
let ScrolLock = document.getElementsByClassName("ScrolLock")[0];
let FirstLED = document.getElementsByClassName("FirstLED")[0];
let SecondLED = document.getElementsByClassName("SecondLED")[0];
let ThirsLED = document.getElementsByClassName("ThirsLED")[0];
let ruleOne = false;
ScrolLock.addEventListener("click",() => {
    if(ruleOne === false){
        ThirsLED.style = "color: #5791cf;box-shadow: 0px 0px 30px 5px #538dcc;border-radius: 1000%;"
        ruleOne = true;
    }else{
        ThirsLED.style = "color: gray;box-shadow: 0px 0px transparent;"
         ruleOne = false;
    }
})
let CapsLock = document.getElementsByClassName("CapsLock")[0];
let RuleTwo = false;
CapsLock.addEventListener("click", ()=> {
    if(RuleTwo === false){
        SecondLED.style = "color: #5791cf;box-shadow: 0px 0px 30px 5px #538dcc;border-radius: 1000%;"
        RuleTwo = true;
    }else{
        SecondLED.style = "color: gray;box-shadow: 0px 0px transparent;"
        RuleTwo = false;
    }
})
let NumLock = document.getElementsByClassName("NumLock")[0];
let RuleThree = false;
NumLock.addEventListener("click",()=> {
    if(RuleThree === false){
        FirstLED.style = "color: #5791cf;box-shadow: 0px 0px 30px 5px #538dcc;border-radius: 1000%;"
        RuleThree = true;
    }else{
        FirstLED.style = "color: gray;box-shadow: 0px 0px transparent;"
        RuleThree = false;
    }
})