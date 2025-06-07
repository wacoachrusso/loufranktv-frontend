# LouFrank TV Frontend

This project contains the frontend code for **LouFrank TV**, a premium IPTV service offering thousands of HD channels. It is built with [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/) and [Vite](https://vitejs.dev/) with Tailwind CSS for styling.

## Development

Install dependencies and start the development server:

```bash
# install using Yarn
yarn install

# start Vite dev server
npm run dev
```

## Building

The build script generates `sitemap.xml` and `robots.txt` for SEO and then runs the Vite production build:

```bash
npm run build
```

The generated static files can be found in the `dist` directory and can be deployed to any static hosting provider.

## Linting and Testing

Basic linting is provided via ESLint:

```bash
npm run lint
```

A placeholder test script is available so that `npm test` always succeeds:

```bash
npm test
```

## License

This project is released under the MIT license.

