const form = document.querySelector("#fForm");
    
    async function
        sendData(formData) {
    console.log(formData);
    try {

        const response = await

            fetch("http://127.0.0.1:8086/get/feedback", {

                method: "POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(formData)
            });
            console.log(response.status);
        alert(await response.json());
        if(response.status ===  201){
            window.location.href ="http://127.0.0.1:8080/Home.html"
        }
        // obj = response.json();
        // console.log(obj);
        // alert(`registration successfull thanks}`)

    } catch (err) {

        console.log(err);

    }
       // window.location.href ="../confirmation.html"
    }


    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let name = document.getElementById("uname").value
    
        let email = document.getElementById("email").value
    
        let phoneNo = document.getElementById("phone").value
    
        let sat = document.getElementById("yes").value
    
        let feedback = document.getElementById("msg").value

        let satisfaction = "No"
        if(sat === "yes"){
            satisfaction = sat;
        }
     
        const formData = {
            name: name,
    
            email:email,
    
            phoneNo: phoneNo,
    
            satisfaction:satisfaction,
    
            feedback:feedback,
        }
        sendData(formData);
    });
    