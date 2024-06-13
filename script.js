// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}


// This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll 
// animations with the navbar

document.addEventListener('scroll', (e) => { 
    const scroll = document.documentElement.scrollTop;
    if(scroll >= 100){
document.querySelector('body').classList.add('scroll')
    } else {
    document.querySelector('body').classList.remove('scroll')
    }
});

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
    for (const item of dropDowns) {
        const onClick = () => {
        item.classList.toggle('cs-active')
    }
    item.addEventListener('click', onClick)
    }
 
    
    const faqItems = Array.from(document.querySelectorAll('.cs-faq-item'));
        for (const item of faqItems) {
            const onClick = () => {
            item.classList.toggle('active')
        }
        item.addEventListener('click', onClick)
        }

        class GalleryFilter {
            filtersSelector = '.cs-button'
            imagesSelector = '.cs-gallery'
            activeClass = 'cs-active'
            hiddenClass = 'cs-hidden'
        
            constructor() {
                const $filters = document.querySelectorAll(this.filtersSelector)
                this.$activeFilter = $filters[0]
                this.$images = document.querySelectorAll(this.imagesSelector)
        
                this.$activeFilter.classList.add(this.activeClass)
        
                for (const $filter of $filters) {
                $filter.addEventListener('click', () => this.onClick($filter))
                }
            }
        
            onClick($filter) {
                this.filter($filter.dataset.filter)
        
                const { activeClass } = this
        
                this.$activeFilter.classList.remove(activeClass)
                $filter.classList.add(activeClass)
        
                this.$activeFilter = $filter
            }
        
            filter(filter) {
                const showAll = filter == 'all'
                const { hiddenClass } = this
        
                for (const $image of this.$images) {
                const show = showAll || $image.dataset.category == filter
                $image.classList.toggle(hiddenClass, !show)
                }
            }
            }
        
            new GalleryFilter()


// Countdown Timer
(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    // Set the target date for the event (July 4, 2024)
    const eventDate = new Date("July 4, 2024 00:00:00").getTime();

    const x = setInterval(function () {
      const now = new Date().getTime(),
            distance = eventDate - now;

      document.getElementById("days").innerText = Math.floor(distance / day);
      document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
      document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
      document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

      // Do something when the date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "Let the fun BEGIN!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
    }, 1000);
  }());


    setInterval(function(){
        $('#list').stop().animate({scrollTop:40},400,'swing',function(){
            $(this).scrollTop(0).find('span:last').after($('span:first', this));
        });
    }, 1000);



    // Video Modal

    document.addEventListener('DOMContentLoaded', function () {
        var modal = document.getElementById("videoModal");
        var btn = document.querySelector(".cs-link-icon");
        var span = document.getElementsByClassName("close")[0];
        var iframe = document.getElementById("videoIframe");
        var originalSrc = iframe.src; // Store the original src
      
        btn.onclick = function() {
          modal.style.display = "block";
          iframe.src = originalSrc + "?autoplay=1"; // Add autoplay parameter when opening modal
        }
      
        span.onclick = function() {
          modal.style.display = "none";
          iframe.src = originalSrc; // Reset to original src to stop the video
        }
      
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
            iframe.src = originalSrc; // Reset to original src to stop the video
          }
        }
      });



// Map Links

function openMap(evt, cityName) {
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Ensure the DOM is fully loaded before executing
document.addEventListener("DOMContentLoaded", function() {
    // Explicitly open the first tab
    openMap(new Event('click'), 'Location1');
});

window.addEventListener('load', function() {
    var path = window.location.pathname;
    if (!path.endsWith('/') && !path.endsWith('.html')) {
        window.location.pathname += '.html';
    }
});
      