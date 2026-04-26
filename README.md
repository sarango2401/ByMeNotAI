# ByMeNotAI

A personal blog about science, technology, and literature — written by a human, no AI text.

Built with **Jekyll**, designed to be hosted on **GitHub Pages** for free.

---

## Deploy to GitHub Pages (5 minutes)

1. **Create a public GitHub repository** at https://github.com/new  
   Name it `bymenotai` or anything you like. Do not initialize with a README.

2. **Push these files** to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial blog"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**  
   In your repo: **Settings → Pages → Source → Deploy from branch → main / root → Save**

4. Your blog will be live at `https://YOUR-USERNAME.github.io/REPO-NAME/` in about 2 minutes.

GitHub Pages runs Jekyll automatically — no build step needed on your end.

---

## Writing a new post

Create a file in `_posts/` named exactly like this:

```
_posts/YYYY-MM-DD-your-post-slug.md
```

Start every post with this front matter:

```markdown
---
layout: post
title: "Your post title here"
date: 2025-05-01
topic: Science
excerpt: "One sentence describing the post — shown on the homepage."
---

Your post content goes here, in plain Markdown.
```

`topic` must be one of: `Science`, `Technology`, `Literature`  
(or add a new pill button in `index.html` to support a new topic).

That is all. Commit and push — GitHub Pages rebuilds the site automatically.

---

## File structure

```
bymenotai/
├── _config.yml          ← Site settings (title, URL, etc.)
├── _layouts/
│   ├── default.html     ← Base HTML wrapper (header + footer)
│   └── post.html        ← Single post layout
├── _includes/
│   ├── header.html      ← Site header
│   └── footer.html      ← Site footer
├── _posts/
│   ├── 2025-04-08-transistors.md   ← Example posts (edit or delete)
│   ├── 2025-03-12-entropy.md
│   └── 2025-02-20-borges.md
├── assets/
│   └── css/main.css     ← All styles
├── index.html           ← Homepage
├── about.md             ← About page (edit this!)
└── README.md            ← This file
```

---

## Customising

- **Site title & description** → `_config.yml`
- **Your about text** → `about.md`
- **Adding a new topic** → Add a `<button class="pill" data-topic="YourTopic">` in `index.html` and use `topic: YourTopic` in your post front matter
- **Colors & fonts** → `assets/css/main.css` (look for the `:root` section at the top)
