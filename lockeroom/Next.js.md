## 1. Next.js
출처 : [How to Next](https://nextjs.org/learn/basics/getting-started)
### 1.1 Next.js 란?
간단하게는 리액트 어플리케이션의 서버렌더링을 쉽게 구현 할 수 있게 도와주는 간단한 프레임워크입니다. 
Next와 create-react-app은 리액트를 기반으로 개발 환경을 구축한다는 점에 비슷하지만, CRA은 클라이언트 렌더링만 하는 반면, Next는 서버사이드렌더링에
특화된 프레임워크라는 점이 다르다.

- 기본적으로 서버 렌더링
- 보다 빠른 페이지 로드를 위한 자동 코드 스플리팅
- 간단한 클라이언트 사이드 라우팅 
- Hot Module Replacement(전체 새로고침 없이 모든 종류의 모듈들을 런타임 시점에 업데이트)를 지원하는 Webpack 기반 작업환경
- 익스프레스 나 어떤 Node.js 서버와 함께 사용 가능
- Babel / Webpack 환경설정 커스터마이징 가능

### 1.2 Next.js 사용하는 이유

SSR을 적용한 SPA를 만들기 위해서는 높은 러닝 커브를 감수해야 하기 떄문에 이와 같은 이슈를 해결 할 수있습니다. 

#### SSR 필요한 이유 
- 검색 엔진 최적화(SEO)를 해야된다.
- 빠른 첫 페이지 렌더링이 중요하다.

### 1.3 React-Router / Next.js 차이

* **React-Router**
    * 컴포넌트로 라우트 선언
    * 이해하기 쉬운 API
    * 라우터의 다양한 기능 
    * SSR 직접 해야함 
    * 데이터 로딩 어디서든지 할 수 있음
    * 내맘대로 프로젝트 설계

* **Next**
    * 컴포넌트의 디렉터리/파일 이름으로 라우트 선언
    * 코드 스플리팅, SSR 대신 다 해줌
    * 시간을 엄청 많이 아낄 수 있음
    * Next.js에서 하라는대로 해야함
    * 편하지만 제한된 느낌
    * 페이지 컴포넌트에서만 데이터 로딩

### 1.4 환경 설정 

Next.js는 Windows, Mac, Linux 모두 동일하게 작동합니다. 필요한건 Node.js 

👉 해당 프로젝트 폴더에서 install react-dom next 
Next는 리액트 모듈을 자동으로 포함시킵니다.
```
npm install --save react react-dom next
```

👉 `package.json`에서 스크립트 추가 
```
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```

👉 개발 서버 실행 
```
npm run dev
```

👉 production 환경
```
npm run build && npm start 
```

### 1.5 Next 번들 파일 분석 

Next는 프로젝트 root의 .next 폴더 밑에 번들 파일을 생성한다. 

```
.next/static
├── GtdPiV1KKRdR5ID37_kh8
│   └──pages
│      ├──_app.js
│      └──_error.js
├── chunks
│    └── commons.{해시값}.js
└── runtime
    ├── main-{해시값}.js
    └── webpack-{해시값}.js
```

* _app.js: 모든 페이지의 최상단에서 실행되는 리액트 컴포넌트 코드가 들어있다. 
* commons.{해시값}.js: 여러 페이지에서 공통으로 사용되는 내부 모듈과 외부 모듈이 들어있다. 
* webpack-{해시값}.js: 웹팩 런타임 코드가 들어 있다.
* .next/static/{해시값}/pages 폴더 밑에 다른 페이지 번들 파일 생성 

```
.next/server/static
└── GtdPiV1KKRdR5ID37_kh8
    └──pages
       ├──_app.js
       └──_error.js
```

* .next/server/static 폴더 밑에는 서버에서 사용되는 파일이 들어간다.

### 1.6 페이지 이동 (Link)

####  Link 사용

```js
// This is the Link API
import Link from 'next/link';

const Index = () => (
  <div>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <p>Hello Next.js</p>
  </div>
);

export default Index;
```
> Link은 `클라이언드 사이드 이동`입니다. 이 동작은 서버 요청없이 브라우저 안에서 수행됩니다.
> 브라우저의 네트워크 상태 검사 툴에서 확인할 수 있습니다.

#### 👉클라이언트 사이드 히스토리 지원
뒤로가기 버튼 클릭하면 클라이언트를 통해 인덱스 페이지로 이동합니다. 
> next/link는 모든 `location.history`를 처리합니다.

#### Link props 추가 

`<Link href="/about" style ={{fontSize: 20}}>` 스타일을 지정 할수 없습니다. 
```js
// 아래와 같이 적용 
<Link href="/about">
  <a style ={{fontSize: 20}}>About Page</a>
</Link>
```

`<Link href="/about" title="About Page">` title을 지정 할수 없습니다. 
```js
// 아래와 같이 적용 
<Link href="/about">
  <a title="About Page">About Page</a>
</Link>
```

#### 👉Link는 HOC입니다.
> Link는 "href"와 다른 라우팅 관려 props만 받아드리는 hoc 컴포넌트입니다. 

### 1.7 공유 컴포넌트

특정 디렉토리에 컴포넌트를 둘 필요는 없습니다. 원하는 대로 이름을 지정할 수 있습니다. 특정 디렉토리는 `pages`입니다.

```js
// components/MyLayout.js
import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;
```
```js
// pages/index.js
import Layout from '../components/MyLayout';

export default function Index() {
  return (
    <Layout>
      <p>Hello Next.js</p>
    </Layout>
  );
}
```

**공유 컴포넌트를 만드는 다른 방법**
1.  Layout as a Higher Order Component

```js
// pages/index.js

import withLayout from '../components/MyLayout';

const Page = () => <p>Hello Next.js</p>;

export default withLayout(Page);
```

2. Page content as a props

```js
// pages/index.js

import Layout from '../components/MyLayout.js';

const indexPageContent = <p>Hello Next.js</p>;

export default function Index() {
  return <Layout content={indexPageContent} />;
}
```




### 1.8 동적페이지 생성 

포스트 목록을 추가후 쿼리 문자열를 통해 데이터를 전달 합니다. 
아래와 같이 PostLink 컴포넌트를 구현합니다.

```js
import Layout from '../components/MyLayout';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);
export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  );
}
```
"Post" 페이지 생성 

```js
// pages/post.js
import { useRouter } from 'next/router';
import Layout from '../components/MyLayout';

const Page = () => {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
};

export default Page;
```
> Next.js 객체를 반환 할 useRouter 함수를 가져 와서 사용합니다. 
> 쿼리 문자열 params가있는 라우터의 개체를 사용하고 있습니다.

#### useRouter

`useRouter`를 사용하면 router 페이지 내부의 객체에 엑세스 할 수 있습니다. 이 객체는 [React Hook](https://reactjs.org/docs/hooks-intro.html)이며 함수 구성 요소와 함께 작동합니다. 

```js
import { useRouter } from 'next/router';
import Layout from '../components/MyLayout.js';

const Content = () => {
  const router = useRouter();
  return (
    <>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </>
  );
};

const Page = () => (
  <Layout>
    <Content />
  </Layout>
);

export default Page;
```

