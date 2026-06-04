name: Update Vigil Daily Brief

on:
  workflow_dispatch:
  schedule:
    - cron: '30 21 * * *'  # 06:30 Japan time

permissions:
  contents: write

jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Generate daily brief data
        run: node scripts/update-daily-brief.mjs
      - name: Commit updated brief
        run: |
          git config user.name "vigil-bot"
          git config user.email "actions@github.com"
          git add jobs.json news.json sports.json last-updated.json
          git commit -m "Update Vigil daily brief" || echo "No changes"
          git push
