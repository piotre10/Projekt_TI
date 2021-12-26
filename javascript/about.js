function enterPerson(person_Name){
  var tag = document.getElementById(person_Name);
  tag.style.visibility = 'visible';
}

function leavePerson(person_Name){
  var tag = document.getElementById(person_Name);
  tag.style.visibility = 'hidden';
}

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
});