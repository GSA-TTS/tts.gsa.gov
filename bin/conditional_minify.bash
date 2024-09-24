#!/usr/bin/env bash

set -euo pipefail

if [[ "$BRANCH" =~ (main|staging) ]]; then
  bin/minify.bash
fi
