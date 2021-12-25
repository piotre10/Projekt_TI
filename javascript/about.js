$(document).ready(function() {
    const sliders = document.querySelectorAll(".slide-in");
    
    const sectionOneOptions = {
      rootMargin: "-200px 0px 0px 0px"
    };
    
    const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -250px 0px"
    };
    
    const appearOnScroll = new IntersectionObserver(function(
      entries,
      appearOnScroll
    ) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          appearOnScroll.unobserve(entry.target);
        }
      });
    },
    appearOptions);
  
    sliders.forEach(slider => {
      appearOnScroll.observe(slider);
    });
    
    const counters = document.querySelectorAll('.value');
    const speed = 2000;
    
    counters.forEach( counter => {
       const animate = () => {
          const value = +counter.getAttribute('akhi');
          const data = +counter.innerText;
         
          const time = value / speed;
         if(data < value) {
              counter.innerText = Math.ceil(data + time);
              setTimeout(animate, 1);
            }else{
              counter.innerText = value;
            }
       } 
       animate();
    });

    $('#Klaudia').mouseenter(function(){
        $('#captions1 figcaption:nth-child(1)').css({
            'visibility': 'visible'
            });
    });
    $('#Klaudia').mouseleave(function(){
        $('#captions1 figcaption:nth-child(1)').css({
            'visibility': 'hidden'
            });
    });

    $('#Anna').mouseenter(function(){
        $('figcaption:nth-child(2)').css({
            'visibility': 'visible'
            });
    });
    $('#Anna').mouseleave(function(){
        $('figcaption:nth-child(2)').css({
            'visibility': 'hidden'
            });
    });

    $('#Karol').mouseenter(function(){
        $('figcaption:nth-child(3)').css({
            'visibility': 'visible'
            });
    });
    $('#Karol').mouseleave(function(){
        $('figcaption:nth-child(3)').css({
            'visibility': 'hidden'
            });
    });

    $('#Andrzej').mouseenter(function(){
        $('figcaption:nth-child(4)').css({
            'visibility': 'visible'
            });
    });
    $('#Andrzej').mouseleave(function(){
        $('figcaption:nth-child(4)').css({
            'visibility': 'hidden'
            });
    });

    $('#Radek').mouseenter(function(){
        $('figcaption:nth-child(5)').css({
            'visibility': 'visible'
            });
    });
    $('#Radek').mouseleave(function(){
        $('figcaption:nth-child(5)').css({
            'visibility': 'hidden'
            });
    });

    $('#Adam').mouseenter(function(){
        $('figcaption:nth-child(6)').css({
            'visibility': 'visible'
            });
    });
    $('#Adam').mouseleave(function(){
        $('figcaption:nth-child(6)').css({
            'visibility': 'hidden'
            });
    });

    $('#Piotr').mouseenter(function(){
        $('#captions2 figcaption:nth-child(1)').css({
            'visibility': 'visible'
            });
    });
    $('#Piotr').mouseleave(function(){
        $('#captions2 figcaption:nth-child(1)').css({
            'visibility': 'hidden'
            });
    });    
});
