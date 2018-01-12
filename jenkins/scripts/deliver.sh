#!/bin/bash
# This script bootstraps Gekko using pm2

SCRIPTPATH="$( cd "$(dirname "$0")" ; pwd -P )"
cd $SCRIPTPATH/../..
pwd
ls
pm2 stop gekko
pm2 start gekko -- -ui
