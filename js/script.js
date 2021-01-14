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
    ]
  }
})
