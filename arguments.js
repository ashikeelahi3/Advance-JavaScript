function add(num1, num2){
    const totalInput = ([...arguments]);
    let sum = 0;

    for(let i = 0; i < totalInput.length; i++){
        const gettingNum =  totalInput[i];
        sum = sum + gettingNum;
    }
    return sum;
}
const result = add(2, 3, 5, 7);
console.log(result);