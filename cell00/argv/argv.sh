#!/bin/sh
if [ $# -eq 0 ]; then
	echo "No arguments supplied"
	exit 1
fi
for var in "$@"
do
	echo "$var"
done
