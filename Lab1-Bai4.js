fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
 .then((response) => {
   if (response.ok) {
     return response.json();
   } else {
     throw new Error("Lỗi kết nối mạng");
   }
 })
 .then((data) => {
   const populationData = data.data;
   const container = document.getElementById("populationContainer");

   populationData.forEach((item) => {
     const div = document.createElement("div");
     div.innerHTML = `Quốc gia: ${item.Nation}, Dân số: ${item.Population}`;
     container.appendChild(div);
   });
 })
 .catch((error) => console.error("Lỗi fetch:", error));



 fetch("https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students")
 .then((response) => {
   if (response.ok) {
     return response.json();
   } else {
     throw new Error("LỖI KHI LẤY DỮ LIỆU");
   }
 })
 .then(data => {
   displayStudentData(data);
 })
 .catch((error) => console.error("LỖI FETCH:", error));

function displayStudentData(data) {
 const studentDataDiv = document.getElementById("studentData");
 data.forEach(student => {
   const studentElement = document.createElement("p");
   studentElement.innerText = `Tên: ${student.ten}, Tuổi: ${student.tuoi}`;
   studentDataDiv.appendChild(studentElement);
 });
}
