import {getPosts} from "./posts.js";
import "./styles.css"
const postsEl = document.querySelector("#posts_blog");
console.log(postsEl);

getPosts()
    .then(data => {
        data.forEach(item => showPostsWebView(item))
        console.log(postsEl);
    })


// **Minimum Viable Solution**, MVS (i.e.: the simplest "correct" thing that solves the problem)
// When I click the delete button
// I want it to log "this works, with the ID" in the console of my browser

function showPostsWebView(item = {}) {

    const div = document.createElement("div");
    div.innerHTML = `
            <div class="card bg-base-100 shadow-xl">
<div class="card-body">
                        <h3 class="card-title">${item['title']}</h3>
                        <p class="text-gray-600">Published on: ${item['publishedOn']} by ${item['publishedBy']}</p>
                        <p>${item['content']}</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Read More</button>
                            <button class="btn btn-error" onClick="handleDelete(${item['id']})">delete</button>
                        </div>
                    </div>
                </div>
    `
    postsEl.appendChild(div)
    console.log(postsEl);
}

