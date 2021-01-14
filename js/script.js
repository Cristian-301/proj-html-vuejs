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
        link: "https://google.com/"
      },
      {
        name: "Pages",
        link: "https://www.wallpaperflare.com/"
      },
      {
        name: "Docs",
        link: "https://vuejs.org/"
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
        link: ""
      }
    ]
  }
})
