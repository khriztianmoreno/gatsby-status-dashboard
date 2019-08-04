<p align="center">
  <a href="https://khriztianmoreno.dev">
    <img alt="Gatsby Status" src="./.readme-static/gatsby-site-illustration.png" />
  </a>
</p>
<h1 align="center">
  Gatsby Status Dashboard
</h1>

<p align="center">
  <a href="https://github.com/khriztianmoreno/gatsby-status-dashboard/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Gatsby Status Dashboard is released under the MIT license." />
  </a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  <a href="https://twitter.com/intent/follow?screen_name=khriztianmoreno">
    <img src="https://img.shields.io/twitter/follow/khriztianmoreno.svg?label=Follow%20@khriztianmoreno" alt="Follow @khriztianmoreno" />
  </a>
</p>

Showing the statuses of Netlify deploys & CircleCI projects. Made with [gatsby-source-netlify](https://www.gatsbyjs.org/packages/gatsby-source-netlify/) and [gatsby-source-circleci](https://www.gatsbyjs.org/packages/gatsby-source-circleci/).

[**Demo Website**](https://k.dev)

## 🚀 Getting Started

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/khriztianmoreno/gatsby-status-dashboard)

1. **Clone a Gatsby site.**

Use the Gatsby CLI to create a new site clone this repository.

```sh
git clone new project-name git@github.com:khriztianmoreno/gatsby-status-dashboard.git
```

2. **Start developing.**

Navigate into your new site's directory and start it up.

```sh
cd project-name
gatsby develop
```

### Environment variables

You **must** have two environment variables configured in your project as the theme relies on them: `NETLIFY_ACCESS_KEY` and `CIRCLECI_KEY`. Otherwise the theme can't access information from the source plugins.

Gatsby also has [official documentation](https://www.gatsbyjs.org/docs/environment-variables/) on environment variables.

### Components

This theme doesn't setup an individual page but rather exposes two React components:

- `Info`: Displays the number of Netlify websites and CircleCI projects (e.g. "18 Websites" and "7 CircleCI Projects")

- `Grid`: Displays the sites in a card grid (using CSS Grid). The individual cards contain the name of the site, links to GitHub and CircleCI, and displays the Netlify deploy status & optionally the CircleCI status

3. **Open the code and start customizing!**

Your site is now running at `http://localhost:8000`!

If you want to learn more about how you can use a Gatsby starter that is configured with a Gatsby theme, you can checkout this [shorter](https://www.gatsbyjs.org/docs/themes/using-a-gatsby-theme/) or [longer](https://www.gatsbyjs.org/tutorial/using-a-theme/) tutorial. The tutorials don't exactly apply to this starter however the concepts are the same.

### Formatters

The Netlify API doesn't update the paths to GitHub when you e.g. change your username (it'll keep the one from the time you created the Netlify project). As the theme will use the GitHub URLs from Netlify projects to check against CircleCI (to see if it can find CircleCI projects with the same GitHub URL), they need to be the same.

Hence this theme allows to shadow a `formatters` file. It'll be used to replace words in the URL, e.g. replace `khriztianmoreno` with `khriztianmoreno`. You can find the file in `src/utils`.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on Gatsby's website](https://www.gatsbyjs.org/).

### Themes

- To learn more about Gatsby themes specifically, we recommend checking out the [theme docs](https://www.gatsbyjs.org/docs/themes/).

### General

- **For most developers, I recommend starting with the [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to Gatsby's documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Reference Guides_ and _Gatsby API_ sections in the sidebar.
