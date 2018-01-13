#!/bin/bash
# This script bootstraps Gekko using pm2

pm2 kill
pm2 start gekko.js -- --ui
