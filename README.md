# Araddhya Portfolio (Vite + React + Tailwind)

This is a ready-to-deploy portfolio. It includes your photo and resume.

## Quick Start
```bash
npm install
npm run dev
```
Open http://localhost:5173

## Deploy to GitHub Pages
1. Create a new GitHub repository. **Note the exact repo name** (e.g., `portfolio-araddhya`).  
2. Update the `base` in `vite.config.js` to `/{your-repo-name}/`.
3. Commit and push all files:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```
4. Deploy:
```bash
npm run deploy
```
GitHub Pages will publish at: `https://<your-username>.github.io/<your-repo-name>/`

## Notes
- The resume download button points to: `/assets/Resume-Araddhya-Rajput.docx`
- If you rename the repo, update `vite.config.js` accordingly.
