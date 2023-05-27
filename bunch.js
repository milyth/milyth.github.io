import { html, render } from 'https://unpkg.com/htm/preact/standalone.module.js'

/**
 * A Project to render
 * @typedef {Object} Project
 * @property {string} name
 * @property {string} description
 * @property {string[]} langs
 * @property {string} githubUrl
 */

/**
 * @type {Project[]}
 */
const PROJECTS = [
  {
    name: "Wilk",
    description: "A simple mandelbrot viewer",
    langs: ['C', 'GLSL'],
    githubUrl: "https://github.com/milyth/wilk"
  },

  {
    name: "Simple Poems",
    description: "A simple listing website, just for testing",
    langs: ['Python', 'FastAPI', `Sqlite3`],
    githubUrl: "https://github.com/milyth/simple-poems"
  }
]

const Octocat = html`<img class="octocat" src="github-mark-white.png" width=20 height=20  />`;
const Lang = ({ text }) => html`<span class="lang">${text}</span>`
/**
 * A Project HTML Element
 * @param {Object} props
 * @param {Project} props.project
 */
const Project = (props) => html`<div class="project">
  <h3 class="p-name"> ${props.project.name} </h3>
  <div class="langs">
    ${props.project.langs.map(lang => html`<${Lang} text=${lang}/>`)
  }
  </div>

  <h5 class="p-desc"> ${props.project.description} </h5>

  <div class="source">
    <a target="_blank" href=${props.project.githubUrl}>${Octocat}</a>
  </div>
</div>`


render(html`<div id="content">
  <div id="me">
    <img id="ime" src="https://github.com/milyth.png" width=200 height=200 />
    <h1 id="whoami"> I'm Milyth </h1>
  </div>

    <div id="projects">
      ${PROJECTS.map(project => html`<${Project} project=${project} />`)}
    </div>
</div>`, document.body);
