'use strict';

$(document).ready(function() {

  var html = '';
  var gridArray = [];

  // $.get('./csv-test.csv', function (data) {
  $.get('https://docs.google.com/spreadsheets/d/1Wds85oEauCpyl6YnzKWdzdaOCxzRHHkOwNbsaC0O_CA/pub?output=csv', function (data) {

    var articles = $.csv.toObjects(data);

    var gridTemplate = function(gridArray) {
      // gridArrayLength = gridArray.length();

      var ret = '';

        ret += '<div class="grid-container">';
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
      ret += '<div class="bkSolidLeft-content-left" style="background:url('+article.imageUrl+') no-repeat center center;background-size: cover;">';
      ret += '</div>';
      ret += '</div>';
      ret += '<div class="bkSolid-content-container clearfix">';
      ret += '<div class="bkSolidleft-content-left">';
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
      ret += '</div>';

      return ret;
    };

    var facesTemplate = function(facesArticle, facesImagesArray, facesLinksArray, imageLength) {
      var ret = '';

      ret += '<div class="faces-container clearfix">';
      ret += '<div class="faces-wrapper">';
      for (var i = 0; i < facesImagesArray.length; i++) {
        ret += '<a href="'+facesLinksArray[i]+'" target="_blank">';
        ret += '<div class="faces-image" style="width:'+imageLength+'%;background:url('+facesImagesArray[i]+') no-repeat center center;background-size:cover">';
        ret += '</div>';
        ret += '</a>';
      }
      ret += '</div>';
      ret += '<div class="faces-content">';
      ret += '<h1>'+facesArticle.title+'</h1>';
      ret += '<a class="bkImg-button" href="'+facesArticle.url+'" target="_blank">Explore Article</a>';
      ret += '</div>';
      ret += '</div>';

      return ret;

    };

    var videoTemplate = function(article) {

      var ret = '';

      ret += '<div class="video-container">';
      ret += '<video loop muted autoplay poster="'+article.imageUrl+'" class="video-wrapper">';
      // ret += '<source src="'+article.videoUrl+'" type="video/mp4">';
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

    // Loop through Article content

    for (var i = 0; i < articles.length; i++) {
      if(articles[i].facesImageUrl !== "") {
        var facesArticle = articles[i];
        var facesImagesArray = articles[i].facesImageUrl.split(',');
        var facesLinkArray = articles[i].facesLinkUrl.split(',');
        var imageLength = (100/facesImagesArray.length);
        html += facesTemplate(facesArticle, facesImagesArray, facesLinkArray, imageLength)
      } else if(articles[i].template === 'bkground-img') {
        html += bkImgTemplate(articles[i]);
      } else if (articles[i].template === 'bkground-white-right-img') {
        html += bkSolidTemplate(articles[i]);
      } else if (articles[i].template === 'bkground-white-left-img') {
        html += bkSolidLeftTemplate(articles[i]);
      } else if (articles[i].template === 'video') {
        html += videoTemplate(articles[i]);
      } else if (articles[i].template === 'grid-layout') {
        gridArray.push(articles[i]);
      }
    }

    html += gridTemplate(gridArray);

    $('#content-template').html(html);

  });

});
