//allows the user to sign up
async function signupHandler(event) {
    event.preventDefault()

    username_signup = document.querySelector(".username-signup").value.trim()
    password_signup = document.querySelector(".password-signup").value.trim()

    //will only sign up user once both forms have been filled
    if(username_signup && password_signup){
        const response = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({
                username: username_signup,
                password: password_signup
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if(response.ok){
            document.location.reload()
        }
        else{
            alert(response.statusText)
        }
    }
}

//allows the user to log in
async function loginHandler(event) {
    event.preventDefault()

    username_login = document.querySelector(".username-login").value.trim()
    password_login = document.querySelector(".password-login").value.trim()

    if(username_login && password_login){
        const response = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({
                username: username_login,
                password: password_login
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if(response.ok){
            document.location.reload()
            document.location.replace("/")
        }
        else{
            alert(response.statusText)
        }
    }
}

//if user has account this switches to log in form
const toLogIn = () => {
    document.querySelector(".signup").classList.remove("hide")
    document.querySelector(".login").classList.add("hide")
}
// if user does not have account this switches to sign up form
const toSignUp = () => {
    document.querySelector(".login").classList.remove("hide")
    document.querySelector(".signup").classList.add("hide")
}
