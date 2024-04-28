// const form = document.querySelector("#PatientRegistration");
// // const confirMation = document.querySelector("#confirmation");
// // let data = "Enter Disease";//Global variable
// async function
//     sendData(formData) {
//         console.log("hi called successfully");
//     console.log(formData);
//     try {

//         const response = await

//             fetch("http://127.0.0.1:8086/user/register", {

//                 method: "POST",
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formData)
//             });
//       const  data = await response.json()
//         console.log(data);
//         // obj = response.json();
//         // console.log(obj);
//         // alert(`registration successfull thanks}`)
//         ;

//         if (response.status === 201) {

//             const Eresponse = await

//             fetch("http://127.0.0.1:8086/user/mail", {

//                 method: "POST",
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formData.email)
//             });
//           const  Edata = await Eresponse.json()
//           console.log(Edata);
//           if(Eresponse.status === 201){
//             localStorage.setItem(disease,data)
//             window.location.href = "http://127.0.0.1:8081/confirmation.html"
//             console.log(data);
//             data = data1
//             medicineHelp(data)
//         } else{
//             alert("Error in Sending Email")
//         }
//     }

//     } catch (err) {

//         console.log(err);

//     }

//     }
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     console.log("Event added");
//     let P_Name = document.getElementById("pname").value

//     let PF_Name = document.getElementById("pfname").value

//     let P_Age = document.getElementById("page").value

//     let P_gender = document.getElementById("gen").value

//     let P_disease = document.getElementById("disease").value

//     let No_of_Days = document.getElementById("nod").value

//     let P_Num = document.getElementById("pnum").value

//     let P_A_Num = document.getElementById("panum").value

//     let P_email = document.getElementById("pemail").value

//     let Paddress = document.getElementById("paddress").value

//     let P_pcode = document.getElementById("pcode").value

//     const formData = {
//         patient_name: P_Name,

//         fathers_name: PF_Name,

//         age: P_Age,

//         gender: P_gender,

//         disease: P_disease,

//         no_of_days: No_of_Days,

//         contactNo: P_Num,

//         Alternate_contactNo: P_A_Num,

//         email: P_email,

//         address: Paddress,

//         pincode: P_pcode,

//     }
//     sendData(formData);

// });

// 



/* *********************************************************************************************************** */
/* ------------------------------------------------------------------------------------------------------------ */

const form = document.querySelector("#PatientRegistration");
// export {data}; 
async function
sendData(formData) {
console.log(formData);  
try {

    const response = await

        fetch("http://127.0.0.1:8086/user/register", {

            method: "POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        });
    const data = await response.json()
    alert(data);

    ;

    if(response.status ===  201){
        window.location.href ="http://127.0.0.1:8080/Home.html"
    }

} catch (err) {

    console.log(err);

}


    // window.location.href ="../confirmation.html"
}

form.addEventListener("submit", (event) => {
event.preventDefault();
let P_Name = document.getElementById("pname").value

let PF_Name = document.getElementById("pfname").value

let P_Age = document.getElementById("page").value

let P_gender = document.getElementById("gen").value

let P_disease = document.getElementById("disease").value

let No_of_Days = document.getElementById("nod").value

let P_Num = document.getElementById("pnum").value

let P_A_Num = document.getElementById("panum").value

let P_email = document.getElementById("pemail").value

let Paddress = document.getElementById("paddress").value

let P_pcode = document.getElementById("pcode").value

 const formData = {
    patient_name: P_Name,

    fathers_name:PF_Name,

    age: P_Age,

    gender:P_gender,

    disease:P_disease,

    no_of_days: No_of_Days,

    contactNo: P_Num,

    Alternate_contactNo: P_A_Num,

    email: P_email,

    address: Paddress,

    pincode : P_pcode,

}
sendData(formData);

});         