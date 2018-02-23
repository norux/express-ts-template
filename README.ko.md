# express-ts-template
Node.js의 유명한 라이브러리인 Express.js를 타입스크립트로 작성한 템플릿입니다.

[![Build Status](https://travis-ci.org/norux/express-ts-template.svg?branch=master)](https://travis-ci.org/norux/express-ts-template/)
[![Coverage Status](https://coveralls.io/repos/github/norux/express-ts-template/badge.svg?branch=master)](https://coveralls.io/github/norux/express-ts-template?branch=master)

Read this in other language: [English](https://github.com/norux/express-ts-template/blob/master/README.md), [한국어](https://github.com/norux/express-ts-template/blob/master/README.ko.md)

목차
=================

   * [express-ts-template](#express-ts-template)
   * [템플릿의 구성](#템플릿의-구성)
      * [서버](#서버)
      * [데이터베이스](#데이터베이스)
      * [로깅](#로깅)
      * [테스트 시스템](#테스트-시스템)
         * [유닛테스트](#유닛테스트)
         * [테스트 커버리지](#테스트-커버리지)
   * [설치](#설치)
   * [설정](#설정)

# 템플릿의 구성

기본적인 서버의 실행을 위한 템플릿을 구성하였으며, 특히 다음의 기능을 포함하였습니다.

- Express.js의 기본 설정 작업
- HTTPS를 위한 X.509 사설 인증서
- 데이터베이스(MongoDB)연동
- 로깅 시스템(Winston & Morgan) 연동
- 유닛 테스트(Mocha) 연동
- 테스트 커버리지(istanbul) 연동

## 서버
 Express.js를 사용합니다. http 및 https를 쉽게 사용할 수 있도록 구현하였습니다.
 https를 위한 X.509 사설인증서도 포함합니다.(`{projectRoot}/src/config/ca`)

## 데이터베이스
 MongoDB를 사용하며, MongoDB의 드라이버로 mongoose.js 를 이용합니다.

## 로깅
 시스템 전체적으로 winston을 사용하여 로깅시스템을 구성하였습니다. express의 미들웨어로 morgan을 winston에 연동하여 서버의 전체 로그를 손쉽게 남길 수 있게 하였습니다.

## 테스트 시스템
### 유닛테스트
 mocha.js를 사용합니다. 작성한 소스코드와 동일한 경로에 `*.spec.ts` 파일이 존재하면 `npm test` 명령어로 모든 테스트를 수행합니다.

### 테스트 커버리지
 istanbul을 사용합니다. 마찬가지로 `npm test`에서 유닛테스트와 마찬가지로 수행이되며, 결과 보고서는 `{projectRoot}/coverage` 경로에 생성됩니다.

# 설치
 `npm install` 을 사용하여 의존 모듈들을 설치합니다.

# 설정
 모든 설정파일은 `{projectRoot}/src/config` 에 존재합니다. 설정파일에 붙은 `dev` 및 `prod` 키워드는 실행되는 모드를 의미합니다.
 `dev`는 개발자모드이고, `prod`는 제품모드입니다. `NODE_ENV` 환경변수에 의존합니다.

 다음의 명령어로 손쉽게 모드를 전환할 수 있습니다.
 ```
 # 개발자모드
 npm run start:dev

 # 제품모드
 npm run start:prod
 ```

 * `server.config.ts`: 서버의 설정을 저장합니다. Port/IP/TLS 인증서 등의 정보를 설정할 수 있습니다.
