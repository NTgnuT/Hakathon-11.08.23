// Bài 3 : Viết một chương trình nhập vào tháng và năm
// và in ra số ngày của tháng đó[30 điểm]
// ● Đầu vào: nhập tháng 8 năm 2023
// ● Đầu ra: số ngày trong tháng đó là 31

let month = Number(prompt('Nhập vào tháng'));
let year = Number(prompt('Nhập vào năm'));

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(`Tháng ${month} năm ${year} có 31 ngày`);
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(`Tháng ${month} năm ${year} có 30 ngày`);
        break;
    case 2:
        if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
            console.log(`Tháng ${month} năm ${year} có 29 ngày`);
        } else {
            console.log(`Tháng ${month} năm ${year} có 28 ngày`);
        }
        break;
    default:
        console.log('Không có tháng bạn vừa nhập vào');
        break;
}