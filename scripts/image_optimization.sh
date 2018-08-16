#!/usr/bin/env bash

# 출처: 우아한형제들 기술 블로그
# http://woowabros.github.io/tools/2017/07/12/git_hook.html

images=$(git diff --exit-code --cached --name-only --diff-filter=ACM -- '*.png' '*.jpg' '*.jpeg')

$(exit $?) || (echo ${images} | ~/Applications/imageoptim-cli/bin/imageOptim && git add ${images})
