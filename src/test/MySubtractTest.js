const CustomAdd = (a,b)=> {
    return a-b;
};

const testCases=[
    { input: [2,1], expectedOutput: 2},
    { input: [0,0], expectedOutput: 0},
    { input: [-1,4], expectedOutput: -5},
];

//Run Tests
testCases.forEach((testCases) => {
    const result = CustomAdd(testCases.input[0], testCases.input[1]);

    if(result === testCases.expectedOutput){
        console.log(`Test passed: ${testCases.input} subtract correctly`);
    }else{
        console.error(
            `Test failed: Expected ${testCases.expectedOutput},got ${result}`
        );
    }

});