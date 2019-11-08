const PostcssNested = require("postcss-nested");
const postcssCustomMedia = require("postcss-custom-media");

module.exports = {
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-svg-inline-loader")
      .loader("vue-svg-inline-loader")
      .options({
        /* ... */
      });
  },
  siteName: "Schubrakede",

  siteUrl: "https:/schubrake.de",
  transformers: {
    netlify: {},
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      plugins: [
        // ...global plugins
      ]
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [postcssCustomMedia, PostcssNested]
      }
    }
  },
  plugins: [
    {
      use: "gridsome-transformer-netlify"
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        config: {
          "/blog/*": {
            changefreq: "weekly",
            priority: 0.5
          },
          "/product": {
            changefreq: "monthly",
            priority: 0.7
          }
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/blog/*.md",
        typeName: "Blog",
        route: "/blog/:year/:month/:day/:headline/",
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
        path: "content/pages/*.yml",
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
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/author/*.md",
        typeName: "Author",
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
        path: "content/products/*.md",
        typeName: "Product",
        route: "/product/:name",
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
