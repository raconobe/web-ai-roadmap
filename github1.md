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

```bash
git init
git add .
git commit -m "Initial VitePress roadmap site"
git branch -M main
git remote add origin git@github-raco:raconobe/web-ai-roadmap.git
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



---

Three things happened in that output:

1. **`error: remote origin already exists.`**: The repository already had an `origin` remote configured from an earlier command, so `git remote add origin` did not overwrite it.
2. **`nothing to commit, working tree clean`**: Your changes were already committed on a previous run.
3. **`git@github.com: Permission denied (publickey).`**: Git tried to connect using `git@github.com` rather than using the `github-raco` SSH host alias (or `github-raco` is not defined in `~/.ssh/config` / its public key is not added to the `raconobe` GitHub account).

---

### Step-by-Step Fix

1. **Point origin to the github-raco SSH Host Alias:** 1 min.
Update the existing `origin` remote URL so it uses `github-raco`:

```bash
git remote set-url origin git@github-raco:raconobe/web-ai-roadmap.git
git remote -v

```

*Verification:* `git remote -v` shows both `fetch` and `push` pointing to `git@github-raco:raconobe/web-ai-roadmap.git`.


2. **Verify ~/.ssh/config and Test the github-raco Alias:** 1 min.
Check your `~/.ssh/config` entry for `Host github-raco` and test SSH authentication against that alias:

```bash
cat ~/.ssh/config
ssh -T git@github-raco

```

*Verification:* `~/.ssh/config` has a `Host github-raco` block with `HostName github.com` and the matching `IdentityFile` for `raconobe`, and `ssh -T git@github-raco` authenticates without `Permission denied (publickey)`.


3. **Confirm Repository Exists on GitHub and Push:** 1 min.
Make sure `raconobe/web-ai-roadmap` already exists on the `raconobe` GitHub account, then push `main`:

```bash
git push -u origin main

