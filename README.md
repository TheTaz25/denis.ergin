# Code for my Static Webseite "denis-ergin.de"

As I do not have any _secretive_ things on my personal website, I want to freely share the code that it is build upon on. Maybe as a good example, maybe as an bad example, who knows...

## Used Framework
This website is build with **Astro**! It is configured to run on a quite small *docker image* with *nginx* (alpine) to keep the resource-fingerprint quite low, for this to achieve, I did **not** opt-out of the static site generation. Inside the build-pipeline the image will be built for static delivery. This allows the nginx server to deliver the whole site with max 20 MB of RAM usage and a not measurable (at least according to my dashboards) usage of a virtual CPU (finest measurment in the dashboard is 0.1 VCPU).

## Current Plans for this Website
- [ ] Redesign current contents with a more modern design (excluding slides)
  - [x] Homepage
  - [x] Knowledge-Base (Stage 1, -> Rework to a single json file and have everything on a single page)
  - [x] Footer-Section
  - [x] Image-optimazation
  - [x] Impressum
  - [x] Basic Navigation in sub-pages
  - [ ] ~~Get rid of the "old" layout file~~
  - [x] Implement Basic SEO needs for the website
  - [x] Sitemap?
- [ ] New Content:
  - [ ] About Me
  - [ ] Project-Page
- [ ] General I18n (DE/EN)