const PostcssNested = require("postcss-nested");

module.exports = {
  siteName: "Schubrakede",
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: [
        // ...global plugins
      ]
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [PostcssNested]
      }
    }
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/blog/*.md",
        typeName: "Blog",
        route: "/blog/:headline",
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/pages/*.md",
        typeName: "Site",
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/landingpage/**/*.md",
        typeName: "Landingpage",
        route: "/l/:headline",
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    }
  ]
};
