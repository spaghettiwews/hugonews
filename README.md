# hugonews 
*a hugo theme for a personal bookmarking website*

**hugonews** is a [Hugo](https://gohugo.io) theme that I primarily use for my absurd bookmarking website - https://bookmarks.wews.co. Its aesthetic was inspired by that of [Hacker News](https://news.ycombinator.com)

## Getting Started

### Prerequisites
1. Hugo
1. Git

### Usage

1. Create a new Hugo website 
    ```bash
    hugo new site <sitename>
    ```

2. Initialise the website source folder as a Git repository
    ```bash
    cd <sitename> && git init
    ```

3. Add the hugonews theme as a submodule to your website repo
    ```bash
    git submodule add https://github.com/spaghettiwews/hugonews.git themes/hugonews
    ```

4. Set your site theme to hugonews by editing `config.toml` and adding the following line **`theme = "hugonews"`**
    ```markdown
    baseURL = "http://example.org/"
    languageCode = "en-us"
    title = "My New Hugo Site"
    theme = "hugonews"
    ```

5. Now, from the root of your website, create a bookmark item using the `hugo` CLI
    ```bash
    hugo new items/dark-mode-website-css.md
    ```

6. Edit the newly created file to add the necessary metadata. The file will be in your content directory in `/content/items/`
    ```markdown
    ---
    title: "Dark mode in a website with CSS"
    date: 2019-10-09T12:13:32+02:00
    itemurl: "https://tombrow.com/dark-mode-website-css"
    sites: "tombrow.com"
    tags: ["frontend", "css", "dark mode"]
    draft: false
    ---
    ```
7. Repeat steps 5 and 6 to add new/more bookmarks.
8. Build the site using `hugo` and deploy the `/public` folder following any one of the guides that can be found in the Hugo documentation ([Hosting & Deployment](https://gohugo.io/hosting-and-deployment/)).


