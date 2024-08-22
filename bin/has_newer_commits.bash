#!/usr/bin/env bash

set -euo pipefail

fetch_data() {

  url="${1?Error: no URL provided}"

  curl \
    -s \
    -H "Accept: application/vnd.github+json" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    -H "Authorization: Bearer ${PAT}" \
    "$url"

}

compare_dates() {
  {
    fetch_data "$(build_url "$a")"
    fetch_data "$(build_url "$b")"
  } | jq \
    --raw-output \
    --slurp \
    'if .[0].commit.commit.author.date < .[1].commit.commit.author.date then true else false end'
}

build_url() {
  item="${1?Error: no owner/repo@branch passed}"

  repo="${item%%@*}"
  branch="${item##*@}"

  if [ "$branch" == "$repo" ]; then
    repo="$item"
    branch="main"
  fi

  echo "https://api.github.com/repos/${repo}/branches/${branch}"
}

filter_branch_string() {
  string="${1:-}"

<<<<<<< HEAD
  echo "$string" | tr -cd '[:alnum:]\/\-\_\.\@'
}

raw_a="${1?Error: two owner/repo@branch values must be provided (0 were)}"
raw_b="${2?Error: two owner/repo@branch values must be provided (1 was)}"

a="$(filter_branch_string "$raw_a")"
b="$(filter_branch_string "$raw_b")"

[ "$(compare_dates "$a" "$b")" == "true" ]
