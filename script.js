document.addEventListener("DOMContentLoaded", () => {
    // Select all the div elements you want to observe
    const divs = document.querySelectorAll(".observe");
  
    // Callback function for the observer
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };
  
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Observe within the viewport
      rootMargin: "0px", // No margin around the root
      threshold: 0.1, // Trigger when 50% of the element is visible
    });
  
    // Observe each div
    divs.forEach((div) => observer.observe(div));
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    // Select all the div elements you want to observe
    const divs = document.querySelectorAll(".observe-1");
  
    // Callback function for the observer
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };
  
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Observe within the viewport
      rootMargin: "0px", // No margin around the root
      threshold: 0.1, // Trigger when 50% of the element is visible
    });
  
    // Observe each div
    divs.forEach((div) => observer.observe(div));
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    function callbackFunction(enteries){
        enteries.forEach(element => {
          if(element.isIntersecting){
            let valueDisplays=document.querySelectorAll(".num")
            let interval=3000;
            valueDisplays.forEach((valueDisplay)=>{
              let startValue=0;
              let endValue=parseInt(valueDisplay.getAttribute("data-val"));
              let duration=Math.floor(interval/endValue);
              let counter = setInterval(function(){
                startValue += 1;
                valueDisplay.textContent=  startValue;
                if(startValue===endValue){
                  clearInterval(counter)
        
                }
              },duration)
            })
            observer.unobserve(firstsection)
          }
        });
      }
      const options={
        rootMargin:"0px",
        threshold:0.5,
      } 
    const firstsection=document.getElementById("lazy-js")
    const observer = new IntersectionObserver(callbackFunction,options)
    observer.observe(firstsection)
   
  })
  document.addEventListener("DOMContentLoaded", function () {
    function callbackFunction(enteries){
        enteries.forEach(element => {
          if(element.isIntersecting){
            let valueDisplays=document.querySelectorAll(".num")
            let interval=3000;
            valueDisplays.forEach((valueDisplay)=>{
              let startValue=0;
              let endValue=parseInt(valueDisplay.getAttribute("data-val"));
              let duration=Math.floor(interval/endValue);
              let counter = setInterval(function(){
                startValue += 1;
                valueDisplay.textContent=  startValue;
                if(startValue===endValue){
                  clearInterval(counter)
        
                }
              },duration)
            })
            observer.unobserve(firstsection)
          }
        });
      }
      const options={
        rootMargin:"0px",
        threshold:0.5,
      } 
    const firstsection=document.getElementById("lazy-js-1")
    const observer = new IntersectionObserver(callbackFunction,options)
    observer.observe(firstsection)
   
  })