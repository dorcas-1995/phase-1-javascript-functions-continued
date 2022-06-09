// code your solution here
function saturdayFun(variable = "roller-skate") {
  return `This Saturday, I want to ${variable}!`;
}

function mondayWork(activity = "go to the office") {

    return `This Monday, I will ${activity}.`;
}

let funt = function wrapAdjective(special = "*"){

    return function(){

        return `you are ${special}` 
    }

}
