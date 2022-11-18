//allows user to create post
async function createPost() {
    const title = document.querySelector(".new-title").value.trim()
    const description = document.querySelector(".post-description").value.trim()
    const user_id = document.querySelector(".new-post").getAttribute("data-user_id")

    console.log(title)
    console.log(description)
    console.log(user_id)

    const response = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
            title,
            description,
            user_id
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