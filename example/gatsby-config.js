module.exports = {
  pathPrefix: "/gatsby-theme-hello-friend-ng",
  plugins: [
    {
      resolve: "gatsby-theme-hello-friend-ng",
      options: {
        contentPath: "content",
        blog: {
          create: true,
          path: "posts",
          title: "Posts",
          description: "Demo page blog"
        },
        mode: {
          default: "dark",
          allowChange: true,
        },
        menuLinks: [
          {
            name: "Posts",
            link: "/posts",
          },
          {
            name: "Works",
            link: "/works",
          },
        ],
      },
    },
  ],
  siteMetadata: {
    titleTemplate: "%s – Demo Page",
    url: "https://filipkrw.github.io/gatsby-theme-hello-friend-ng",
    description: "Demo page for Hello Friend NG theme for Gatsby"
  },
  pathPrefix: "/gatsby-theme-hello-friend-ng"
}
