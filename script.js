// ======================
// REGISTER
// ======================
function register(){

    let username = document.getElementById("regUsername").value;
    let password = document.getElementById("regPassword").value;
    let email=document.getElementById("regEmail").value;
    let confirm=document.getElementById("confirm").value;

    if(username === "" || password === ""){
        alert("Please fill all fields");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // check if user already exists
    let userExists = users.find(user => user.username === username);

    if(userExists){
        alert("Username already exists");
        return;
    }

    users.push({
        username: username,
        email:email,
        confirm:confirm,
        password 
        
    });

    localStorage.setItem("users", JSON.stringify(users));

    // auto login after register
    localStorage.setItem("loggedInUser", username);

    // go to dashboard directly
    window.location.href = "dashboard.html";
}


// ======================
// LOGIN
// ======================
function login(){

    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let validUser = users.find(user => 
        user.username === username && user.password === password
    );

    if(validUser){
        localStorage.setItem("loggedInUser", username);
        window.location.href = "dashboard.html";
    }else{
        alert("Invalid username or password");
    }
}


// ======================
// DASHBOARD PROTECTION
// ======================
window.onload = function(){

    let currentUser = localStorage.getItem("loggedInUser");

    // protect dashboard
    if(window.location.pathname.includes("dashboard.html")){

        if(!currentUser){
            window.location.href = "login.html";
        }else{
            document.getElementById("welcomeUser").innerText =
                "Welcome " + currentUser;
        }
    }
}


// ======================
// LOGOUT
// ======================
function logout(){
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}
