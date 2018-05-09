




$(document).ready(function(){

let allData = fetch("https://g-theraceblogger.herokuapp.com")

  fetch("https://g-theraceblogger.herokuapp.com").then((res) => {
    res.text().then((htmlTxt) => {
      var domParser = new DOMParser()
      let doc = domParser.parseFromString(htmlTxt, 'text/html');

      let test = doc.getElementsByTagName("title")[2].innerHTML;
      // console.log(test);

      let parent = document.getElementsByClassName("articles")[0];
      let newLink = document.createElement("li");
      newLink.innerHTML = test;
      parent.appendChild(newLink);

      let test2 = doc.getElementsByTagName("item");
      console.log(test2);

      // // let test1 = doc.getElementsByTagName("item")[0].getElementsByTagName("title");
      // let test1 = doc.querySelector("item > link");
      // console.log(test1);

      let parent1 = document.getElementsByClassName("articles")[0];
      let newLink1 = document.createElement("li");
      newLink1.innerHTML = test2;
      parent1.appendChild(newLink1);

      // let test1 = doc.getElementsByTagName("item");
      // console.log(test1);

    })
  }).catch(() => console.error('Error in fetching the website'))

 });
