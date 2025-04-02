// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// sum_1st_row = 0
// for (let i =0 ; i<3;i++){
//     sum_1st_row += arr[0][i]
// }

// console.log(sum_1st_row);

let arr = [
    [3, 8, 12],
    [7, 1, 14],
    [2, 10, 6]
];

let max_value = 0;

for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
        if(arr[i][j]> max_value){
            max_value = arr[i][j];
        }
    }
}

console.log(max_value)
