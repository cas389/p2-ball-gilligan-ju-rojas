// Testing
console.log("Testing to make sure JS is working");

// PopUp Ad
var overlay = document.querySelector("#overlay");


document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#show-modal-btn").addEventListener("click", () => {
    overlay.style.display = "block";
  })
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#close-modal-btn").addEventListener("click", () => {
    overlay.style.display = "none";
  })
});

/*
document.querySelector("#show-modal-btn").addEventListener("click", () => {
  overlay.style.display = "block";
})

document.querySelector("#close-modal-btn").addEventListener("click", () => {
  overlay.style.display = "none";
})*/




// Hamburger Menu
function showMenu (){
  document.querySelector('.navigation').classList.toggle('active');
  document.querySelector('.menu').classList.toggle('hide');
  document.querySelector('.close').classList.toggle('show');
}


// Read More Button

//Button 1

var owButton1 = document.getElementById("ow_button1")
var hiddenContent = document.getElementById('readmore');

owButton1.addEventListener("click", function(event){
  event.preventDefault();
  hiddenContent.style.display = (hiddenContent.style.display === "none") ? "block" :
  "none";
}, false);

//Button 2
var owButton2 = document.getElementById("ow_button2")
var hiddenContent2 = document.getElementById('readmore2');

owButton2.addEventListener("click", function(event){
  event.preventDefault();
  hiddenContent2.style.display = (hiddenContent2.style.display === "none") ? "block" :
  "none";
}, false);

//Button 3

var owButton3 = document.getElementById("ow_button3")
var hiddenContent3 = document.getElementById('readmore3');

owButton3.addEventListener("click", function(event){
  event.preventDefault();
  hiddenContent3.style.display = (hiddenContent3.style.display === "none") ? "block" :
  "none";
}, false);


// API GNews
function getNews() {
  let query = document.getElementById('search').value;
  let settings = {};

  if(query && query.length > 0) {
      settings = {
          "url": "https://gnews.io/api/v4/search?token=129e24acd3ee041963442e86f8dcd7d5&lang=en&q="+'"'+query+'"',
          "method": "GET"
      };
  }
  else {
      settings = {
          "url": "https://gnews.io/api/v4/top-headlines?token=129e24acd3ee041963442e86f8dcd7d5&lang=en",
          "method": "GET"
      };
  }

  $.ajax(settings).done(function (response) {
      let articles = response.articles;
      $(".news-content").empty();
      for (var i = 0; i < articles.length; i++) {
          if(!articles[i].image)
              articles[i].image = './news_128px.png';
          if(articles[i].publishedAt)
              articles[i].publishedAt = formatDate(articles[i].publishedAt);
          if(articles[i].description)
              articles[i].description = articles[i].description.substring(0, 300);
          $(".news-content").append(
              "<div class='news-block'><div class='img-container'><img class='news-image' src=" +
              articles[i].image +
              " alt='News'/></div><div class='news'><li><a class='news-title' href=" +
              articles[i].url +
              ">" +
              articles[i].title +
              "</a></li><li class='news-description'>" +
              articles[i].description +
              "</li><li><span class='published-label'>Published:</span><span class='published-value'> " +
              articles[i].publishedAt +
              "</span></li></div></div>"
          );
      }
  });
}

getNews();


function formatDate(date) {
  return new Date(date).toDateString();
}