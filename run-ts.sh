#!/bin/bash

# 파일명을 입력받습니다 (확장자 포함)
file_name=$1

# TypeScript 파일을 tsc로 컴파일합니다
tsc "$file_name"

# 확장자를 .ts에서 .js로 변경
js_file="${file_name%.ts}.js"

# 컴파일된 .js 파일을 node로 실행합니다
node "$js_file"

# node 실행이 완료되면 .js 파일을 삭제합니다
rm "$js_file"
