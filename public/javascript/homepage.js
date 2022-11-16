async function commentFormHandler(event){
    event.preventDefault()

    const post_id = event.target.getAttribute("data-comment_id")
    const comment_text = document.querySelector(`#textarea-${post_id}`).value.trim()
    console.log(comment_text)
    
    const user_id = 3

    if(comment_text){
        const response = await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({
                post_id,
                comment_text,
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
}

function displayComments (event) {
    const post_id = event.target.getAttribute("data-icon")

    const commentBox = document.querySelector(`#comments-${post_id}`)

    if(commentBox.classList[1] === "hide"){
        commentBox.classList.remove("hide")
    }
    else{
        commentBox.classList.add("hide")
    }
}
