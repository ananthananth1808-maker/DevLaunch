# DevLaunch Portfolio

A responsive React portfolio template built with Vite and Tailwind CSS v4. Most
site content lives in one file so you can personalize the template without
editing each component.

## Install and run

```sh
npm install
npm run dev
```

Create a production build and preview it locally:

```sh
npm run build
npm run preview
```

Run the code checks:

```sh
npm run lint
```

## Personalize the portfolio

Edit [`src/data/portfolio.js`](./src/data/portfolio.js). The file contains the
brand, display name, initials, role, headline, description, availability,
email, social profiles, about content, skills, and projects. Replace all sample
identity and example project content before publishing.

### Add a profile photo

1. Add your own image to `public/`, for example `public/profile.jpg`.
2. Set `profileImage: "/profile.jpg"` in `src/data/portfolio.js`.
3. If the path is empty or the image cannot load, the layout displays your
   initials instead. No remote image is required.

### Add a resume

1. Add your PDF to `public/`, for example `public/resume.pdf`.
2. Set `resumeUrl: "/resume.pdf"` in `src/data/portfolio.js`.

The navbar resume download only appears when `resumeUrl` has a value. Keep it
`null` until the file is present.

### Edit skills and projects

- Add or remove skill objects in `skills`. Each item has a `name`, `category`,
  and optional icon key. Categories are generated from the data, so add any
  category you need. Unrecognized icon keys safely use a general code icon.
- Add project objects in `projects` with a `title`, filter `category`
  (`Web Apps`, `UI/UX`, or `Full Stack`), `description`, `tags`, and optional
  `preview`, `previewImage`, `demoUrl`, and `sourceUrl`.
- Put local screenshots in `public/` and use paths such as
  `previewImage: "/screenshots/project.png"`. The built-in visual previews
  remain available when no screenshot is configured or one cannot load.
- Missing demo/source URLs are presented as non-clickable “Not configured”
  labels. The initial cards are explicitly marked sample concepts; replace
  them and remove `isSample` when you add real work.
- Project filter options are in `src/components/Projects.jsx`; add a matching
  filter if you introduce another category.

### Contact and social links

Replace `hello@example.com` with your real email. Update the GitHub and
LinkedIn homepage URLs with your profile links. The contact email uses a
`mailto:` link; this template intentionally has no pretend message form.

## Choose and customize a theme

Use the accessible **Theme** selector in the navbar. On mobile, the same
selector is available in the navbar and in the expanded navigation menu.
Changing the selection updates the page immediately and persists the theme in
`localStorage` under `devlaunch-theme`. The saved theme is applied in the
document head before the app renders to avoid a flash of the default theme.
Without a saved preference, the page starts in Minimal Pro.

The three themes are:

- **Minimal Pro** — bright white and light-grey surfaces, restrained azure,
  understated borders, and generous whitespace.
- **Creative Studio** — expressive blue gradients, a more distinctive hero,
  floating details, and bolder project and feature cards.
- **Dark Pro** — deep navy surfaces, electric-blue highlights, glass-like
  cards, and high-contrast type.

A small three-color swatch beside the desktop selector previews the active
palette. To customize the choices and their labels, edit `src/data/themes.js`.
To restyle a palette, edit the matching
`:root[data-theme="minimal-pro"]`, `:root[data-theme="creative-studio"]`, or
`:root[data-theme="dark-pro"]` variables and theme-specific rules in
`src/index.css`. Keep each theme's `id` in sync between the JavaScript theme
configuration and the CSS selectors.

## Deploy

Run `npm run build` and deploy the generated `dist/` directory to any static
host that supports Vite output, such as GitHub Pages, Netlify, or Vercel.
Configure the host's build command as `npm run build` and its output directory
as `dist`. Set the correct base path in `vite.config.js` if deploying under a
subpath.
