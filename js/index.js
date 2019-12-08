const siteContent = {
    nav: {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    cta: {
        h1: "DOM Is Awesome",
        button: "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content":
            "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content":
            "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content":
            "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content":
            "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content":
            "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
    },
    contact: {
        "contact-h4": "Contact",
        address: "123 Way 456 Street Somewhere, USA",
        phone: "1 (888) 888-8888",
        email: "sales@greatidea.io"
    },
    footer: {
        copyright: "Copyright Great Idea! 2018"
    }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const [
    navLinkServices,
    navLinkProduct,
    navLinkVision,
    navLinkFeatures,
    navLinkAbout,
    navLinkContact
] = document.querySelectorAll("a");

const ctaHeading = document.querySelector(".cta-text h1");
const getStartedBtn = document.querySelector(".cta-text button");
const ctaImg = document.querySelector("#cta-img");

const [
    contentFeatures,
    contentAbout,
    contentServices,
    contentProduct,
    contentVision
] = document.querySelectorAll(".text-content h4");

const [
    contentFeaturesP,
    contentAboutP,
    contentServicesP,
    contentProductP,
    contentVisionP
] = document.querySelectorAll(".text-content p");

const midImg = document.querySelector(".middle-img");

[
    navLinkServices.textContent,
    navLinkProduct.textContent,
    navLinkVision.textContent,
    navLinkFeatures.textContent,
    navLinkAbout.textContent,
    navLinkContact.textContent
] = Array.from(Object.values(siteContent.nav));

ctaHeading.textContent = siteContent.cta.h1;
getStartedBtn.textContent = siteContent.cta.button;
ctaImg.setAttribute("src", siteContent.cta["img-src"]);

contentFeatures.textContent = siteContent["main-content"]["features-h4"];
contentAbout.textContent = siteContent["main-content"]["about-h4"];
contentServices.textContent = siteContent["main-content"]["services-h4"];
contentProduct.textContent = siteContent["main-content"]["product-h4"];
contentVision.textContent = siteContent["main-content"]["vision-h4"];

contentFeaturesP.textContent = siteContent["main-content"]["features-content"];
contentAboutP.textContent = siteContent["main-content"]["about-content"];
contentServicesP.textContent = siteContent["main-content"]["services-content"];
contentProductP.textContent = siteContent["main-content"]["product-content"];
contentVisionP.textContent = siteContent["main-content"]["vision-content"];

midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
