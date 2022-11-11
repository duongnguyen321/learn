let container = document.querySelector('.container')
let pagi = document.querySelector('.pagi')

fetch('https://jsonplaceholder.typicode.com/posts?_embed=comments')
    .then(response => response.json())
    .then(data => {
        pagination(data)
        render10Titles(data.slice(0,10))

        pagi.addEventListener('click', function(event) {
            let page = Number(event.target.innerHTML)
            if (page) {
                render10Titles(data.slice(page * 10 - 10, page * 10))
            }
        })

        container.addEventListener('click', function(event) {
            let postId = event.target.id
            if (postId) {
                let post = data.filter(x => x.id == postId)[0]
                renderOnePost(post)
            }
        })     
    })
    .catch(error => console.log(error))

function render10Titles(arr) {
    container.innerHTML = ""
    for (let user of arr) {
        let titleDiv = `<div><a id="${user.id}" href="/details.html?postid=${user.id}"><span class="id-post">${user.id}</span>${user.title}</a></div>`
        container.innerHTML += titleDiv
    }
    $( "a" ).click(function( event ) {
        event.preventDefault();
    });
}

function pagination(arr) {
    let numberPagi = Math.ceil(arr.length / 10)
    for (let i = 1; i <= numberPagi; i++) {
        let buttonPagi = `<button>${i}</button>`
        pagi.innerHTML += buttonPagi
    }
}

function renderOnePost(post) {
    container.innerHTML = ""
    let divPost = `<div>
    <h3><span class="blue">Title Post ${post.id}:</span> ${post.title}</h3>
    <div class="body-post"><span class="blue">Body:</span> ${post.body}</div>
    <div class="comments-post"><span class="blue">Comments:</span> ${post.comments}</div>
    </div>`
    container.innerHTML += divPost
}




