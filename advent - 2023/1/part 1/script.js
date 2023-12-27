const fileInput = document.getElementById('fileInput');
let valuesToRetrieve = [];

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            valuesToRetrieve = e.target.result.split('\n');
            valuesToRetrieve = valuesToRetrieve.filter(value => value.trim() !== '');

            // Measure start time
            const startTime = performance.now();

            console.log('Values from the file:', valuesToRetrieve);
            processValues();

            // Measure end time
            const endTime = performance.now();
            const executionTime = endTime - startTime;
            console.log('Execution time:', executionTime, 'milliseconds');
        };
        reader.readAsText(file);
    }
});

const valuesToCheck = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

function extractDigits(input) {
    const allDigits = input.map(value => {
        const matches = value.match(/\d/g);
        return matches ? matches.join('') : '';
    });
    return allDigits.filter(value => value !== '');
}

function processValues() {
    let totalSum = 0;
    let extractedValues = extractDigits(valuesToRetrieve);
    extractedValues.forEach(extractedValue => {
        if (extractedValue) {
            let firstNumber = parseInt(extractedValue[0]);
            let lastNumber = parseInt(extractedValue.slice(-1));
            let arr = parseInt([firstNumber, lastNumber].join(''));
            console.log("The numbers are:", arr);
            totalSum += arr;
        }
    });

    console.log('Total Sum:', totalSum);
}