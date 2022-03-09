let blogs = []

function addBlog() {

    let title = document.getElementById('input-blog-title').value;
    let content = document.getElementById('input-blog-content').value;
    let image = document.getElementById('input-blog-image').files[0];
    let start = document.getElementById('input-start-date').value;
    let end = document.getElementById('input-end-date').value;

    console.log('awal :', start)
    console.log('akhir :', end)

    // let dis = new Date(end) - new Date(start);
    // console.log(dis)

    let nodejs = document.getElementById("tech1");
    let reactjs = document.getElementById("tech2");
    let nextjs = document.getElementById("tech3");
    let typescript = document.getElementById("tech4");
    
    let res = "";
    
      if (nodejs.checked == true){
        let pl1 = document.getElementById("tech1").value;
        res += '<img value="nodejs" id="tech1" src="assets/nodejs.svg" style = "width: 8%;" alt=""> '
      } 
      if (reactjs.checked == true){
        let pl2 = document.getElementById("tech2").value;
        res +='<img value="reactjs" id="tech2" src="assets/reactjs.svg" style = "width: 8%;" alt=""> '
      }
      if (nextjs.checked == true){
        let pl3 = document.getElementById("tech3").value;
        res += '<img value="nextjs" id="tech3" src="assets/nextjs.png" style = "width: 8%;" alt=""> '
      }
      if (typescript.checked == true){
        let pl4 = document.getElementById("tech4").value;
        res += '<img value="typescript" id="tech4" src="assets/typescript.png" style = "width: 8%;" alt="">'
      } 
    //   else {
    //     res = "You have not selected anything";}
      

    image = URL.createObjectURL(image)

    let blog = {
        title: title,
        content: content,
        image: image,
        start: start,
        end: end,
        tech: res,
    }

    blogs.push(blog)

    renderBlog()
}

function renderBlog() {

    let blogContainer = document.getElementById('contents')

    blogContainer.innerHTML = ""
    

    for(let i = 0; i < blogs.length; i++){
        blogContainer.innerHTML += `<div class="blog-list-item">
        <div class="blog-image">
          <img src="${blogs[i].image}" alt="" />
        </div>
        <div class="blog-content">
          
          <h2>
            <a href="blog-detail.html" target="_blank">${blogs[i].title}</a>
          </h2>
          <div class="detail-blog-content">
            <p>duration : ${getDistanceTime(blogs[i].start,blogs[i].end)} </p> 
          </div>
          <p>${blogs[i].content} </p>
          <p>${blogs[i].tech} </p>
          <div class="btn-group">
            <a href="#" class="btn-edit">Edit</a>
            <a href="#" class="btn-delete">Delete</a>
          </div>
        </div>
      </div>`
    }
}

function getDistanceTime(timeStart, timeEnd) {

  let timeOne =  new Date(timeStart)
  let timeTwo = new Date(timeEnd)

//   console.log(timeOne)

  // console.log('Now: ', timeNow)
  // console.log('Blog: ', timeBlog)
  
    let distance = timeTwo - timeOne // miliseconds
  
    console.log('distance: ', distance)

    let years = timeTwo.getFullYear() - timeOne.getFullYear();  //tahun

    let months;
    months = (timeTwo.getFullYear() - timeOne.getFullYear()) * 12;
    // console.log('selisih bulan', months)

    months -= timeOne.getMonth();
    months += timeTwo.getMonth(); //Bulan

    // months -= timeOne.getMonth();
    // console.log(timeOne.getMonth())
    // console.log(months)

    // months += timeTwo.getMonth();
    // console.log(timeTwo.getMonth())
    // console.log(months)
    // return months <= 0 ? 0 : months;

    

    let dayDistance = Math.floor(distance / (24 * 60 * 60 * 1000 )) // convert to day

    console.log('dayDistance: ', Math.abs(dayDistance))
    console.log('selisih bulan: ', Math.abs(months))
    console.log('selisih tahun: ', Math.abs(years))
  
//   return Math.abs(dayDistance)

  if(Math.abs(dayDistance) <= 30) {
    return Math.abs(dayDistance) + ' days ago'
  }else {
      if(Math.abs(dayDistance) > 30 && Math.abs(dayDistance) <=365){
        return months <= 0 ? '0 months ago' : Math.abs(months) + ' months ago';
      } else{
          if(Math.abs(dayDistance) > 366){
              return Math.abs(years) + ' years ago'
          }
      }
    }
}









//     let hourDistance = Math.floor(distance / ( 60 * 60 * 1000 ))
//     if(hourDistance != 0) {
//       return hourDistance + ' hours ago'
//     } else {
//       let minuteDistance = Math.floor(distance / ( 60 * 1000 ))
//       if(minuteDistance != 0) {
//         return minuteDistance + ' minute ago'
//       } else {
//         let secondDistance = Math.floor(distance /  1000 )
//         return secondDistance + ' seconds ago'
//       }
//     }
//   }
// }