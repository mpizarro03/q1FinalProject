
 $(document).ready(function(){

  var $xhr = $.getJSON("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftheraceblogger.com%2Ffeed");
  $xhr.done(function(data) {
    // return data
console.log(data)


})
// console.log($xhr)
 // let allData = fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftheraceblogger.com%2Ffeed").then((res) => {
 //   //   res.text().then((htmlTxt) => {
 //   //     var domParser = new DOMParser()
 //   //     let doc = domParser.parseFromString(htmlTxt, 'text/html');

       // let test = doc.getElementsByTagName("title")[2].innerHTML;


       // let parent = document.getElementsByClassName("articles")[0];
       // let newLink = document.createElement("li");
       // newLink.innerHTML = test;
       // parent.appendChild(newLink);
       //
       // // let test2 = doc.getElementsByTagName("item");
       // // console.log(test2);
       //
       // let test1 = doc.getElementsByTagName("item")[0].innerHTML;
       //
       // console.log(test1);
       //
       // let parent1 = document.getElementsByClassName("articles")[0];
       // let newLink1 = document.createElement("li");
       // newLink1.innerHTML = test1;
       // parent1.appendChild(newLink1);

       // let test1 = doc.getElementsByTagName("item");
       // console.log(test1);

   //   // })
   // }).catch(() => console.error('Error in fetching the website'))

  });
