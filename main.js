// wow js start
  new WOW().init();
// wow js end

// nav bar js start
let menu = document.querySelector('.menu')
let close = document.querySelector('.close')
let navUl = document.querySelector('header nav ul');
let navLink = document.querySelectorAll('header nav ul li a');

menu.addEventListener('click',()=>{
  navUl.classList.toggle('active');

})
close.addEventListener('click',()=>{
navUl.classList.toggle('active');
})

let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if(currentScroll===0){
    header.style.backgroundColor = '#1c1c1c1a';
    header.style.boxShadow = 'none';
  }
  else {
    header.style.backgroundColor = 'white';
    header.style.boxShadow = '0 0 10px var(--border-light)';
  }
  if (currentScroll > lastScrollTop) {
    header.classList.add('active')
  } else {
    header.classList.remove('active')
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// nav bar js end



//whatspp open js start

document.querySelector(".whatapp").addEventListener("click", function () {

  const phone = "+918829825677"; 
  const message = "Hello";

  const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

  // open in new tab
  window.open(url, "_blank");

});
//whatspp open js end

//slider run js start
function silderFun(){
      $('.services-card-main').owlCarousel({
          loop:true,
          margin:20,
          nav:false,
          dots:false,
          autoplay:true,
          autoplayTimeout:3000,
          responsive:{
              0:{ items:1 },
        480:{ items:1 },  
        768:{ items:2 },
        1024:{ items:3 }
          }
      })


      $('.solutions-card-main').owlCarousel({
          loop:true,
          // center:true,
          items:2,
          margin:20,
          nav:true,
          dots:true,
          autoplay:true,
          autoplayTimeout:3000,
          autoplayHoverPause: true,  // Pause on hover (better UX)
          smartSpeed: 500,  
          URLhashListener:true, 
          responsiveClass: true,        // Smooth transition speed
          navText: [
        '<img loading="lazy" src="assets/images/icons/arrow-left.png" alt="Prev" width="24" height="24">',
          '<img loading="lazy" src="assets/images/icons/arrow-right.png" alt="Next" width="24" height="24">'
      ],
          responsive:{
        0:{ items:1 },
        480:{ items:1 },
        768:{ items:2 },
        1024:{ items:3 },
        1440:{ items:3 },
        2000:{ items:3 }
      }
      })

       $('.type-web-app-container').owlCarousel({
          loop:true,
          // center:true,
          items:2,
          margin:20,
          nav:true,
          dots:true,
          autoplay:true,
          autoplayTimeout:3000,
          autoplayHoverPause: true,  // Pause on hover (better UX)
          smartSpeed: 500,  
          URLhashListener:true, 
          responsiveClass: true,        // Smooth transition speed
          navText: [
        '<img loading="lazy" src="assets/images/icons/arrow-left.png" alt="Prev" width="24" height="24">',
          '<img loading="lazy" src="assets/images/icons/arrow-right.png" alt="Next" width="24" height="24">'
      ],
          responsive:{
        0:{ items:1 },
        480:{ items:1 },
        768:{ items:2 },
        1024:{ items:3 },
        1440:{ items:3 },
        2000:{ items:3 }
      }
      })

      $('.technology-stack-tab').owlCarousel({
          
          margin:20,
          nav:false,
          dots:false,
          autoplay:true,
          autoplayTimeout:3000,
          autoplayHoverPause: true, 
          smartSpeed: 500,  
          URLhashListener:true,         // Smooth transition speed
          navText: [
        '<img loading="lazy" src="assets/images/icons/arrow-left.png" alt="Prev" width="24" height="24">',
          '<img loading="lazy" src="assets/images/icons/arrow-right.png" alt="Next" width="24" height="24">'
      ],
        responsive:{
        0:{ items:1 },
        480:{ items:4 },
        768:{ items:4 },
        1024:{ items:4 },
        1440:{ items:4 },
        2000:{ items:5 }
      }
      })


      $('.industries-card-main').owlCarousel({
          loop:true,
          margin:20,
          nav:false,
          dots:false,
          autoplay:true,
          center:true,
          autoplayTimeout:3000,
          autoplayHoverPause: true,
          smartSpeed: 500,  
          URLhashListener:true,  
            items:2,    
          navText: [
        '<img loading="lazy" src="assets/images/icons/arrow-left.png" alt="Prev" width="24" height="24">',
          '<img loading="lazy" src="assets/images/icons/arrow-right.png" alt="Next" width="24" height="24">'
      ],
        responsive:{
        0:{ items:1 },
        480:{ items:1 },
        768:{ items:2 },
        1024:{ items:3 },
        1440:{ items:4 },
        2000:{ items:5 }
      }
      })
      //  $('.projects').owlCarousel({
      //     loop:true,
      //     margin:20,
      //     nav:false,
      //     dots:false,
      //     autoplay:true,
      //     center:true,
      //     autoplayTimeout:3000,
      //     autoplayHoverPause: true,
      //     smartSpeed: 500,  
      //     URLhashListener:true,  
      //       items:1,    
      //     navText: [
      //   '<img loading="lazy" src="assets/images/icons/arrow-left.png" alt="Prev" width="24" height="24">',
      //     '<img loading="lazy" src="assets/images/icons/arrow-right.png" alt="Next" width="24" height="24">'
      // ],
       
      // })
}


$(window).on('load resize', silderFun);
//slider run js end

//link button add
document.querySelectorAll('.contact-us-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const contactSection = document.getElementById('contact-us');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
//link button add end

function showMessages(){
  const messageBox = document.getElementById("messageBox");
  messageBox.style.display = 'block'
}
function closeMessage(){
   const messageBox = document.getElementById("messageBox");
  messageBox.style.display = 'none'
}

function toggleChat() {
  const chat = document.getElementById("chatBox");
  chat.style.display = chat.style.display === "flex" ? "none" : "flex";
  closeMessage()
  closePopup()
}


function closePopup() {
  document.getElementById("popup").style.display = "none";
}
setTimeout(() => {
  openPopup()
}, 2500);

setTimeout(() => {
  showMessages()
}, 4500);
function openPopup(){
  document.getElementById("popup").style.display = 'flex'
}
// Tabs logic for .technology-stack start
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.technology-stack-container');
    if (!container) return;

    const tabButtons = container.querySelectorAll('.technology-stack-button');
    const tabPanels  = container.querySelectorAll('.technology-stack-tab');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.textContent.trim().toLowerCase(); // "Frontend" / "Backend"

            // active button
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // active tab content
            tabPanels.forEach(panel => {
                const isMatch = panel.classList.contains(target); // .frontend / .backend
                panel.style.display = isMatch ? 'block' : 'none';
            });
        });
    });

    // optional: set default tab (first button)
    if (tabButtons.length) {
        tabButtons[0].click();
    }
});
// Tabs logic for .technology-stack end



