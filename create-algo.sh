#!/bin/bash

# 사용자로부터 숫자 입력 받기
read -p "문제의 번호를 입력하세요: " number

# 입력한 숫자로 파일 이름 생성
file_name="${number}.ts"

# ABC 파일이 존재하는지 확인
if [[ ! -f "IOtemplate.ts" ]]; then
  echo "ABC 파일이 존재하지 않습니다."
  exit 1
fi

# .ts 파일 생성 및 ABC 내용 복사
cp IOtemplate.ts "$file_name"

# 작업 완료 메시지
echo "$file_name 파일이 생성되었고, IO 템플릿의 내용이 복사되었습니다."
