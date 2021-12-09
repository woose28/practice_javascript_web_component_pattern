<h3>Vanilla JS 웹 컴포넌트 만들기 연습</h3>

<br>

## 📌 개요
개발자 황준일님의 [Vanilla Javascript로 웹 컴포넌트 만들기](https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Component/#_1-컴포넌트와-상태관리)
게시글을 보고 웹 컴포넌트 기반 개발 패턴을 연습한 레포지터리입니다.
(좋은 글 감사합니다🙇🏻‍♂️)

패턴 연습을 하면서 스스로 정한 규칙은 아래와 같습니다.

**규칙**
1. 작은 작업 단위로 나눠서 구현하고 커밋하기
2. 커밋 컨벤션 지키기
3. eslint를 활용하여 코드 품질 높이기
4. 하드코딩을 피하고, 상수를 활용하기

<br>

## 💻 구현한 기능 목록
1. item을 추가하는 기능
2. 저장된 item 목록을 보여주는 기능
3. 각 item은 활성/비활성을 설정할 수 있는 기능
4. 각 item을 삭제할 수 있는 기능
5. 저장된 item의 filtering 기능
    - 저장된 item을 '전체보기', '활성화 보기', '비활성화 보기'를 통해 filtering 할 수 있음

<br>

## 📚 구현하면서 공부한 내용
1. Html의 데이터 속성
2. Javascript에서 이벤트가 전파되는 방식과 이벤트 위임
3. 스코프와 스코프 체인

<br>

## 🗂 디레턱리 구조
```bash
├─src
│  ├─componen
│  │  ├─ItemAppender.js
│  │  ├─ItemFilter.js
│  │  └─Item.js
│  │
│  ├─constant
│  │  ├─filter.js
│  │  ├─message.js
│  │  └─selector.js
│  │
│  ├─core
│  │  └─Component.js
│  │
│  ├─utils
│  │  └─domTools.js
│  │
│  ├─App.js
│  │
│  └─index.js
│
├─.eslintrc.json
├─.gitignore
├─index.html
├─package-lock.json
├─package.json
└─README.md

```
