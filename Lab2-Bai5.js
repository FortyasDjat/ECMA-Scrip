fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
 .then((response) => {
  if (!response.ok) {
    throw new Error("Lỗi kết nối mạng");
  }
  return response.json();
 })
 .then(({data}) => {
  const container = document.getElementById("populationContainer");

  data.forEach(({Nation, Population}) => {
    const div = document.createElement("div");
    div.innerHTML = `Quốc gia: ${Nation}, Dân số: ${Population}`;
    container.appendChild(div);
  });
 })
 .catch((error) => console.error("Lỗi fetch:", error));


 fetch("https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students")
 .then((response) => {
 if (!response.ok) {
   throw new Error("Lỗi khi lấy dữ liệu");
 }
 return response.json();
 })
 .then(displayStudentData)
 .catch((error) => console.error("Lỗi fetch:", error));

function displayStudentData(data) {
 const studentDataDiv = document.getElementById("studentData");
 data.forEach(({ten, tuoi}) => {
  const studentElement = document.createElement("p");
  studentElement.innerText = `Tên: ${ten}, Tuổi: ${tuoi}`;
  studentDataDiv.appendChild(studentElement);
 });
}
