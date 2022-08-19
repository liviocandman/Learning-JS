function evenOddValues(nums) {
    if(typeof nums !== 'object') return "Parâmetro inválido"
    
    let evenNums = [];
    let oddNums =[];

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 === 0) {
            evenNums.push(nums[i]);
        } else {
            oddNums.push(nums[i]);
        }
    }
    return `Os números pares são: [${evenNums}]. 
Os números ímpares são: [${oddNums}].`
}

let nums = [1, 2, 3, 4, 5 , 6, 7, 8, 12, 16, 17, 24, 27, 42, 47, 59, 76, 83];

console.log(evenOddValues(nums));
