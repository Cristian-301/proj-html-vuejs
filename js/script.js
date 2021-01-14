var app = new Vue({
  el: "#container",
  data: {
    logo: "img/logo-dark.png",
    navMenu: [
      {
        name: "Home",
        link: "https://github.com/"
      },
      {
        name: "Landing",
        link: "https://google.com/",
        dropdown: "fas fa-chevron-down"
      },
      {
        name: "Pages",
        link: "https://www.wallpaperflare.com/",
        dropdown: "fas fa-chevron-down"
      },
      {
        name: "Docs",
        link: "https://vuejs.org/",
        dropdown: "fas fa-chevron-down"
      },
    ],
    navButtons: [
      {
        icon: "fab fa-github",
        link: "https://github.com/"
      },
      {
        icon: "fab fa-stack-overflow",
        link: "https://stackoverflow.com/"
      },
      {
        icon: "far fa-user",
        link: "#"
      }
    ],
    footerLogo: "img/logo-light.png",
    socials: [
      {
        icon: "fab fa-facebook-f",
        link: "https://www.facebook.com/"
      },
      {
        icon: "fab fa-instagram",
        link: "https://www.instagram.com/"
      },
      {
        icon: "fab fa-twitter",
        link: "https://www.twitter.com/"
      },
      {
        icon: "fab fa-linkedin-in",
        link: "https://www.linkedin.com/"
      },
    ],
    companyLinks: [
      {
        name: "About Us",
        link: "http://boolean.careers/"
      },
      {
        name: "Services",
        link: "http://boolean.careers/"
      },
      {
        name: "Team",
        link: "http://boolean.careers/"
      },
      {
        name: "Pricing",
        link: "http://boolean.careers/"
      },
      {
        name: "Project",
        link: "http://boolean.careers/"
      },
      {
        name: "Careers",
        link: "http://boolean.careers/"
      },
      {
        name: "Blog",
        link: "http://boolean.careers/"
      },
      {
        name: "Login",
        link: "http://boolean.careers/"
      },
    ],
    usefullLinks: [
      {
        name: "Terms of Services",
        link: "https://www.chess.com/home"
      },
      {
        name: "Privacy Policy",
        link: "https://www.chess.com/home"
      },
      {
        name: "Documentation",
        link: "https://www.chess.com/home"
      },
      {
        name: "Changelog",
        link: "https://www.chess.com/home"
      },
      {
        name: "Components",
        link: "https://www.chess.com/home"
      },
    ],
    cards: [
      {
        image: "img/american-ex.png",
        link: "https://www.americanexpress.com/it-it/"
      },
      {
        image: "img/discover.png",
        link: "https://www.discover.com/"
      },
      {
        image: "img/master-card.png",
        link: "https://www.mastercard.it/it-it.html"
      },
      {
        image: "img/paypal.png",
        link: "https://www.paypal.com/it/home"
      },
      {
        image: "img/visa.png",
        link: "https://www.visaitalia.com/"
      },
    ]
  }
})
