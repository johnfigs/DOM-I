const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//images 

let codeSnipImg = document.getElementById("cta-img");
codeSnipImg.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//h1 

const h1 = document.querySelector("h1");
h1.textContent = siteContent["cta"]["h1"]


// button

const butt = document.querySelector(".cta .cta-text button");
butt.textContent = siteContent["cta"]["button"]

//nav anchor

const firstAnchor = document.querySelector(".container header nav a");
firstAnchor.textContent = siteContent["nav"]["nav-item-1"]

const secondAnchor = firstAnchor.nextElementSibling;
secondAnchor.textContent = siteContent["nav"]["nav-item-2"];

const thirdAnchor = secondAnchor.nextElementSibling;
thirdAnchor.textContent = siteContent["nav"]["nav-item-3"]

const fourthAnchor = thirdAnchor.nextElementSibling;
fourthAnchor.textContent = siteContent["nav"]["nav-item-4"]

const fifthAnchor = fourthAnchor.nextElementSibling;
fifthAnchor.textContent = siteContent["nav"]["nav-item-5"]

const sixthAnchor = fifthAnchor.nextElementSibling;
sixthAnchor.textContent = siteContent["nav"]["nav-item-6"]

//top content text containers

//selecting first text-content div

const tc1 = document.querySelector(".top-content .text-content");

//selecting h4 + p inside above element

const first_h4 = tc1.querySelector("h4");
first_h4.textContent = siteContent["main-content"]["features-h4"]

const first_p = tc1.querySelector("p");
first_p.textContent = siteContent["main-content"]["features-content"]

//selecting second text-content div

const tc2 = tc1.nextElementSibling;

//selecting h4 + p inside second element selected above

const second_h4 = tc2.querySelector("h4");
second_h4.textContent = siteContent["main-content"]["about-h4"]

const second_p = tc2.querySelector("p");
second_p.textContent = siteContent["main-content"]["about-content"]

//bottom content text containers

//selecting first text-content div

const bc1 = document.querySelector(".bottom-content .text-content");

//select h4 + p from above element

const bfirst_h4 = bc1.querySelector("h4");
bfirst_h4.textContent = siteContent["main-content"]["services-h4"]

const bfirst_p = bc1.querySelector("p");
bfirst_p.textContent = siteContent["main-content"]["services-content"]

//selecting second text-content div

const bc2 = bc1.nextElementSibling;

//select h4 + p of above element

const bc2_h4 = bc2.querySelector("h4");
bc2_h4.textContent = siteContent["main-content"]["product-h4"]

const bc2_p = bc2.querySelector("p")
bc2_p.textContent = siteContent["main-content"]["product-content"]

//selecting third text-content div
const bc3 = bc2.nextElementSibling;
//select h4 + p  of above element
const bc3_h4 = bc3.querySelector("h4");
bc3_h4.textContent = siteContent["main-content"]["vision-h4"]

const bc3_p = bc3.querySelector("p");
bc3_p.textContent = siteContent["main-content"]["vision-content"]

//main content border
const mainCont = document.querySelector(".container .main-content");
mainCont.style.borderBottom = "2px solid black"

//contact section
const contact = document.querySelector(".contact")

//contact h4
const contact_h4 = contact.querySelector("h4");
contact_h4.textContent = siteContent["contact"]["contact-h4"];

//contact address
const contact_address = contact.querySelector("p");
contact_address.textContent = siteContent["contact"]["address"]

//contact phone
const contact_phone = contact_address.nextElementSibling;
contact_phone.textContent = siteContent["contact"]["phone"]

//contact email
const contact_email = contact_phone.nextElementSibling;
contact_email.textContent = siteContent["contact"]["email"]

//copyright section
const copyr = document.querySelector("footer p");
copyr.textContent = siteContent["footer"]["copyright"]

//adding nav items

const blogLink = document.createElement('a')
blogLink.textContent = 'Blog'
blogLink.href = '#'
document.querySelector('nav').appendChild(blogLink)

const originLink = document.createElement('a')
originLink.textContent = 'Origin'
originLink.href = '#'
document.querySelector('nav').prepend(originLink)

// Change the color of the navigation text to be green.

const anchors = document.querySelectorAll("a");
anchors.forEach(element => element.style.color = "green");



