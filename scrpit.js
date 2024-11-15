// ฟังก์ชันสำหรับเพิ่มรายการงานใหม่
function addTask(){
    
    let text = document.getElementById("todo").value
    
    // ตรวจสอบว่า input ไม่ว่างเปล่า
    if (text !== '') {
        let result = document.getElementById("results");

            // สร้างรายการงานใหม่
            let newElement = document.createElement("p");
            newElement.innerHTML = text ;// or  newElement.innerHTML = document.getElementById("todo").value 
             // เพิ่มงานใหม่ไปที่รายการ
            result.appendChild(newElement);

            // สร้างปุ่มสำหรับลบรายการ
            let Remove =document.createElement("button");
            Remove.innerHTML = "Delete"
            Remove.onclick = function(){
                result.removeChild(newElement);
            }
            // เพิ่มปุ่มลบลงในรายการงาน
            newElement.appendChild(Remove)

            //ล้างข้อความในช่อง input หลังจากเพิ่ม
            document.getElementById("todo").value = ""
        }else{
            alert('Please enter a task!');
        }
}

