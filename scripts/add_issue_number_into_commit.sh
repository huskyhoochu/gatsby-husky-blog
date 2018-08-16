#!/usr/bin/env bash

COMMIT_MSG_FILE=$1

branch_name=`git rev-parse --abbrev-ref HEAD`
cut_number=`echo ${branch_name} | cut -d '-' -f1`
first_line=`head -n1 ${COMMIT_MSG_FILE}`

# if commit_msg_file's first line is empty,
# add branch name in commit_msg
if [ -z "$first_line" ]; then
    sed -i ".bak" "1s/^/[#$cut_number] /" $1
fi

