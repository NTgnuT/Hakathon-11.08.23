// Bài 2 : Viết 1 chương trình chuẩn hóa một câu: loại bỏ các
// khoảng trắng(space) ở đầu và cuối câu, các từ cách nhau 1
// khoảng trắng(space), ký tự đầu ở mỗi từ viết hoa, các ký tự khác
// trong từ viết thường
// ● Đầu vào: Câu là một chuỗi các ký tự
// ● Đầu ra: In ra chuỗi đã được chuẩn hóa.

let str = " this is A tEst ";


function capitalize(str) {
    let change = str.trim().toLowerCase().split(' ');
    for (i = 0; i < change.length; i++) {
        let chuoi = change[i].split("")

        chuoi[0] = chuoi[0].toUpperCase()

        change[i] = chuoi.join("")
    }
    return change.join(" ")
}


console.log(capitalize(str));

