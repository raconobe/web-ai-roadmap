Here is how to check which SSH key you have on your Debian machine, connect and push your project to GitHub, and deploy it to **Cloudflare Pages**.

---

### Part 1: Find & Check Your SSH Keys on Debian

#### Step 1: List Existing SSH Keys and Inspect `~/.ssh/config`

Run this in your terminal (`~/Desktop/prueba`):

```bash
ls -la ~/.ssh
cat ~/.ssh/config 2>/dev/null || echo "No ~/.ssh/config file found"

```

* Look for private key files (such as `id_ed25519`, `id_rsa`, or custom key names) and their matching `.pub` files.
* Never share or commit private keys (files without `.pub`).

#### Step 2: Test Which GitHub Key / Account Is Active

Run GitHub's SSH connection test:

```bash
ssh -T git@github.com

```

If you have multiple keys or custom `Host` aliases in `~/.ssh/config`, you can also test a specific key directly or check loaded agent keys:

```bash
ssh-add -l
ssh -i ~/.ssh/id_ed25519_raco -T git@github.com

```

* A successful authentication returns a message like `Hi <username>! You've successfully authenticated, but GitHub does not provide shell access.` (note that GitHub's SSH test exits with code `1` after printing that message, which is normal).
* If you want to print the public key to add it to your GitHub account under **Settings -> SSH and GPG keys**, run:

```bash
cat ~/.ssh/id_ed25519_raco.pub

```

*(Replace `~/.ssh/id_ed25519.pub` with whichever `.pub` file you want to use.)*

---

### Part 2: Push Your VitePress Project (`~/Desktop/prueba`) to GitHub

#### Step 1: Ensure `.gitignore` Ignores Build & Dependency Folders

Make sure your `.gitignore` at `~/Desktop/prueba/.gitignore` includes `node_modules` and VitePress build/cache outputs:

```text
node_modules
docs/.vitepress/cache
docs/.vitepress/dist
.vitepress/cache
.vitepress/dist

```

#### Step 2: Initialize Git, Commit, and Push via SSH

Create a new repository on GitHub (without initializing a README if you already have local files), then run from `~/Desktop/prueba`:

```bash
git init
git add .
git commit -m "Initial VitePress roadmap site"
git branch -M main
git remote add origin git@github.com:raconobe/web-ai-roadmap.git
git push -u origin main

```

* If you use a custom `Host` alias from `~/.ssh/config` (for example `Host github-personal`), set the remote URL to `git@github-personal:<your-github-username>/<your-repo-name>.git` instead of `git@github.com:...`.

---

### Part 3: Host on Cloudflare Pages

#### Step 1: Connect Your GitHub Repository in Cloudflare

1. Sign in to the Cloudflare dashboard and go to **Workers & Pages** -> **Create application** -> **Pages** -> **Import an existing Git repository**.
2. Authorize GitHub if needed and select the repository you just pushed.

#### Step 2: Configure Build Settings for a `docs/` VitePress Layout

Because your `package.json` is at the repo root (`~/Desktop/prueba`) and your VitePress site is inside `docs/` with `npm run docs:build` (`vitepress build docs`):

* **Build command:** `npm run docs:build`
* **Build output directory:** `docs/.vitepress/dist`
* **Node version (if prompted/configured):** `20` or newer

*(Note: If you select the default `VitePress` preset in Cloudflare Pages, it may prefill `npx vitepress build` and `.vitepress/dist`—be sure to set **Build command** to `npm run docs:build` and **Build output directory** to `docs/.vitepress/dist` since your VitePress root is `docs/`.)*

#### Step 3: Deploy and Verify

1. Click **Save and Deploy**.
2. Wait for Cloudflare Pages to install dependencies, run `npm run docs:build`, and publish to your `*.pages.dev` URL.
3. Open the generated `*.pages.dev` URL in your browser and check:
* Home page hero, logo (`/logo.svg`), and feature cards load.
* Top dropdown menus (`FrontEnd`, `Backend`, `Coding Language`, `AI Development`), `About`, and `Contact` open without 404 errors.
* Per-folder sidebars and `Previous` / `Next` chapter navigation work on deployed pages.



### Official References

* **GitHub Docs (`Testing your SSH connection`):** `[https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection)`
* **Cloudflare Pages (`Deploy a VitePress site`):** `[https://developers.cloudflare.com/pages/framework-guides/deploy-a-vitepress-site/](https://developers.cloudflare.com/pages/framework-guides/deploy-a-vitepress-site/)`
* **VitePress Deployment Guide:** `[https://vitepress.dev/guide/deploy](https://vitepress.dev/guide/deploy)`