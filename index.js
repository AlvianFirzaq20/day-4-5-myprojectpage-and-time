let emailReceiver = "firzaqdpalvian20@gmail.com";
let emailReceiverCC = "alfianfirzaq50@gmail.com";
function submitForm() {
  let isError = false;

  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let no = document.getElementById("input-phone").value;
  let subject = document.getElementById("choose-object").value;
  let message = document.getElementById("input-message").value;

  //Mengecek di Inspect terdapat/tidak element yang dibuat//

   console.log(name);
   console.log(email);
   console.log(no);
   console.log(subject);
   console.log(message);

  if (name == "") {
    alert("Please Enter Your Name!");
    isError = true;
  }
  if (email == "") {
    alert("Please Enter Your Email!");
    isError = true;
  }
  if (no == "") {
    alert("Please Enter Your No!");
    isError = true;
  }
  if (message == "") {
    alert("Please Enter Your Message!"); isError = true;
  }
  if (!isError) {
    let a = document.createElement("a");
    a.href = `mailto:${emailReceiver}?cc=${emailReceiverCC}&subject=${subject}&body=Hay, my name ${name}, ${subject}, ${message}`;
    a.click();
  }
  let dataObj = {
    name: name,
    email: email,
    nohp: no,
    subject: subject,
    message: message,
  }
}
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
let dataProject=[];
function addproject(){

  // console.log(document.getElementsByName("techno"));

    dataProject.push({
        title:document.getElementById("pname").value,
        image:URL.createObjectURL(document.getElementById("getFile").files[0]),
        autor:"Alvian Firzaq",
        duration:((new Date(document.getElementById('edate').value))-(new Date(document.getElementById('sdate').value)))/day,
        content:document.getElementById("descrip").value,
        techno: Array.from(document.querySelectorAll('input[name="techno"]:checked')).map(element=>element.id)
    });

    // console.log(dataProject);
    renderPage();
}
function renderPage(){
  console.log(dataProject);
    let blogContainer = document.getElementById('list-card');

    blogContainer.innerHTML = '';
    console.log(dataProject)

    dataProject.forEach((data,index)=>{
        blogContainer.innerHTML+=`
        <div class="card">
        <a href="detailproject.html?index=0" style="text-decoration:none">
                <div style="max-height: 200px; overflow: hidden; border-radius: 15px;"> <img width="100%"
                        src="${data.image}"></img></div>

                <h4>${data.title}</h4>
                <h6>durasi ${data.duration} hari</h6>
                <p> ${data.content}
                </p>
                <div class="logo">
                    ${data.techno.map(element=>`<i class="${element}"></i>`)}
                </div>
                <div style=" display: flex;">
                <button onclick="edit(${index})" class="butom-action" style="margin-right: 10px;">Edit</button>
                <button onclick="hapus(${index})" class="butom-action">Hapus</button>
                </div>
                </a>
            </div>
        
    `
    })
  
}
function edit(index){
console.log(index);
}

function hapus(index){
    console.log(index);
}
function picture(event){
  document.getElementById('getFile').click()
}
 let forms= document.getElementById("addprojectform");
  console.log(forms);
 forms.addEventListener("submit", function(event) {
  // console.log(event);
  event.preventDefault();
});
  