# Ruiquan Huang — 个人网站

网站：<https://ruiquan5514.github.io>
技术：Jekyll + al-folio，发布到 GitHub Pages。

## 日常维护：只需找到对应文件

| 要更新什么                     | 修改哪个文件                                                        |
| ------------------------------ | ------------------------------------------------------------------- |
| 首页简介、研究方向、招生信息   | `_pages/about.md`                                                   |
| 论文列表、论文链接、首页代表作 | `_bibliography/papers.bib`                                          |
| 新闻                           | `_news/YYYY-MM-DD-topic.md`，每条一个文件                           |
| 课程                           | `_pages/teaching.md`                                                |
| 网页 CV                        | `assets/json/resume.json`                                           |
| 可下载的 CV                    | `assets/pdf/Resume_Ruiquan.pdf`；下载文件名在 `_pages/cv.md` 中配置 |
| 组员名单与照片设置             | `_pages/profiles.md`                                                |
| 你的组员介绍文字               | `_pages/about_me.md`                                                |
| 邮箱、Google Scholar 等链接    | `_data/socials.yml`                                                 |
| 首页照片                       | `assets/img/prof_pic.jpg`                                           |
| 网站描述、地址、主题开关       | `_config.yml`                                                       |

网页 CV 当前显示 Basics、Work、Education、Awards 四栏。导航顺序为 About → Publications → Teaching → People → CV，由各页面的 `nav_order` 控制。
网页 CV 与 PDF 是两个独立文件，更新其中一个不会自动修改另一个。
`assets/pdf/CV-Ruiquan.pdf` 也是原有个人文件，本次保留；导航栏的 CV 下载按钮使用上表中的 `Resume_Ruiquan.pdf`。

## 最简单的更新方式

1. 在 GitHub 打开上表中的文件，点击铅笔编辑；新新闻使用 **Add file → Create new file**。
2. 修改正文或数据；Markdown 顶部两行 `---` 之间的页面配置一般不用动。
3. 提交到分支并创建 Pull Request，查看 **Deploy site** 和 **Prettier code formatter** 检查结果。
4. 合并到 `main` 后，网站会自动构建并发布。构建后还需要等待 GitHub Pages 的发布任务完成。

`main` 保存源文件；`gh-pages` 是自动生成的页面，不需要手动编辑。
仅修改本 README 或 `docs/` 不会重新发布网站。

## 添加论文

在 `_bibliography/papers.bib` 添加一条 BibTeX，例如：

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

- `unique_key` 必须唯一。已有条目的 key 尽量保留。
- `selected={true}` 会将这篇论文加入首页代表作；删掉这一行就只显示在 Publications。
- 论文按年份分组。首页代表作沿用 BibTeX 中的条目顺序，可移动完整条目调整顺序。
- 首页代表作和论文列表默认使用完整列宽；所有作者直接显示（`_config.yml` 中的 `max_author_limit` 留空）。
- 缩略图：将图片放到 `assets/img/publication_preview/`（目录不存在时新建），在论文条目中添加 `preview={my-paper.png}`。桌面上图片位于文字右侧，手机上位于文字下方；没有 `preview` 的论文不会预留空白。也可使用图片的完整 HTTPS 地址。缩略图开关 `enable_publication_thumbnails` 已启用。
- 可选链接字段：`arxiv={论文编号}`、`pdf={完整PDF地址}`、`code={代码仓库地址}`、`html={论文页面地址}`。
- 同一论文有预印本和正式发表版本时，通常更新同一个条目，保留 `arxiv` 和 `doi` 即可。
- `_data/coauthors.yml` 和 `_data/venues.yml` 是可选的作者、会议链接配置，平时可以不改。

## 添加新闻

新建 `_news/YYYY-MM-DD-topic.md`，填写真实日期和新闻内容：

```markdown
---
layout: post
date: YYYY-MM-DD
inline: true
related_posts: false
---

新闻正文，可使用 Markdown 链接。
```

日期必须有效。首页默认显示最近 3 条，可在 `_pages/about.md` 的 `announcements.limit` 调整。
旧新闻的 `permalink` 用来保留原来的网址，更新正文时保留它。

## 更新课程、组员和 CV

- **课程**：编辑 `_pages/teaching.md`；学期结束后将课程移动到 Past Courses，可给课程名加上课程网站链接。
- **组员**：在 `_pages/profiles.md` 的 `profiles` 下复制一个配置块，填写照片文件名和介绍文件名；介绍另存为 `_pages/member-name.md`（不加页面配置），照片放在 `assets/img/`。
- **网页 CV**：只编辑 `assets/json/resume.json`。保持合法 JSON，不要在最后一个字段后加逗号。只知道毕业年份时，仅填写 `endDate` 即可。
- **旧 CV 数据**：未被网页使用的 YAML 已移到 `docs/archive/cv-legacy.yml`，供查阅，不会发布。

## 本地预览与格式整理

需要 Ruby 3.3.5、Bundler、Node.js 22、Python 3 和 ImageMagick。

```bash
bundle install
npm ci
python3 -m pip install -r requirements.txt
bundle exec jekyll serve --host 127.0.0.1
```

预览地址为 <http://127.0.0.1:4000>。修改 `_config.yml` 后需重启预览。

```bash
npm run format
npm run format:check
JEKYLL_ENV=production bundle exec jekyll build
```

格式检查失败时运行 `npm run format` 并提交结果。CI 使用仓库锁定的版本，与本地一致。
提交 `Gemfile.lock` 和 `package-lock.json` 可以保持依赖一致。

## 构建检查与目录约定

- **Deploy site**：构建页面、检查生成页面的本地链接；Pull Request 只检查并保存可下载的 `website` 构建产物，合并后才发布。
- **Check for broken links**：检查实际维护的页面和新闻中的链接。外部网站拒绝自动访问时，应查看报告区分访问限制与失效链接。
- **Prettier code formatter**：检查格式。
- 原有 CodeQL 和可访问性检查继续保留。

`_layouts/`、`_includes/`、`_sass/`、`_plugins/`、`assets/js/` 是主题实现，日常内容更新一般不需要修改。
`docs/` 是维护资料，不会发布。模板示例博客、示例项目、读书页、演示媒体和主题截图已删除，可从 Git 历史找回。
本次清理保留原有主页照片、favicon、个人 PDF、五个导航页面和主题实现。

## 主题参考与许可

基于 [al-folio](https://github.com/alshedivat/al-folio)。主题的完整使用说明见上游的
[自定义指南](https://github.com/alshedivat/al-folio/blob/main/CUSTOMIZE.md) 和
[安装指南](https://github.com/alshedivat/al-folio/blob/main/INSTALL.md)。
保留原项目 [MIT License](LICENSE) 及页面主题署名。
