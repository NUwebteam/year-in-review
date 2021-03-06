'use strict';

$(document).ready(function() {

  var html = '';
  var facesArray = [];
  var gridArray = [];
  var imageArray = [];
  var articlesArray = [];

  // $.get('http://docs.google.com/spreadsheets/d/1Wds85oEauCpyl6YnzKWdzdaOCxzRHHkOwNbsaC0O_CA/pub?output=csv', function (data) {
  $.get('/news/wp-content/themes/nu-news-002/year-in-review/year-in-review-test.csv', function (data) {

    var articles = $.csv.toObjects(data);

    var gridTemplate = function(gridArray) {

      var ret = '';

        ret += '<div class="grid-container clearfix">';
        for (var i = 0; i < gridArray.length; i++) {
          if (gridArray.length % 4 === 0) {
            ret += '<a href="'+gridArray[i].url+'" target="_blank">';
            ret += '<div class="grid-wrapper" style="background:url('+gridArray[i].imageUrl+') no-repeat center center;background-size:cover;width:25%;">';
            ret += '<div class="grid-content-container">';
            ret += '<div class="grid-content">';
            ret += '<h1>'+gridArray[i].title+'</h1>';
            ret += '</div>';
            ret += '</div>';
            ret += '</div>';
            ret += '</a>';
          } else if (gridArray.length % 3 === 0) {
            ret += '<a href="'+gridArray[i].url+'" target="_blank">';
            ret += '<div class="grid-wrapper" style="background:url('+gridArray[i].imageUrl+') no-repeat center center;background-size:cover;width:33.33%;">';
            ret += '<div class="grid-content-container">';
            ret += '<div class="grid-content">';
            ret += '<h1>'+gridArray[i].title+'</h1>';
            ret += '</div>';
            ret += '</div>';
            ret += '</div>';
            ret += '</a>';
          } else if (gridArray.length % 2 === 0) {
            ret += '<a href="'+gridArray[i].url+'" target="_blank">';
            ret += '<div class="grid-wrapper" style="background:url('+gridArray[i].imageUrl+') no-repeat center center;background-size:cover;width:50%;">';
            ret += '<div class="grid-content-container">';
            ret += '<div class="grid-content">';
            ret += '<h1>'+gridArray[i].title+'</h1>';
            ret += '</div>';
            ret += '</div>';
            ret += '</div>';
            ret += '</a>';
          } else if (gridArray.length % 7 === 0) {
            ret += '<a href="'+gridArray[i].url+'" target="_blank">';
            ret += '<div class="grid-wrapper" style="background:url('+gridArray[i].imageUrl+') no-repeat center center;background-size:cover;width:25%;">';
            ret += '<div class="grid-content-container">';
            ret += '<div class="grid-content">';
            ret += '<h1>'+gridArray[i].title+'</h1>';
            ret += '</div>';
            ret += '</div>';
            ret += '</div>';
            ret += '</a>';
          } else {
            ret += '<a href="'+gridArray[i].url+'" target="_blank">';
            ret += '<div class="grid-wrapper" style="background:url('+gridArray[i].imageUrl+') no-repeat center center;background-size:cover;width:33.33%;">';
            ret += '<div class="grid-content-container">';
            ret += '<div class="grid-content">';
            ret += '<h1>'+gridArray[i].title+'</h1>';
            ret += '</div>';
            ret += '</div>';
            ret += '</div>';
            ret += '</a>';
          }
        }

        ret += '</div>';

      return ret;

    };

    //  Template for Image background

    var bkImgTemplate = function(article) {

      var ret = '';

      ret += '<div class="bkImg-container clearfix">';
      ret += '<div class="bkImg-wrapper clearfix" style="background:url('+article.imageUrl+') no-repeat center center;background-size:cover;">';
      ret += '<div class="bkImg-content-container clearfix">';
      ret += '<div class="bkImg-content clearfix">';
      ret += '<h1>' + article.title + '</h1>';
      if(article.subTitle) {
        ret += '<h3>'+article.subTitle+'</h3>';
      }
      if(article.content) {
        ret += '<p>' + article.content + '</p>';
      }
      ret += '</div>';
      ret += '<a class="bkImg-button" href="'+article.url+'" target="_blank">Explore Article</a>';
      ret += '</div>';
      ret += '</div>';
      ret += '</div>';

      return ret;
    };

    var bkImg_2_template = function(article) {

      var ret = '';

      ret +='<div class="bkImg-2-container clearfix">';
      ret +='<div class="bkImg-2-wrapper clearfix"; style="background:url('+article.imageUrl+') no-repeat center center;background-size:cover;">';
      ret +='<div class="bkImg-2-content-container clearfix">';
      ret +='<div class="bkImg-2-content clearfix">';
      ret +='<h1>' + article.title + '</h1>';
      ret +='<h3>'+article.subTitle+'</h3>';
      ret +='<p>' + article.content + '</p>';
      ret +='</div>';
      ret +='<a href="'+article.url+'" target="_blank">';
      ret +='<img class="bkImg-2-arrow" src="/news/wp-content/themes/nu-news-002/year-in-review/assets/images/arrow.png" alt="Arrow">';
      ret +='</a>';
      ret +='</div>';
      ret +='</div>';
      ret +='</div>';

      return ret;
    };

    // Template for White background

    var bkSolidTemplate = function(article) {

      var ret = '';

      ret += '<div class="bkSolid-container clearfix">';
      ret += '<div class="bkSolid-content-container clearfix">';
      ret += '<div class="bkSolid-content-left">';
      ret += '<h1>'+article.title+'</h1>';
      if(article.subTitle) {
        ret += '<h3>'+article.subTitle+'</h3>';
      }
      if(article.content) {
        ret += '<p>'+article.content+'</p>';
      }
      ret += '<a class="bkImg-button" href="'+article.url+'" target="_blank">Explore Article</a>';
      ret += '</div>';
      ret += '</div>';
      ret += '<div class="bkSolid-content-container clearfix">';
      ret += '<div class="bkSolid-content-right" style="background:url('+article.imageUrl+') no-repeat center center;background-size: cover;">';
      ret += '</div>';
      ret += '</div>';
      ret += '</div>';

      return ret;

    };

    var bkSolidLeftTemplate = function(article) {

      var ret = '';

      ret += '<div class="bkSolid-container clearfix">';
      ret += '<div class="bkSolid-content-container clearfix">';
      ret += '<div class="bkSolidleft-content-left" style="background:url('+article.imageUrl+') no-repeat center center;background-size: cover;">';
      ret += '</div>';
      ret += '</div>';
      ret += '<div class="bkSolid-content-container clearfix">';
      ret += '<div class="bkSolidleft-content-right">';
      ret += '<h1>'+article.title+'</h1>';
      if(article.subTitle) {
        ret += '<h3>'+article.subTitle+'</h3>';
      }
      if(article.content) {
        ret += '<p class="bkSolidLeft-paragraph">'+article.content+'</p>';
      }
      ret += '<a class="bkImg-button" href="'+article.url+'" target="_blank">Explore Article</a>';
      ret += '</div>';
      ret += '</div>';
      ret += '</div>';

      return ret;
    };

    var facesTemplate = function(facesArray) {

      var ret = '';

      ret += '<div class="faces-container clearfix">';
      ret += '<div class="faces-wrapper">';
      for (var i = 0; i < facesArray.length; i++) {
        ret += '<a href="'+facesArray[i].facesLinkUrl+'" target="_blank">';
        ret += '<div class="faces-image" style="width:'+(100/facesArray.length)+'%;background:url('+facesArray[i].facesImageUrl+') no-repeat center center;background-size:cover">';
        ret += '</div>';
        ret += '</a>';
      }
      ret += '</div>';
      ret += '<div class="faces-content">';
      ret += '<h1>Faces of Northeastern</h1>';
      ret += '<a class="bkImg-button" href="'+facesArray.url+'" target="_blank">Explore Article</a>';
      ret += '</div>';
      ret += '</div>';

      return ret;

    };

    var videoTemplate = function(article) {

      var ret = '';

      ret += '<div class="video-container">';
      ret += '<video loop muted autoplay poster="'+article.imageUrl+'" class="video-wrapper" style="margin-bottom: -5px;">';
      if ($(window).width() > 767) {
        ret += '<source src="'+article.videoUrl+'" type="video/mp4" class="video-source">';
      }
      ret += '</video>';
      ret += '<div class="video-content-container">';
      ret += '<div class="video-content">';
      ret += '<h1>'+article.title+'</h1>';
      ret += '<h3>'+article.subTitle+'</h3>';
      ret += '<a class="bkImg-button" href="'+article.url+'" target="_blank">Explore Article</a>';
      ret += '</div>';
      ret += '</div>';
      ret += '</div>';

      return ret;

    };

    var imageTemplate = function(imageArray) {
      var ret = '';

      ret += '<div class="image-container clearfix">';
      for ( var i = 0; i < imageArray.length; i++) {
        ret += '<div class="image-wrapper">';
        ret += '<div class="image-slide" style="background:url('+imageArray[i].imageUrl+')no-repeat center center;background-size:100% auto;">';
        ret += '</div>';
        ret += '<div class="image-content-container">';
        ret += '<div class="image-content">';
        ret += '<h2>'+imageArray[i].title+'</h2>';
        ret += '<h4>'+imageArray[i].subTitle+'</h4>';
        ret += '<p>'+imageArray[i].content+'</p>';
        ret += '</div>';
        ret += '</div>';
        ret += '</div>';
      }
      ret += '</div>';

      return ret;
    }

    Array.prototype.insert = function (index, item) {
      this.splice(index, 0, item);
    };

    // Loop through Article content

    for (var i = 0; i < articles.length; i++) {
     if (articles[i].template === 'faces') {
        facesArray.push(articles[i]);
      } else if (articles[i].template === 'grid-layout') {
        gridArray.push(articles[i]);
      } else if (articles[i].template === 'image-gallery') {
        imageArray.push(articles[i]);
      } else if(articles[i].template === 'bkground-img') {
        articlesArray.push(articles[i]);
      } else if (articles[i].template === 'bkground-white-right-img') {
        articlesArray.push(articles[i]);
      } else if (articles[i].template === 'bkground-white-left-img') {
        articlesArray.push(articles[i]);
      } else if (articles[i].template === 'video') {
        articlesArray.push(articles[i]);
      } else if (articles[i].template === 'bkground-img-2') {
        articlesArray.push(articles[i]);
      }
    }

    for (var e = 0; e < articlesArray.length; e++) {
      if (e === 4 ) {
        articlesArray.insert(e, facesArray);
      } else if ( e === 6 ){
        articlesArray.insert(e, gridArray);
      }
    }

    for (var i = 0; i < articlesArray.length; i++) {
      if (i === 4 ) {
        html += facesTemplate(facesArray);
      } else if ( i === 6 ) {
         html += gridTemplate(gridArray);
      } else if (articlesArray[i].template === 'bkground-img') {
        html += bkImgTemplate(articlesArray[i]);
      } else if (articlesArray[i].template === 'bkground-white-right-img') {
        html += bkSolidTemplate(articlesArray[i]);
      } else if (articlesArray[i].template === 'bkground-white-left-img') {
        html += bkSolidLeftTemplate(articlesArray[i]);
      } else if (articlesArray[i].template === 'video') {
        html += videoTemplate(articlesArray[i]);
      } else if (articlesArray[i].template === 'bkground-img-2') {
        html += bkImg_2_template(articlesArray[i]);
      }
    }

    html += imageTemplate(imageArray);


    $('#content-template').html(html);

    $('.image-container').slick({
      infinite: true,
      adaptiveHeight: false,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 4000,
      });
  });
});
