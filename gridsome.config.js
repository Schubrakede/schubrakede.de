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

  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/blog/**/*.md",
        typeName: "Blog",
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
        path: "content/pages/**/*.md",
        typeName: "Pages",
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
