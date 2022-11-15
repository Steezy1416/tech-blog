async function commentFormHandler(event){
    event.preventDefault()

    console.log(event)
    const comment_text = document.querySelector('textarea[name="comment-input"]').value.trim()

    const post = document.querySelector(".post")

    const post_id = parseInt(post.getAttribute("data-post_id"))
    
    const user_id = 3

    console.log(post_id)

    if(comment_text){
        console.log(post)
        console.log(comment_text)
        console.log(post_id)
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

document.querySelector(".post-comment").addEventListener("submit", commentFormHandler)