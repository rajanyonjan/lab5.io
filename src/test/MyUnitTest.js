const CustomAdd = (a,b)=> {
    return a+b;
};

const testCases=[
    { input: [2,3], expectedOutput: 5},
    { input: [0,0], expectedOutput: 0},
    { input: [-1,4], expectedOutput: 3},
];

//Run Tests
testCases.forEach((testCases) => {
    const result = CustomAdd(testCases.input[0], testCases.input[1]);

    if(result === testCases.expectedOutput){
        console.log(`Test passed: $(testCase.input) added correctly`);
    }else{
        console.error(
            `Test failed: Expected $(testCase.expectedOutput),got $(result)`
        );
    }

});