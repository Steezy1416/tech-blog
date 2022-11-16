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