```

*Verification:* The push completes cleanly and your files appear on `[https://github.com/raconobe/web-ai-roadmap](https://github.com/raconobe/web-ai-roadmap)`.


### Helpful Video & Official Docs

* **Video Walkthrough (GitHub SSH Keys & Setup on Linux):** `[https://www.youtube.com/results?search_query=github+ssh+key+setup+linux+multiple+accounts](https://www.youtube.com/results?search_query=github+ssh+key+setup+linux+multiple+accounts)`
* **GitHub Docs (`Testing your SSH connection`):** `[https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection)`
* **GitHub Docs (`Managing remote repositories`):** `[https://docs.github.com/en/get-started/git-basics/managing-remote-repositories](https://docs.github.com/en/get-started/git-basics/managing-remote-repositories)`


-------

Your `~/.ssh/config` defines the host alias as **`github.com-raco`**, not `github-raco`:

```sshconfig
Host github.com-raco
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_raco
    IdentitiesOnly yes

```

Because `github-raco` isn't in `~/.ssh/config`, SSH tried to resolve `github-raco` as a literal DNS hostname and returned `Could not resolve hostname github-raco: Name or service not known`.

### Fix & Push Commands

Run these complete commands from your repo directory (`~/Desktop/prueba` or `~/Desktop/web-ai-roadmap`, whichever folder holds your `.git` repo):

```bash
git remote set-url origin git@github.com-raco:raconobe/web-ai-roadmap.git
git remote -v
ssh -T git@github.com-raco
git add .
git commit -m "Add README and push VitePress roadmap"
git branch -M main
git push -u origin main

```

### Verification

1. **`git remote -v`** prints `git@github.com-raco:raconobe/web-ai-roadmap.git` for both `fetch` and `push`.
2. **`ssh -T git@github.com-raco`** authenticates against GitHub using `~/.ssh/id_ed25519_raco` without a hostname resolution error.
3. **`git push -u origin main`** pushes `main` to `[https://github.com/raconobe/web-ai-roadmap](https://github.com/raconobe/web-ai-roadmap)` (assuming the repository already exists on the `raconobe` GitHub account and `~/.ssh/id_ed25519_raco.pub` is added to that account).

### Official Reference

* **GitHub Docs (`Testing your SSH connection`):** `[https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection)`
* **GitHub Docs (`Managing remote repositories`):** `[https://docs.github.com/en/get-started/git-basics/managing-remote-repositories](https://docs.github.com/en/get-started/git-basics/managing-remote-repositories)`



----


The difference was a single dot (`.com`) in the **SSH Host alias** name:

* **What failed earlier:** `git@github-raco:...` — your `~/.ssh/config` had no `Host github-raco` entry, so SSH treated `github-raco` as a literal domain name and failed DNS lookup (`Could not resolve hostname github-raco: Name or service not known`).
* **What worked:** `git@github.com-raco:...` — this matched `Host github.com-raco` in your `~/.ssh/config`, which told SSH to connect to `HostName github.com` as user `git` using `~/.ssh/id_ed25519_raco` (`IdentitiesOnly yes`).

### Why That Alias Matters With Two GitHub Accounts

Because both `github.com-rco` and `github.com-raco` point to `HostName github.com`, naming the alias `github.com-raco` gives SSH a unique label so it picks `~/.ssh/id_ed25519_raco` for `raconobe` repositories instead of trying `~/.ssh/id_ed25519_rco` or other keys.

### Official Reference

* **OpenSSH `ssh_config` (`Host` & `IdentityFile`):** `[https://man.openbsd.org/ssh_config](https://man.openbsd.org/ssh_config)`
* **GitHub Docs (`Multiple SSH keys / Managing remote repositories`):** `[https://docs.github.com/en/get-started/git-basics/managing-remote-repositories](https://docs.github.com/en/get-started/git-basics/managing-remote-repositories)`



---



Your SSH host configuration in `~/.ssh/config` is **working and ok to keep as-is**—your push to `raconobe/web-ai-roadmap` succeeded using `git@github.com-raco:...`.

Here is what your `~/.ssh/config` looks like right now:

```sshconfig
# Work GitHub Account (rco)
Host github.com-rco
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_rco
    IdentitiesOnly yes

# Personal GitHub Account (raco)
Host github.com-raco
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_raco
    IdentitiesOnly yes

```

### When You Don't Need to Change Anything

* You already set `origin` to `git@github.com-raco:raconobe/web-ai-roadmap.git` and pushed cleanly.
* `IdentitiesOnly yes` is already set on both entries, which prevents SSH from offering unrelated keys and hitting GitHub's authentication attempt limit when managing multiple accounts.

### Two Optional Checks / Improvements (Only If You Want Them)

1. **Verify `id_ed25519_raco` is separate from `id_ed25519_rco`:** Both blocks currently point to `~/.ssh/id_ed25519_raco`. Since your push worked, `~/.ssh/id_ed25519_raco` is valid and registered on your `raconobe` GitHub account—just make sure your `rco` account has its own key if you use `github.com-rco`.
2. **Add `AddKeysToAgent yes` (optional convenience):** If you don't want to type your key passphrase repeatedly during a session, you can add `AddKeysToAgent yes` inside each `Host` block, though it isn't required if your current setup already works smoothly.

### Quick Verification Whenever You Push Later

Run `git remote -v` inside your repo to confirm it still uses `git@github.com-raco:raconobe/web-ai-roadmap.git`, and `git push` will use that alias automatically.

### Official Reference

* **OpenSSH `ssh_config` (`IdentitiesOnly` & `IdentityFile`):** `[https://man.openbsd.org/ssh_config](https://man.openbsd.org/ssh_config)`
* **GitHub Docs (`Generating a new SSH key and adding it to the ssh-agent`):** `[https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)`

---
web-ai-roadmap 

Not quite—the **build command** and **output directory** are the real keys when deploying a static site like VitePress to a hosting service, though `package.json` is what makes `npm run docs:build` work cleanly.

### Why `package.json` Helps (Without Being the Only Key)

* **`package.json` defines the script name (`docs:build`):** When you set the build command to `npm run docs:build`, the hosting runner looks inside `package.json` to see what command `docs:build` runs (`vitepress build docs`).
* **You can also call the CLI directly:** Even without a custom script in `package.json`, a build command like `npx vitepress build docs` works because `vitepress` is installed in `node_modules`.

### What Actually Matters Most on Static Hosts

1. **Build command:** Tells the host how to compile your source files into static assets (for example, `npm run docs:build`).
2. **Build output directory:** Tells the host **which folder** contains the finished static files to publish (for example, `docs/.vitepress/dist`).
3. **Node version & root/source paths:** Ensures the right Node runtime is available and paths match where your VitePress project lives (`docs/` with `srcDir: './src'`).

### Official Reference

* **Cloudflare Pages (`Build configuration`):** `[https://developers.cloudflare.com/pages/configuration/build-configuration/](https://developers.cloudflare.com/pages/configuration/build-configuration/)`
* **VitePress CLI (`vitepress build`):** `[https://vitepress.dev/reference/cli](https://vitepress.dev/reference/cli)`
