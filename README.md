# Ruiquan Huang — Personal Website

Website: <https://ruiquan5514.github.io>
Built with Jekyll and al-folio, hosted on GitHub Pages.

## Where to make updates

| Content                                                            | File to edit                                                                       |
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| Homepage biography, research interests, and recruiting information | `_pages/about.md`                                                                  |
| Publications, paper links, and selected publications               | `_bibliography/papers.bib`                                                         |
| News                                                               | `_news/YYYY-MM-DD-topic.md`, one file per announcement                             |
| Courses                                                            | `_pages/teaching.md`                                                               |
| Web CV                                                             | `assets/json/resume.json`                                                          |
| Downloadable CV                                                    | `assets/pdf/Resume_Ruiquan.pdf`; configure the download filename in `_pages/cv.md` |
| Group members and photo settings                                   | `_pages/profiles.md`                                                               |
| Ruiquan's biography on the People page                             | `_pages/about_me.md`                                                               |
| Email, Google Scholar, and other profile links                     | `_data/socials.yml`                                                                |
| Homepage photo                                                     | `assets/img/prof_pic.jpg`                                                          |
| Site description, URL, and theme settings                          | `_config.yml`                                                                      |

The web CV has four sections: Basics, Work, Education, and Awards. Navigation follows About → Publications → Teaching → People → CV, controlled by each page's `nav_order`.
The web CV and PDF are separate files; updating one does not update the other.
`assets/pdf/CV-Ruiquan.pdf` is also retained as an existing personal document. The download button on the CV page uses `Resume_Ruiquan.pdf`, listed above.

## Update content on GitHub

1. Open the relevant file on GitHub and click the pencil icon to edit it. For a new announcement, use **Add file → Create new file**.
2. Edit the content or data. The page settings between the two `---` lines at the top of a Markdown file usually do not need to change.
3. Commit to a branch, open a pull request, and check the **Deploy site** and **Prettier code formatter** results.
4. Merging into `main` automatically builds and publishes the website. After the build, wait for the GitHub Pages deployment to finish.

`main` contains the source files. The generated pages are published to `gh-pages`, which does not need manual edits.
Changes limited to this README or `docs/` do not trigger a website deployment.

## Add a publication

Add a BibTeX entry to `_bibliography/papers.bib`, for example:

```bibtex
@inproceedings{unique_key,
  title={Paper title},
  author={Huang, Ruiquan and Other, Author},
  booktitle={Conference name},
  year={2026},
  selected={true},
  bibtex_show={true}
}
```

- `unique_key` must be unique. Keep existing entry keys whenever possible.
- `selected={true}` includes the paper in the homepage's selected publications. Remove that line to show it only on the Publications page.
- Publications are grouped by year. Selected publications follow the order of entries in the BibTeX file; move entire entries to reorder them.
- Entries use the full column width by default, and all authors are displayed. Keep `max_author_limit` empty in `_config.yml`.
- For a thumbnail, place an image in `assets/img/publication_preview/` (create the directory if needed) and add `preview={my-paper.png}` to the entry. Images appear to the right of the text on desktop and below it on mobile. Entries without `preview` do not reserve an empty image column. A full HTTPS image URL also works. The `enable_publication_thumbnails` setting is enabled.
- Optional link fields: `arxiv={arXiv identifier}`, `pdf={full PDF URL}`, `code={repository URL}`, and `html={paper page URL}`.
- When a paper has both a preprint and a published version, update the same entry and retain its `arxiv` and `doi` fields.
- `_data/coauthors.yml` and `_data/venues.yml` provide optional author and venue links. Routine updates usually do not require changing them.

## Add news

Create `_news/YYYY-MM-DD-topic.md` with the actual announcement date and content:

```markdown
---
layout: post
date: YYYY-MM-DD
inline: true
related_posts: false
---

Write the announcement here. Markdown links are supported.
```

Use a valid calendar date. The homepage displays the three most recent announcements by default; adjust `announcements.limit` in `_pages/about.md` to change this.
Keep the `permalink` field in existing announcements when editing their content so their original URLs continue to work.

## Update courses, group members, and the CV

- **Courses**: Edit `_pages/teaching.md`. Move a course to Past Courses after the semester ends. Course titles can link to course websites.
- **Group members**: Copy a configuration block under `profiles` in `_pages/profiles.md`, then set the photo and biography filenames. Save the biography in `_pages/member-name.md` without front matter, and place the photo in `assets/img/`.
- **Web CV**: Edit `assets/json/resume.json`. Keep the JSON valid and avoid trailing commas. If only the graduation year is known, set `endDate` without a start date.
- **Legacy CV data**: The unused YAML data is retained at `docs/archive/cv-legacy.yml` for reference and is excluded from the published website.

## Local preview and formatting

Requirements: Ruby 3.3.5, Bundler, Node.js 22, Python 3, and ImageMagick.

```bash
bundle install
npm ci
python3 -m pip install -r requirements.txt
bundle exec jekyll serve --host 127.0.0.1
```

The preview is available at <http://127.0.0.1:4000>. Restart the preview server after changing `_config.yml`.

```bash
npm run format
npm run format:check
JEKYLL_ENV=production bundle exec jekyll build
```

If the formatting check fails, run `npm run format` and commit the result. CI uses the same locked formatter version as the local environment.
Keep `Gemfile.lock` and `package-lock.json` committed so dependency versions remain consistent.

## Build checks and directory layout

- **Deploy site** builds the website and checks local links in the generated pages. Pull requests run checks and save a downloadable `website` artifact; deployment runs after merging.
- **Check for broken links** checks links in maintained pages and announcements. If an external website blocks automated requests, inspect the report to distinguish an access restriction from a broken link.
- **Prettier code formatter** checks formatting.
- The existing CodeQL and accessibility workflows are retained.

`_layouts/`, `_includes/`, `_sass/`, `_plugins/`, and `assets/js/` contain the theme implementation. Routine content updates usually do not require edits there.
`docs/` contains maintenance material and is excluded from the published website. Template sample posts, projects, book pages, demo media, and theme screenshots were removed; they remain available in Git history.
The cleanup preserved the original homepage photos, favicon, personal PDFs, five navigation pages, and theme implementation.

## Theme documentation and license

This website is based on [al-folio](https://github.com/alshedivat/al-folio). For full theme documentation, see the upstream
[customization guide](https://github.com/alshedivat/al-folio/blob/main/CUSTOMIZE.md) and
[installation guide](https://github.com/alshedivat/al-folio/blob/main/INSTALL.md).
The original [MIT License](LICENSE) and theme attribution are retained.