// location js code start
const mapContainer = document.querySelector('.map-main')
  // Ensure element has height
 
  var map = L.map(mapContainer).setView([26.8932052109276, 75.74315267597115], 15);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
  }).addTo(map);

  // Marker
  const marker = L.marker([26.8932052109276, 75.74315267597115])
    .addTo(map)
    .bindTooltip("Zeen Web Solution", {
        permanent: true,
        direction: "top"
    });

  // Click only on marker (better UX)
  marker.on('click', function () {
      copyAddress();
  });

  function copyAddress() {
      const text = "Baba Market, Jaipur, Rajasthan";

      navigator.clipboard.writeText(text)
          .then(() => {
              console.log("Copied!"); // better than alert
          })
          .catch(err => {
              console.error(err);
          });
  }

  // Fix rendering issues
  setTimeout(() => {
    map.invalidateSize();
  }, 200);




// location js code end

  const accordionItems = document.querySelectorAll(".accordion-item");
  console.log("accordionItems",accordionItems)
  accordionItems.forEach((item) => {
    const button = item.querySelector(".accordion-button");
    const collapseEl = item.querySelector(".accordion-collapse");

    item.addEventListener("mouseenter", () => {
      const bsCollapse = new bootstrap.Collapse(collapseEl, {
        toggle: true,
      });
    });

    item.addEventListener("mouseleave", () => {
      const bsCollapse = bootstrap.Collapse.getInstance(collapseEl);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    });
  });

// chatbot system message start
const chatBody = document.querySelector('.chat-body')
const userMessage = document.querySelector('.chat-footer input')
document.querySelector('.chat-message-send').addEventListener('click',chatsendMessage)
const BotM = document.createElement('div')
BotM.textContent = 'Hello 👋 How can I help you?'
chatBody.appendChild(BotM)
function chatsendMessage(){
  const userM = document.createElement('div')
  const BotM = document.createElement('div')
  BotM.textContent = 'Thanks! Our team will get back to you shortly.'
   userM.textContent = userMessage.value;
   userM.classList.add('user')
   userM.classList.add('message')
   BotM.classList.add('bot')
   BotM.classList.add('message')
  // append to chat body
  chatBody.appendChild(userM);
  
  setTimeout(()=>{

    chatBody.appendChild(BotM)
  },500)
  // clear input
  userMessage.value = '';
}
// chatbot system message end

//typing in home page start



let titleMessage = document.querySelector('title');
let originalTitle = document.title;
let notifications = document.querySelector('.notifications')
setInterval(() => {
  notifications.style.display = 'block'
  document.title =
    document.title === originalTitle
      ? '1 new message'
      : originalTitle;
}, 2000);
let typed = new Typed('#typed', {
  strings: ["Web Development", "App Development", "AI Chatbots"],
  typeSpeed: 150,
  backSpeed: 70,
  loop: true,
  showCursor: false
});

//typing in home page end

