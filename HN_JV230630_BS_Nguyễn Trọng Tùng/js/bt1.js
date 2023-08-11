// Bài 1: Cho 1 mảng các phần tử in ra phần tử lớn nhất trong mảng
// ● Đầu vào: 1 mảng
// ● Đầu ra: giá trị lớn nhất của mảng


//cách 1
let arr = [3, 5, 88, 99, 76, 8, 4, 5, 85, 63];
let findMax = Math.max(...arr);
console.log(findMax);

// cách 2
let max = 0;
for (i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i]
    }
}

console.log(max);
