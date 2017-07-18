#!/usr/bin/env zsh

sed -i'.bak' '8d' index.html
sed -i'.bak' '8r'<(cat iconStyles) index.html
rm *.bak
