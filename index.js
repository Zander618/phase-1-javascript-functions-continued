function saturdayFun(message = "roller-skate"){
    return (`This Saturday, I want to ${message}!`)
};

function mondayWork(activity = "go to the office"){
    return (`This Monday, I will ${activity}.`)
};

// it("when initialized with '*' creates a function that, when called, wraps an adjective in a highlight", function() {
//     let result = wrapAdjective('*')
//     let emphatic = result("a hard worker")
//     expect(emphatic).to.equal("You are *a hard worker*!")
//   });

//   it("when initialized with '||' creates a function that, when called, wraps an adjective in a highlight", function() {
//     let result = wrapAdjective("||")
//     let emphatic = result("a dedicated programmer")
//     expect(emphatic).to.equal("You are ||a dedicated programmer||!")


function wrapAdjective(init){
        return function (adjective) {
            return `You are ${init}${adjective}${init}!`
        };
};
