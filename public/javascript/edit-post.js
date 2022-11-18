async function editPost(event) {
    event.preventDefault()

    const title = document.querySelector(".edit-title").value.trim()

    const description = document.querySelector(".edit-post-description").value.trim()

    const post_id = parseInt(window.location.toString().split("/")[5])

    console.log(title, description, post_id)

    if(title && description){
        const response = await fetch(`/api/posts/${post_id}`, {
            method: "PUT",
            body: JSON.stringify({
                title,
                description,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if(response.ok){
            document.location.replace("/dashboard")
        }
        return
    }
    else if (title && !description){
        const response = await fetch(`/api/posts/${post_id}`, {
            method: "PUT",
            body: JSON.stringify({
                title,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if(response.ok){
            document.location.replace("/dashboard")
        }
        return
    }
    else {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: "PUT",
            body: JSON.stringify({
                description
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if(response.ok){
            document.location.replace("/dashboard")
        }
        return
    }

}

async function deletePost(){
    const post_id = parseInt(window.location.toString().split("/")[5])

    const response = await fetch(`/api/posts/${post_id}`, {
        method: "DELETE"
    })

    if(response.ok){
        document.location.replace("/dashboard")
    }
}