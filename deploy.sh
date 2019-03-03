#!/bin/bash
set -euo pipefail

echo "[*] CLEANING ./docs/"
rm -fr ./docs/
echo

echo "[*] LINTING CSS & TS"
npm run lint
echo

echo "[*] BULDING PROJECT"
npm run build
mv dist/ docs
echo "dagens.shapeless.xyz" >> docs/CNAME
echo

echo "[*] DEPLOYING BUILD"
git add docs/
git commit -m "DEPLOY TO GH-PAGES"
git push
echo
