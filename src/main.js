const postsEl = document.querySelector('#posts');
const API_URL = "https://bijjidesjxhsywmdfczi.supabase.co"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpamppZGVzanhoc3l3bWRmY3ppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3NzIyNTYsImV4cCI6MjA0MjM0ODI1Nn0.JsxjgpNBhh-OndUDWIP-K1TUpYbtBClrK_tsUk9nXVA"


fetch(`${API_URL}/blog_posts?select=*&apikey=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        data.forEach(item => showPostsWebView(item))
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
                        </div>
                    </div>
                </div>
    `
    postsEl.appendChild(div)
}

