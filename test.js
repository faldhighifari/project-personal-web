let projects = []

function addProject() {

    let name = document.getElementById('input-name').value;
    let description = document.getElementById('input-description').value;
    let image = document.getElementById('input-project-image').files[0];

    image = URL.createObjectURL(image)

    let project = {
        name: name,
        description: description,
        image: image,
        author: 'Faldhi Ghifari',
        postedAt: new Date()
    }

    projects.push(project)

    renderProject()
}

function renderProject() {

    let projectContainer = document.getElementById('contents')

    for(let i = 0; i < projects.length; i++){
        projectContainer.innerHTML += `<div class="blog-list-item">
        <div class="blog-image">
          <img src="${projects[i].image}" alt="" />
        </div>
        <div class="blog-content">
          <div class="btn-group">
            <a href="#" class="btn-edit">Edit Post</a>
            <a href="#" class="btn-post">Delete Blog</a>
          </div>
          <h1>
            <a href="blog-detail.html" target="_blank">${projects[i].name}</a>
          </h1>
          <div class="detail-blog-content">
            ${projects[i].postedAt} | ${projects[i].author} 
          </div>
          <p>${projects[i].description} </p>
        </div>
      </div>`
    }
}

