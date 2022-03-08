let blogs = []

function addBlog() {

    let title = document.getElementById('input-blog-title').value;
    let content = document.getElementById('input-blog-content').value;
    let image = document.getElementById('input-blog-image').files[0];
    let start = document.getElementById('input-start-date').value;
    let end = document.getElementById('input-end-date').value;

    image = URL.createObjectURL(image)

    let blog = {
        title: title,
        content: content,
        image: image,
        start: start,
        end: end,
    }

    blogs.push(blog)

    renderBlog()
}

function renderBlog() {

    let blogContainer = document.getElementById('contents')

    for(let i = 0; i < blogs.length; i++){
        blogContainer.innerHTML += `<div class="blog-list-item">
        <div class="blog-image">
          <img src="${blogs[i].image}" alt="" />
        </div>
        <div class="blog-content">
          
          <h1>
            <a href="blog-detail.html" target="_blank">${blogs[i].title}</a>
          </h1>
          <div class="detail-blog-content">
            <p>duration</p> ${blogs[i].start} | ${blogs[i].end} 
          </div>
          <p>${blogs[i].content} </p>
          <div class="btn-group">
            <a href="#" class="btn-edit">Edit</a>
            <a href="#" class="btn-delete">Delete</a>
          </div>
        </div>
      </div>`
    }
}

