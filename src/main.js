import {getPosts} from "./posts.js";
import "./styles.css"
const postsEl = document.querySelector("#posts_blog");
console.log(postsEl);

getPosts()
    .then(data => {
        console.log(data)
        data.forEach(item => console.log(item));
        data.forEach(item => showPostsWebView(item))
        console.log(postsEl);
    })

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
                            <button class="btn btn-error">delete</button>
                        </div>
                    </div>
                </div>
    `
    postsEl.appendChild(div)
    console.log(postsEl);
}

