# Node.js 14 이미지 사용
FROM node:14

# pnpm 설치
RUN npm install -g pnpm

# 작업 디렉토리 설정
WORKDIR /app

# package.json과 pnpm-lock.yaml 파일 복사
COPY package.json pnpm-lock.yaml ./

# 패키지 설치 (production 모드로)
RUN pnpm install --frozen-lockfile --prod

# 나머지 애플리케이션 파일 복사
COPY . .

# 애플리케이션 시작 명령어 설정
CMD ["node", "index.js"]
