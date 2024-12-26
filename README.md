# Movie Streaming Service Project

## 프로젝트 소개
Vue 3와 TypeScript를 사용한 영화 스트리밍 서비스 웹 애플리케이션입니다. TMDB API를 활용하여 영화 정보를 제공하고, 카카오 로그인을 통한 사용자 인증을 지원합니다.

## 주요 기능
- 카카오 소셜 로그인
- 영화 목록 조회 (인기/최신/장르별)
- 영화 검색
- 찜하기 기능
- 반응형 디자인
- 그리드/리스트 뷰 전환

## 기술 스택
- Vue 3
- TypeScript
- Vite
- Axios
- Vue Router
- Font Awesome
- Kakao SDK

## 환경 설정
1. 필요한 환경 변수 파일 생성:
.env.development
VITE_KAKAO_CLIENT_ID=your_kakao_client_id
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_MODE=development
VITE_BASE_URL=http://localhost:****

2. 의존성 설치:
npm install

## 실행 방법
### 개발 환경
npm run dev

### 프로덕션 환경
npm run build
npm run preview

## API 키 관리
- TMDB API 키와 카카오 API 키는 .env 파일에서 관리
- .gitignore에 .env 파일 포함하여 보안 유지

## 카카오 로그인
- 카카오 SDK를 활용한 소셜 로그인 구현
- 사용자 프로필 정보 (닉네임, 프로필 이미지) 조회
- 로그인 상태 유지 및 자동 로그인
