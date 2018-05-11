$(document).ready(function() {

  var $xhr = $.getJSON("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftheraceblogger.com%2Ffeed");
  $xhr.done(function(data) {
    let links = data.items
    console.log(data)
    console.log(links);

    //for loop to retrieve articles for archives section
    for (let i = 0; i < links.length; i++) {
      let linkValue = links[i].link
      let titleValue = links[i].title
      let parent1 = document.getElementsByClassName("archives")[0]
      let newLink1 = document.createElement("li")
      let innerHtml = `<a href = ${linkValue}>${titleValue}</a>`
      newLink1.innerHTML = innerHtml
      parent1.appendChild(newLink1)

    }
  //for loop to retrieve articles for 3 most recent articles (title + link)
    for (let i = 0; i < 3; i++) {
      let linkValue = links[i].link
      let titleValue = links[i].title
      let pubValue = links[i].pubDate
      let blogContent = links[i].content
      let blogPics = links[i].thumbnail

      let parent1 = document.getElementsByClassName("articles")[0]
      let newLink1 = document.createElement("li")
      let innerHtml = `<div class="row">
          <div class="col s12 m8 l12 body1">
            <h5 class="center-align top-three"><a href = ${linkValue}>${titleValue}</a></h5>
            <p>${blogContent}</p>
          </div>
        </div>`
      newLink1.innerHTML = innerHtml
      parent1.appendChild(newLink1)
    }
  })
})
