async function signupHandler(event) {
    event.preventDefault()

    username_signup = document.querySelector(".username-signup").value.trim()
    password_signup = document.querySelector(".password-signup").value.trim()

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
            document.location.replace("/")
        }
        else{
            alert(response.statusText)
        }
    }
}

const toLogIn = () => {
    document.querySelector(".signup").classList.remove("hide")
    document.querySelector(".login").classList.add("hide")
}

const toSignUp = () => {
    document.querySelector(".login").classList.remove("hide")
    document.querySelector(".signup").classList.add("hide")
}
