let data = [
    { id: 1, name: 'A', email: 'a@gmail.com', phoneNumber: '0981982987', address: 'Hà Nội', gender: 'Nam' },
    { id: 2, name: 'B', email: 'b@gmail.com', phoneNumber: '0981982987', address: 'Hà Nội', gender: 'Nam' },
]

let idGlobal = 3;
let indexUpdateGlobal = null;

let inputName = document.getElementById('form_name');
let inputEmail = document.getElementById('form_email');
let inputPhoneNumber = document.getElementById('form_phoneNumber');
let inputAddress = document.getElementById('form_address');
let inputNam = document.getElementById('form_nam');
let inputNu = document.getElementById('form_nu');

function drawTable(search = data) {
    let string = '';
    for (i = 0; i < search.length; i++) {
        let element = search[i]
        string = `${string}<tr>
                    <td>${element.id}</td>
                    <td>${element.name}</td>
                    <td>${element.email}</td>
                    <td>${element.phoneNumber}</td>
                    <td>${element.address}</td>
                    <td>${element.gender}</td>
                    <td>
                        <button id="btn_edit" onclick="toggleForm(${element.id})">Edit</button>
                        <button id="btn_delete" onclick="deleteData()">Delete</button>
                    </td>
                </tr>`
    }

    document.getElementById('table_body').innerHTML = string;
};

drawTable();

function toggleForm(id) {
    document.getElementById("form_info").classList.toggle("form_info")

    // nếu có truyền id để sửa, nếu không mở nhập mới
    if (id != undefined) {
        let indexUpdate = data.findIndex(e => e.id == id)
        indexUpdateGlobal = indexUpdate
        // gán gia trị của từng trường vào từng ô input tương ứng, hình ảnh thì tạm thời chưa làm
        inputName.value = data[indexUpdate].name
        inputEmail.value = data[indexUpdate].email
        inputPhoneNumber.value = data[indexUpdate].phoneNumber
        inputAddress.value = data[indexUpdate].address
        if (data[indexUpdate].gender === 'Nam') {
            inputNam.checked == true;
        }
        else if (data[indexUpdate].gender === 'Nữ') {
            inputNu.checked == true;
        }
    } else {
        indexUpdateGlobal = null
        document.getElementById("form").reset()
    }
}



document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault()

    if (indexUpdateGlobal != null) {

        data[indexUpdateGlobal].name = inputName.value
        data[indexUpdateGlobal].email = inputEmail.value
        data[indexUpdateGlobal].phoneNumber = inputPhoneNumber.value
        data[indexUpdateGlobal].address = inputAddress.value
        data[indexUpdateGlobal].gender = inputNam.checked ? 'Nam' : 'Nữ'
        indexUpdateGlobal = null
        this.reset()
        toggleForm()
        drawTable()
        return
    }

    // tạo mới nếu không có id
    const product = {
        id: idGlobal,
        name: inputName.value,
        email: inputEmail.value,
        phoneNumber: inputPhoneNumber.value,
        address: inputAddress.value,
        gender: inputNam.checked ? 'Nam' : 'Nữ'
    }

    idGlobal++
    data.push(product)

    this.reset()
    toggleForm()
    drawTable()
})

//xóa phần tử trong bảng
function deleteData(idDelete) {
    let check = confirm('bạn có chắc chắn muốn xóa?')
    if (check) {
        let indexDelete = data.findIndex((value) => { value.id == idDelete })
        data.splice(indexDelete, 1)
        drawTable();
    }
}

// tìm kiếm theo tên
function searchName() {
    let inputSearch = document.getElementById('input_find').value
    let foundData = data.filter(stu => stu.name.toLowerCase().includes(inputSearch.trim().toLowerCase()));
    drawTable(foundData);
}


//sắp xếp theo thứ tự anpha b
function arrange() {
    data.sort((a, b) => a.name.localeCompare(b.name));
    drawTable();
}