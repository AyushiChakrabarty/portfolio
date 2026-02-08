# Deploy portfolio to GitHub Pages

Your site: **https://ayushichakrabarty.github.io/portfolio/**

## Steps to update the live site

1. **Save and commit your latest code** (if not already):
   ```bash
   git add -A
   git commit -m "Your message"
   git push origin main
   ```

2. **Build and deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```
   - This runs `npm run build` then pushes the `build/` folder to the `gh-pages` branch.
   - At the end you should see **"Published"** if it worked.

3. **If deploy fails with "could not read Username" or "Authentication failed"**:
   - GitHub needs to know who is pushing. Use one of these:
   - **Option A – GitHub CLI (recommended):**
     ```bash
     gh auth login
     ```
     Follow the prompts, then run `npm run deploy` again.
   - **Option B – SSH:**  
     Set your remote to SSH: `git remote set-url origin git@github.com:AyushiChakrabarty/portfolio.git`  
     Ensure your SSH key is added to GitHub, then run `npm run deploy` again.
   - **Option C – Personal access token (HTTPS):**  
     When `npm run deploy` asks for password, use a [GitHub Personal Access Token](https://github.com/settings/tokens) (with `repo` scope), not your GitHub password.

4. **After a successful deploy:**
   - Wait 1–2 minutes.
   - Open https://ayushichakrabarty.github.io/portfolio/
   - Do a **hard refresh**: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac), or use an incognito window to avoid cache.

## Quick check

- **Repo → branch `gh-pages`** → check the latest commit time. It should be from when you last ran `npm run deploy`.
- If that commit is old, run `npm run deploy` again and fix any auth errors using the options above.
