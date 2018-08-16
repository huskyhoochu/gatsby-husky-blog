#!/usr/bin/env bash

rm -rf .cache public

yarn build

now public --public

now ls public

list_url=`now ls public`

old_url=`echo ${list_url} | cut -d ' ' -f15`

new_url=`echo ${list_url} | cut -d ' ' -f9`

echo -e "\nOld URL is:" ${old_url} "\n"

yarn removeUrl ${old_url}

echo -e "\nNew URL is:" ${new_url} "\n"

now alias ${new_url} www.huskyhoochu.com
