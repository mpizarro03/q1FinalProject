$(document).ready(function() {

  var $xhr = $.getJSON("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftheraceblogger.com%2Ffeed");
  $xhr.done(function(data) {
    let links = data.items
    console.log(links);

    //for loop to retrieve articles for archives section
    for (let i = 0; i < links.length; i++) {
      let linkValue = links[i].link
      let titleValue = links[i].title
      let parent1 = document.getElementsByClassName("archives")[0]
      let newLink1 = document.createElement("li")
      let innerHtml = `<a target="_blank" href = ${linkValue}>${titleValue}</a>`
      newLink1.innerHTML = innerHtml
      parent1.appendChild(newLink1)

    }
  //for loop to retrieve articles for 3 most recent articles (title + link)
  for (let i = 0; i < 3; i++) {
      let linkValue = links[i].link
      let titleValue = links[i].title
      let pubValue = links[i].pubDate
      let blogContent = links[i].description
      let blogPics = links[i].thumbnail

      let topParent = document.getElementsByClassName("articles3")[0]
      let newChild1 = document.createElement("div")
      let innerCard =
      `<div class="col s12 m4">
          <div class="card card-blog z-depth-5">
            <div class="card-blog-action card-image waves-effect waves-block waves-light ">
              <img class="blogpics1" src="${blogPics}">
            </div>
            <div class="card-content">
              <span class="card-title grey-text text-darken-4"><a target="_blank" href = ${linkValue}>${titleValue}</a><i class="material-icons right activator">more_vert</i></span>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4"><a target="_blank" href = ${linkValue}>${titleValue}</a><i class="material-icons right">close</i></span>
              <p class="black-text">${blogContent}<a target="_blank" href = ${linkValue}>[Read More...]</p>
            </div>
          </div>
      </div>`
      newChild1.innerHTML = innerCard
      topParent.appendChild(newChild1)
    }

  })
})
