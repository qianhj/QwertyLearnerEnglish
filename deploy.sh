#!/bin/bash
set -e

npm run build

cp -r dist /tmp/gh-deploy-$$

git checkout gh-pages
git rm -rf . --quiet 2>/dev/null || true
cp /tmp/gh-deploy-$$/index.html .
cp -r /tmp/gh-deploy-$$/assets .
git add index.html assets/
git commit -m "Deploy $(date '+%Y-%m-%d %H:%M:%S')"
git push origin gh-pages

git checkout main
rm -rf /tmp/gh-deploy-$$

echo "Deploy complete!"
