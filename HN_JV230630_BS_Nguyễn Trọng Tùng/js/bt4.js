// Bài 4 : Viết một chương sắp xếp các phần tử trong mảng
// theo thứ tự giảm dần bằng 2 cách: sử
// dụng và không sử dụng hàm sort[30 điểm]
// ● Đầu vào: 1 mảng bất kỳ
// ● Đầu ra: Mảng mới với số đã được sắp xếp theo thứ tự giảm dần

let arr = [3, 25, 38, 49, 12];
//cách 1:
let newArr = arr.sort((a, b) => {
    return b - a
})
console.log(newArr);


// cách 2:

for (i = 0; i < arr.length; i++) {
    let c = 0;
    if (arr[i] < arr[i + 1]) {
        arr[i] = arr[i + 1];
        arr[i + 1] = c;
        c = arr[i];
    }
}
console.log(arr);

