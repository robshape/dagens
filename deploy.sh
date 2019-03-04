#!/bin/bash
set -euo pipefail

echo "[*] CLEANING ./docs/"
rm -fr ./docs/
echo

echo "[*] LINTING CODE"
npm run lint
echo

echo "[*] BULDING PROJECT"
npm run build
mv dist/ docs
echo

echo "[*] CONFIGURING DOMAIN"
echo "dagens.shapeless.xyz" >> docs/CNAME
echo

echo "[*] DEPLOYING BUILD"
git add docs/
git commit -m "DEPLOY TO GH-PAGES"
git push
echo
