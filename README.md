# ByMeNotAI

A personal blog about science, technology, and literature — written by a human, no AI text.

---

## How to deploy on GitHub Pages

### First-time setup

1. **Create a GitHub repository**
   - Go to https://github.com/new
   - Name it `bymenotai` (or any name you like)
   - Set it to **Public**
   - Do NOT initialize with a README (you already have one)

2. **Upload these files**
   - Drag and drop the entire contents of this folder into the repository, or use Git:
   ```bash
   git init
   git add .
   git commit -m "Initial blog setup"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/bymenotai.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - In your repository, go to **Settings → Pages**
   - Under "Source", select **Deploy from a branch**
   - Choose `main` branch and `/ (root)` folder
   - Click **Save**

4. **Your blog will be live at:**
   `https://YOUR-USERNAME.github.io/bymenotai/`
   (takes 1–2 minutes to deploy)

---

## How to write a new post

1. Duplicate `posts/example-post.html`
2. Rename it — e.g. `posts/quantum-tunneling.html`
3. Edit the file:
   - Update the `<title>` tag in `<head>`
   - Update the `<span class="post-topic">` (Science / Technology / Literature)
   - Update the `<h1 class="post-main-title">` with your title
   - Update the `<time datetime="...">` with the date
   - Write your post inside the `<div class="post-content">` section
4. Open `index.html` and add a new `<article class="post-card">` block at the top of the post grid, pointing to your new file

---

## File structure

```
bymenotai/
├── index.html          ← Homepage with post list and topic filter
├── about.html          ← About page
├── README.md           ← This file
├── css/
│   └── style.css       ← All styles
├── js/
│   └── filter.js       ← Topic filter logic
└── posts/
    └── example-post.html  ← Post template — duplicate this for new posts
```

---

## Topics

Posts belong to one of three topics, set via the `data-topic` attribute on the `<article>` card in `index.html`:

- `science`
- `technology`
- `literature`

To add a new topic, add a new `.pill` button in `index.html` and use the matching `data-topic` on your post cards.
