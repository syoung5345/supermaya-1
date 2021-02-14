module.exports = {
  name: "Supermaya",
  shortDesc:
    "An 11ty starter kit designed to help you add rich features to a site without a complicated build process.",
  url: "",
  authorEmail: "mike@madebymike.com.au",
  authorHandle: "@MikeRiethmuller",
  authorName: "Mike",
  postsPerPage: 4,
  socialImage: "/img/social.jpg",
  theme: {
    primary: {
      background: "#e8e3e2",
      text: "#443235",
      highlight: "#916a70",
    },
    secondary: {
      background: "#916a70",
      text: "whitesmoke",
      highlight: "whitesmoke",
    },
  },

  keystone: {
    comments: true,
    bookmarks: true,
    claps: true,
    login: true,
  },
  // Critical CSS results in much slower build times and uses a lot of system resources
  // turn on in production :)
  // See `site/transforms/critical-css-transform.js` for more details
  criticalCSS: false,
};
