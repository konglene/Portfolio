# My Portfolio

A simple portfolio site built with Node, React, HTML, and CSS.

## Live Demo

[https://oscar.havsberg.com](https://oscar.havsberg.com)

## Tech

* Node.js
* HTML
* CSS

## Quick start

### Prerequisites

* Node.js installed
* npm

### Install

```bash
git clone https://github.com/konglene/Portfolio.git
cd Portfolio
npm install
```

### Run

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build


```bash
npm run build
```

The build folder contains the static files.

## Project layout

* public

  * index.html
  * images
  * projects
* src
  * styles
  * data
  * App.js
  * index.js

## Add a project

* Edit src/data/projects.js or src/data/projects.json
* Add an image to src/assets
* Import or load the new entry in the Projects page
* Restart the dev server if it runs


## Troubleshooting

* Port in use

  ```bash
  PORT=3001 npm start
  ```
* Environment variables

  * Use a .env file at the project root
  * Prefix client variables with REACT\_APP\_
* Images not loading

  * Check paths relative to public
  * Use imports for images inside src

## Tests

```bash
npm test
```

## Contributing

* Fork the repo
* Create a branch named feature/your-feature
* Commit with clear messages
* Push and open a pull request

## License

MIT License
Copyright (c) 2025 kongle