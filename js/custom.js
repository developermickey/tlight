
(function ($) {
  
    "use strict";
  
      // MENU
      $('.navbar-collapse a').on('click',function(){
        $(".navbar-collapse").collapse('hide');
      });
      
      // CUSTOM LINK
      $('.smoothscroll').click(function(){
        var el = $(this).attr('href');
        var elWrapped = $(el);
        var header_height = $('.navbar').height();
    
        scrollToDiv(elWrapped,header_height);
        return false;
    
        function scrollToDiv(element,navheight){
          var offset = element.offset();
          var offsetTop = offset.top;
          var totalScroll = offsetTop-0;
    
          $('body,html').animate({
          scrollTop: totalScroll
          }, 300);
        }
      });
  
      $('.owl-carousel').owlCarousel({
          center: true,
          loop: true,
          margin: 30,
          autoplay: true,
          responsiveClass: true,
          responsive:{
              0:{
                  items: 2,
              },
              767:{
                  items: 3,
              },
              1200:{
                  items: 4,
              }
          }
      });
    
    })(window.jQuery);
  
  
  $(document).ready(function () {
    var playing = false,
      artistname = $(".artist-name"),
      musicName = $(".music-name"),
      time = $(".time"),
      fillBar = $(".fillBar");
  
    let audioData = [];
  
    var song = new Audio();
    var CurrentSong = 0;
    window.onload = load();
  
    function load() {
      audioData = [
        {
          name: "Useful Phrases for Beginning LingiÌt (Tlingit Language) Learners",
          artist: "Lesson 1",
          src:
            "audio/Useful-Phrases-for-Beginning-Lingit-Tlingit-Language-Learners.mp3"
        },
        {
          name: "Learn the Tlingit Language: Have Strength and Courage",
          artist: "Lesson 2",
          src:
            "audio/Learn-the-Tlingit-Language-Have-Strength-and-Courage.mp3"
        },
        {
          name: "Learn the Tlingit Language: Our Language Saved Us",
          artist: "Lesson 3",
          src:
            "audio/Learn-the-Tlingit-Language-Our-Language-Saved-Us.mp3"
        },
        {
          name: "Learn the Tlingit Language: You Improve It by Using LingiÌt",
          artist: "Lesson 4",
          src:
            "audio/Learn-the-Tlingit-Language-You-Improve-It-by-Using-Lingit.mp3"
        }
      ];
  
      artistname.html(audioData[CurrentSong].artist);
      musicName.html(audioData[CurrentSong].name);
      song.src = audioData[CurrentSong].src;
    }
  
    function playSong() {
      var curSong = audioData[CurrentSong];
      artistname.html(curSong.artist);
      musicName.html(curSong.name);
      song.src = curSong.src;
      song.play();
      $("#play").addClass("fa-pause");
      $("#play").removeClass("fa-play");
      $("img").addClass("active");
      $(".player-track").addClass("active");
    }
  
    song.addEventListener("timeupdate", function () {
      var position = (100 / song.duration) * song.currentTime;
      var current = song.currentTime;
      var duration = song.duration;
      var durationMinute = Math.floor(duration / 60);
      var durationSecond = Math.floor(duration - durationMinute * 60);
      var durationLabel = durationMinute + ":" + durationSecond;
      currentSecond = Math.floor(current);
      currentMinute = Math.floor(currentSecond / 60);
      currentSecond = currentSecond - currentMinute * 60;
      // currentSecond = (String(currentSecond).lenght > 1) ? currentSecond : ( String("0") + currentSecond );
      if (currentSecond < 10) {
        currentSecond = "0" + currentSecond;
      }
      var currentLabel = currentMinute + ":" + currentSecond;
      var indicatorLabel = currentLabel + " / " + durationLabel;
  
      fillBar.css("width", position + "%");
  
      $(".time").html(indicatorLabel);
    });
  
    $("#play").click(function playOrPause() {
      if (song.paused) {
        song.play();
        playing = true;
        $("#play").addClass("fa-pause");
        $("#play").removeClass("fa-play");
        $("img").addClass("active");
      } else {
        song.pause();
        playing = false;
        $("#play").removeClass("fa-pause");
        $("#play").addClass("fa-play");
        $("img").removeClass("active");
      }
    });
  
    $("#prev").click(function prev() {
      CurrentSong--;
      if (CurrentSong < 0) {
        CurrentSong = 3;
      }
      playSong();
    });
  
    $("#next").click(function next() {
      CurrentSong++;
      if (CurrentSong > 3) {
        CurrentSong = 0;
      }
      playSong();
    });
  });
  