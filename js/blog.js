
 $(document).ready(function(){

  var $xhr = $.getJSON("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftheraceblogger.com%2Ffeed");
  $xhr.done(function(data) {

  // console.log(data.items);

  let links = data.items
  // console.log(links);

  for(let i = 0; i < links.length; i++){
    let linkValue = links[i].link
    console.log(linkValue);
    let parent1 = document.getElementsByClassName("articles")[0]
    console.log(parent1)
    let newLink1 = document.createElement("li")
    let innerHtml = `<a href = ${linkValue}>test</a>`
    newLink1.innerHTML = innerHtml
    parent1.appendChild(newLink1)

  }

})
    // let parent1 = document.getElementsByClassName("articles1")[0];
    // let newLink1 = document.createElement("a");
    // newLink1.innerHTML = links;
    // parent1.appendChild(newLink1);
})
