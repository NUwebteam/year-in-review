'use strict';

$(document).ready(function() {
  var articlesArray = [];
  var researchArray = [];
  var pressArray = [];
  var mostReadArray = [];
  var partnershipsArray = [];
  var exploringArray = [];
  var globalArray = [];
  var campusArray = [];
  var competitionArray = [];
  var celebsArray = [];
  var facesArray = [];
  var photosArray = [];
  var html = '';


  $.get('https://docs.google.com/spreadsheets/d/1Wds85oEauCpyl6YnzKWdzdaOCxzRHHkOwNbsaC0O_CA/pub?output=csv', function (data) {
  // $.get('/news/wp-content/themes/nu-news-002/year-in-review/year-in-review-test.csv', function (data) {

    var articles = $.csv.toObjects(data);

    var gridTemplate = function(article, total) {

      var ret = '';

        ret += '<div class="grid-container">';
        // for (var i = 0; i < gridArray.length; i++) {
        ret += '<a href="'+article.article_url+'" target="_blank">';
        if (total % 4 === 0) {
          ret += '<div class="grid-wrapper" style="background:url('+article.image_or_video_poster_url+') no-repeat center center;background-size:cover;width:25%;">';
        } else if (total % 3 === 0) {
          ret += '<div class="grid-wrapper" style="background:url('+article.image_or_video_poster_url+') no-repeat center center;background-size:cover;width:33.33%;">';
        } else if (total % 2 === 0) {
          ret += '<div class="grid-wrapper" style="background:url('+article.image_or_video_poster_url+') no-repeat center center;background-size:cover;width:50%;">';
        } else if (total % 7 === 0) {
          ret += '<div class="grid-wrapper" style="background:url('+article.image_or_video_poster_url+') no-repeat center center;background-size:cover;width:25%;">';
        } else {
          ret += '<div class="grid-wrapper" style="background:url('+article.imageUrl+') no-repeat center center;background-size:cover;width:50%;">';
        }
        ret += '<div class="grid-content-container">';
        ret += '<div class="grid-content">';
        ret += '<h1>'+article.headline+'</h1>';
        ret += '</div>';
        ret += '</div>';
        ret += '</div>';
        ret += '</a>';
        // }
        ret += '</div>';

      return ret;

    };

    //  Template for Image background

    var bkImgTemplate = function(article) {

      var ret = '';

      ret += '<div class="bkImg-container clearfix">';
      ret += '<div class="bkImg-wrapper clearfix" style="background:url('+article.image_or_video_poster_url+') no-repeat center center;background-size:cover;">';
      ret += '<div class="bkImg-content-container clearfix">';
      ret += '<div class="bkImg-content clearfix">';
      ret += '<h1>' + article.headline + '</h1>';
      if(article.topic) {
        ret += '<h3>'+article.topic+'</h3>';
      }
      if(article.blurb) {
        ret += '<p>' + article.blurb + '</p>';
      }
      ret += '</div>';
      ret += '<a class="bkImg-button" href="'+article.article_url+'" target="_blank">Explore Article</a>';
      ret += '</div>';
      ret += '</div>';
      ret += '</div>';

      return ret;

    };

    var bkImg_2_template = function(article) {

      var ret = '';

      ret +='<div class="bkImg-2-container clearfix">';
      ret +='<div class="bkImg-2-wrapper clearfix"; style="background:url('+article.image_or_video_poster_url+') no-repeat center center;background-size:cover;">';
      ret +='<div class="bkImg-2-content-container clearfix">';
      ret +='<div class="bkImg-2-content clearfix">';
      ret +='<h1>' + article.headline + '</h1>';
      ret +='<h3>'+article.topic+'</h3>';
      ret +='<p>' + article.blurb + '</p>';
      ret +='</div>';
      ret +='<a href="'+article.article_url+'" target="_blank">';
      ret +='<img class="bkImg-2-arrow" src="assets/images/arrow.png" alt="Arrow">';
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
      ret += '<h1>'+article.headline+'</h1>';
      if(article.topic) {
        ret += '<h3>'+article.topic+'</h3>';
      }
      if(article.blurb) {
        ret += '<p>'+article.blurb+'</p>';
      }
      ret += '<a class="bkImg-button" href="'+article.article_url+'" target="_blank">Explore Article</a>';
      ret += '</div>';
      ret += '</div>';
      ret += '<div class="bkSolid-content-container clearfix">';
      ret += '<div class="bkSolid-content-right" style="background:url('+article.image_or_video_poster_url+') no-repeat center center;background-size: cover;">';
      ret += '</div>';
      ret += '</div>';
      ret += '</div>';

      return ret;

    };

    var bkSolidLeftTemplate = function(article) {

      var ret = '';

      ret += '<div class="bkSolid-container clearfix">';
      ret += '<div class="bkSolid-content-container clearfix">';
      ret += '<div class="bkSolidleft-content-left" style="background:url('+article.image_or_video_poster_url+') no-repeat center center;background-size: cover;">';
      ret += '</div>';
      ret += '</div>';
      ret += '<div class="bkSolid-content-container clearfix">';
      ret += '<div class="bkSolidleft-content-right">';
      ret += '<h1>'+article.headline+'</h1>';
      if(article.topic) {
        ret += '<h3>'+article.topic+'</h3>';
      }
      if(article.blurb) {
        ret += '<p class="bkSolidLeft-paragraph">'+article.blurb+'</p>';
      }
      ret += '<a class="bkImg-button" href="'+article.article_url+'" target="_blank">Explore Article</a>';
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
        ret += '<a href="'+facesArray[i].faces_individual_article_link+'" target="_blank">';
        ret += '<div class="faces-image" style="width:'+(100/facesArray.length)+'%;background:url('+facesArray[i].faces_individual_image_url+') no-repeat center center;background-size:cover">';
        ret += '</div>';
        ret += '</a>';
      }
      ret += '</div>';
      ret += '</div>';

      return ret;

    };

    var videoTemplate = function(article) {

      var ret = '';

      ret += '<div class="video-container">';
      ret += '<video loop muted autoplay poster="'+article.image_or_video_poster_url+'" class="video-wrapper" style="margin-bottom: -5px;">';
      if ($(window).width() > 767) {
        // ret += '<source src="'+article.video_url+'" type="video/mp4" class="video-source">';
        ret += '<source src="'+article.video_url+'" type="video/mp4" class="video-source">';
      }
      ret += '</video>';
      ret += '<div class="video-content-container">';
      ret += '<div class="video-content">';
      if (article.headline) {
        ret += '<h1>'+article.headline+'</h1>';
      }
      if (article.topic) {
        ret += '<h3>'+article.topic+'</h3>';
      }
      if (article.article_url) {
        ret += '<a class="bkImg-button" href="'+article.article_url+'" target="_blank">Explore Article</a>';
      }
      ret += '</div>';
      ret += '</div>';
      ret += '</div>';

      return ret;

    };

    var imageTemplate = function(articles) {
      var ret = '';

      ret += '<div class="image-container clearfix">';
      for ( var i = 0; i < articles.length; i++) {
        ret += '<div class="image-wrapper">';
        ret += '<div class="image-slide" style="background:url('+articles[i].image_or_video_poster_url+')no-repeat center center;background-size:100% auto;">';
        ret += '</div>';
        ret += '<div class="image-content-container">';
        ret += '<div class="image-content">';
        ret += '<h2>'+articles[i].headline+'</h2>';
        ret += '<h4>'+articles[i].topic+'</h4>';
        ret += '<p>'+articles[i].blurb+'</p>';
        ret += '</div>';
        ret += '</div>';
        ret += '</div>';
      }
      ret += '</div>';

      return ret;
    };

    var numberGridTemplate = function(article, index, total) {
      var ret = '';

      ret += '<div class="grid-numbers-container">';
      if (total % 4 === 0) {
        ret += '<div class="grid-numbers-wrapper" style="background:url('+article.image_or_video_poster_url+')no-repeat center center;background-size:cover;width:25%;">';
      } else if (total % 3 === 0) {
        ret += '<div class="grid-numbers-wrapper" style="background:url('+article.image_or_video_poster_url+')no-repeat center center;background-size:cover;width:33%;">';
      } else if (total % 2 === 0) {
        ret += '<div class="grid-numbers-wrapper" style="background:url('+article.image_or_video_poster_url+')no-repeat center center;background-size:cover;width:50%;">';
      }
      ret += '<div class="grid-number">';
      ret += '<h5>'+index+'</h5>';
      ret += '</div>';
      ret += '<div class="grid-numbers-content">';
      if (article.short_headline) {
        ret += '<h3'+article.short_headline+'</h3>';
      } else {
        ret += '<h3>'+article.headline+'</h3>';
      }
      if (article.blurb) {
        ret += '<h5>'+article.blurb+'</h5>';
      }
      ret += '</div>';
      ret += '<a href="'+article.article_url+'" target="_blank">';
      ret += '<img class="bkImg-2-arrow" src="assets/images/arrow.png" alt="Arrow">';
      ret += '</a>';
      ret += '</div>';
      ret += '</div>';

      return ret;
    };

    var tileSliderTemplate = function(article, index) {
      var ret = '';

      ret += '<div class="image-wrapper">';
      ret += '<div class="tile-slide" style="background:url('+article.image_or_video_poster_url+')no-repeat center center;background-size:100% auto;">';
      ret += '<div class="tile-content-container clearfix">';
      ret += '<div class="tile-number">';
      ret += '<h3>'+index+'</h3>';
      ret += '</div>';
      ret += '<div class="tile-content clearfix">';
      ret += '<h3>'+article.headline+'</h3>';
      ret += '<p>'+article.blurb+'</p>';
      ret += '<a class="bkImg-button" href="'+article.article_url+'" target="_blank">Explore Article</a>';
      ret += '</div>';
      ret += '</div>';
      ret += '</div>';
      ret += '</div>';

      return ret;
    };

    // var textImageSliderTemplate = function(article, index) {
    //   var ret = '';
    //
    //   ret += '<div class="text-image-wrapper">';
    //   ret += '<div class="text-image-slide" style="background:url('+article.image_or_video_poster_url+')no-repeat center center;background-size:100% auto;">';
    //   ret += '</div>';
    //   ret += '</div>';
    //
    //   return ret;
    // };

    var teaserTemplate = function(article, total) {
      var ret = '';

      ret += '<div class="teaser-container">';
      ret += '<a href="'+article.article_url+'" target="_blank">';
      if (total % 4 === 0) {
        ret += '<div class="teaser-wrapper" style="background:url('+article.image_or_video_poster_url+')no-repeat center center;background-size:cover;width:25%;">';
      } else if (total % 3 === 0) {
        ret += '<div class="teaser-wrapper" style="background:url('+article.image_or_video_poster_url+')no-repeat center center;background-size:cover;width:33%;">';
      } else if (total % 2 === 0) {
        ret += '<div class="teaser-wrapper" style="background:url('+article.image_or_video_poster_url+')no-repeat center center;background-size:cover;width:25%;">';
      }
      ret += '<div class="teaser-content-container">'
      ret += '<div class="teaser-content clearfix">';
      if (article.short_headline) {
        ret += '<h5'+article.short_headline+'</h5>';
      } else {
        ret += '<h5>'+article.headline+'</h5>';
      }
      if (article.blurb) {
        ret += '<h6>'+article.blurb+'</h6>';
      }
      ret += '</div>';
      ret += '</div>';
      ret += '</div>';
      ret += '</a>';
      ret += '</div>';

      return ret;
    };

    var listTemplate = function(article) {
      var ret = '';

      ret += '<div class="list-container">';
      ret += '<a href="'+article.article_url+'" target="_blank">';
      // if (total % 4 === 0) {
      //   ret += '<div class="list-wrapper" style="background:url('+article.image_or_video_poster_url+')no-repeat center center;background-size:cover;width:25%;">';
      // } else if (total % 3 === 0) {
      //   ret += '<div class="list-wrapper" style="background:url('+article.image_or_video_poster_url+')no-repeat center center;background-size:cover;width:33%;">';
      // } else if (total % 2 === 0) {
      //   ret += '<div class="teaser-wrapper" style="background:url('+article.image_or_video_poster_url+')no-repeat center center;background-size:cover;width:25%;">';
      // }
      ret += '<div class="list-content-container">'
      ret += '<div class="list-content clearfix">';
      if (article.short_headline) {
        ret += '<h5>'+article.short_headline+'</h5>';
      } else {
        ret += '<h5>'+article.headline+'</h5>';
      }
      if (article.blurb) {
        ret += '<h6>'+article.blurb+'</h6>';
      }
      ret += '</div>';
      ret += '</div>';
      ret += '</div>';
      ret += '</a>';

      return ret;
    };


    Array.prototype.insert = function (index, item) {
      this.splice(index, 0, item);
    };

    for (var i = 0; i < articles.length; i++) {
     if (articles[i].section === 'Article') {
        articlesArray.push(articles[i]);
      } else if (articles[i].section === 'Research') {
        researchArray.push(articles[i]);
      } else if (articles[i].section === 'In The Press') {
        pressArray.push(articles[i]);
      } else if (articles[i].section === 'Most Read') {
        mostReadArray.push(articles[i]);
      } else if (articles[i].section === 'New Partnerships') {
        partnershipsArray.push(articles[i]);
      } else if (articles[i].section === 'Exploring the World') {
        exploringArray.push(articles[i]);
      } else if (articles[i].section === 'Global News Stories') {
        globalArray.push(articles[i]);
      } else if (articles[i].section === 'Campus Updates') {
        campusArray.push(articles[i]);
      } else if (articles[i].section === 'In Competition') {
        competitionArray.push(articles[i]);
      } else if (articles[i].section === 'Big names to Campus') {
        celebsArray.push(articles[i]);
      } else if (articles[i].section === 'Faces') {
        facesArray.push(articles[i]);
      } else if (articles[i].section === 'Best Photos') {
        photosArray.push(articles[i]);
      }
    }


    // Loop through Article content

    // for (var i = 0; i < articles.length; i++) {
    //  if (articles[i].template === 'faces') {
    //     facesArray.push(articles[i]);
    //   } else if (articles[i].template === 'grid-layout') {
    //     gridArray.push(articles[i]);
    //   } else if (articles[i].template === 'image-gallery') {
    //     imageArray.push(articles[i]);
    //   } else if(articles[i].template === 'bkground-img') {
    //     articlesArray.push(articles[i]);
    //   } else if (articles[i].template === 'bkground-white-right-img') {
    //     articlesArray.push(articles[i]);
    //   } else if (articles[i].template === 'bkground-white-left-img') {
    //     articlesArray.push(articles[i]);
    //   } else if (articles[i].template === 'video') {
    //     articlesArray.push(articles[i]);
    //   } else if (articles[i].template === 'bkground-img-2') {
    //     articlesArray.push(articles[i]);
    //   }
    // }

    // for (var e = 0; e < articlesArray.length; e++) {
    //   if (e === 4 ) {
    //     articlesArray.insert(e, facesArray);
    //   } else if ( e === 6 ){
    //     articlesArray.insert(e, gridArray);
    //   }
    // }

    // for (var i = 0; i < articlesArray.length; i++) {
    //   if (i === 4 ) {
    //     html += facesTemplate(facesArray);
    //   } else if ( i === 6 ) {
    //      html += gridTemplate(gridArray);
    //   } else if (articlesArray[i].template === 'bkground-img') {
    //     html += bkImgTemplate(articlesArray[i]);
    //   } else if (articlesArray[i].template === 'bkground-white-right-img') {
    //     html += bkSolidTemplate(articlesArray[i]);
    //   } else if (articlesArray[i].template === 'bkground-white-left-img') {
    //     html += bkSolidLeftTemplate(articlesArray[i]);
    //   } else if (articlesArray[i].template === 'video') {
    //     html += videoTemplate(articlesArray[i]);
    //   } else if (articlesArray[i].template === 'bkground-img-2') {
    //     html += bkImg_2_template(articlesArray[i]);
    //   } else if (articlesArray[i].section_title) {
    //     html += sectionTemplate(articlesArray[i]);
    //   }
    // }

    // html += imageTemplate(imageArray);

    // $('#content-template').html(html);

    var renderHeader = function(data) {
      html += '<div class="hero-container">';
      html += '<video loop muted autoplay poster="assets/images/header.png" class="video-wrapper" style="margin-bottom: -5px;">';
      if ($(window).width() > 767) {
        html += '<source src="assets/images/header.mp4" type="video/mp4" class="video-source">';
      }
      html += '</video>';
      html += '<div class="hero-content">';
      html += '<h1> - 2016 In Review - </h1>';
      html += '<h5> A Look Back at the year at Northeastern</h5>';
      html += '</div>';
      html += '</div>';
      // ret += '<div class="video-container">';
      // ret += '<video loop muted autoplay poster="'+article.image_or_video_poster_url+'" class="video-wrapper" style="margin-bottom: -5px;">';
      // if ($(window).width() > 767) {
      //   ret += '<source src="'+article.video_url+'" type="video/mp4" class="video-source">';
      // }
      // ret += '</video>';
      // ret += '<div class="video-content-container">';
      // ret += '<div class="video-content">';
      // ret += '<h1>'+article.headline+'</h1>';
      // ret += '<h3>'+article.topic+'</h3>';
      // ret += '<a class="bkImg-button" href="'+article.article_url+'" target="_blank">Explore Article</a>';
      // ret += '</div>';
      // ret += '</div>';
      // ret += '</div>';
    };

    var renderArticles = function(articles) {
      html += '<div class="section-container section-container-white clearfix">';
      html += '<h1>Explore Northeastern\'s biggest stories</h1>';
      for (var i = 0; i < articles.length; i++) {
        if (articles[i].template === 'bkground-img') {
          html += bkImgTemplate(articles[i]);
        } else if (articles[i].template === 'bkground-white-right-img') {
          html += bkSolidTemplate(articles[i]);
        } else if (articles[i].template === 'bkground-white-left-img') {
          html += bkSolidLeftTemplate(articles[i]);
        } else if (articles[i].template === 'video') {
          html += videoTemplate(articles[i]);
        } else if (articles[i].template === 'bkground-img-2') {
          html += bkImg_2_template(articles[i]);
        }
      }
      html += '</div>';
    };

    var renderResearch = function(articles) {
      // console.log(articles);
      html += '<div class="section-container section-container-white clearfix">';
      html += '<h1>Use-Inspired Research</h1>';
      for (var i = 0; i < articles.length; i++) {
        var total = (articles.length - 1);
        if (articles[i].template === 'video') {
          html += videoTemplate(articles[i]);
        } else if (articles[i].template === 'grid-layout') {
          html += gridTemplate(articles[i], total);
          // console.log(articles[i]);
        }
      }
      html += '</div>';
    }

    var renderFaces = function(faces) {
      html += '<div class="section-container section-container-faces clearfix">';
      html += '<h1>Faces of Northeastern</h1>';
      html += facesTemplate(faces);
      html += '<div class="faces-content clearfix">';
      html += '<a class="bkImg-button" href="'+faces[0].article_url+'" target="_blank">Explore Article</a>';
      html += '</div>';
      html += '</div>';
    };

    var renderMostRead = function(articles) {
      html += '<div class="section-container section-container-grey clearfix">';
      html += '<h1>Most Read Stories</h1>';
      for (var i = 0; i < articles.length; i++) {
        var index = i + 1;
        var total = articles.length;
        html += numberGridTemplate(articles[i], index, total);
      }
      html += '</div>';
    };

    var renderMostReadSlider = function(articles) {
      html += '<div class="section-container section-container-white clearfix">';
      html += '<h1>Most Read Articles - Slider</h1>';
      html += '<div id="tile-slider" class="image-container clearfix">';
      for (var i = 0; i < articles.length; i++) {
        var index = i + 1;
        html += tileSliderTemplate(articles[i], index);
      }
      html += '</div>';
      html += '</div>';
    };

    var renderTeaseTemplate = function(articles) {
      html += '<div class="section-container section-container-grey clearfix">';
      html += '<h1>Teaser Section</h1>';
      for (var i = 0; i < articles.length; i++) {
        var total = articles.length;
        html += teaserTemplate(articles[i], total);
      }
      // html += teaserTemplate(articles);
      html += '</div>';
    };

    var renderListTemplate = function(articles) {
      html += '<div class="section-container section-container-grey clearfix">';
      html += '<h1>List Section</h1>';
      for (var i = 0; i < articles.length; i++) {
        html += listTemplate(articles[i]);
      }
      html += '</div>';
    }

    var renderCompetition = function(articles) {
      html += '<div class="section-container section-container-grey clearfix">';
      html += '<h1>Students compete on the biggest stage</h1>';
      for (var i = 0; i < articles.length; i++) {
        var total = articles.length;
        html += teaserTemplate(articles[i], total);
      }
      html += '</div>';
    }

    var renderPartnerships = function(articles) {
      html += '<div class="section-container section-container-white clearfix">';
      html += '<h1>University establishes new partnerships at home and abroad</h1>';
      for (var i = 0; i < articles.length; i++) {
        var total = articles.length;
        html += teaserTemplate(articles[i], total);
      }
      html += '</div>';
    }

    var renderCampusUpdates = function(articles) {
      html += '<div class="section-container section-container-grey clearfix">';
      html += '<h1>Campus Updates</h1>';
      for (var i = 0; i < articles.length; i++) {
        html += bkImg_2_template(articles[i]);
      }
      html += '</div>';
    }

    var renderExploringWorld = function(articles) {
      html += '<div class="section-container section-container-white clearfix">';
      html += '<h1>Exploring the World</h1>';
      for (var i = 0; i < articles.length; i++) {
        var total = 2;
        html += gridTemplate(articles[i], total);
      }
      html += '</div>';
    }

    var renderGlobalStories = function(articles) {
      html += '<div class="section-container section-container-grey clearfix">';
      html += '<h1>Major Global Stories</h1>';
      for (var i = 0; i < articles.length; i++) {
        var total = 2;
        html += gridTemplate(articles[i], total);
      }
      html += '</div>';
    }

    var renderImages = function(articles) {
      html += '<div class="section-container section-container-grey">';
      html += '<h1>Top Photos of 2016</h1>';
      html += imageTemplate(articles);
      html += '</div>';
    }



    renderHeader();
    renderArticles(articlesArray);
    renderMostRead(mostReadArray);
    renderResearch(researchArray);
    renderCompetition(competitionArray);
    renderPartnerships(partnershipsArray);
    renderCampusUpdates(campusArray);
    renderExploringWorld(exploringArray);
    renderGlobalStories(globalArray);
    renderFaces(facesArray);
    renderImages(photosArray);
    // renderMostReadSlider(researchArray);
    // renderTeaseTemplate(researchArray);
    // renderListTemplate(researchArray);


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

    $('#tile-slider').slick({
      infinite: true,
      adaptiveHeight: false,
      speed: 500,
      cssEase: 'linear',
      autoplay: true,
      arrows: true,
      autoplaySpeed: 4000,
      });
  });
});
