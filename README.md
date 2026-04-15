# Personal Website

A clean, single-page personal portfolio built with Next.js, TypeScript, and CSS Modules for data analyst and data scientist roles.

## Local development

1. Install Node.js 20.9 or newer.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open `http://localhost:3000`.

## Update content

All portfolio content lives in `data/siteContent.ts`.

Update these sections without touching layout code:

- `profile`
- `about`
- `education`
- `experience`
- `activities`
- `featuredProjects`
- `moreProjects`
- `contactLinks`

## Build for GitHub Pages

For a local production-style build:

```bash
npm run build
```

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the site as a static export and publishes the `out` directory to GitHub Pages. The workflow automatically sets:

- `GITHUB_PAGES=true`
- `REPO_NAME=<your repository name>`

This configures `basePath` and `assetPrefix` so the site works correctly when served from a repository URL such as `https://username.github.io/repository-name/`.
