Vigil Daily Brief GitHub v2

Purpose:
A stable GitHub Pages app focused on a daily jobs and news audio brief.

Design:
- More square briefing-card look.
- Fewer rounded buttons.
- Jobs + News + Sports.
- Audio player at the top.

Basic upload:
Upload these root files to GitHub Pages:
index.html
app.js
styles.css
manifest.webmanifest
jobs.json
news.json
sports.json
last-updated.json
README.txt
icons if included

Daily updater:
This ZIP includes:
.github/workflows/update-vigil-daily-brief.yml
scripts/update-daily-brief.mjs

Important:
GitHub web upload may hide/skip .github and scripts folders. If that happens, the app still works, but the daily updater will not run.

To enable the updater:
- Use GitHub Desktop to upload the full folder structure, OR
- Manually create .github/workflows/update-vigil-daily-brief.yml in GitHub, OR
- Ask ChatGPT for the workflow text and script text separately.

Open:
https://dadmacboy.github.io/vigil/?v=daily2
