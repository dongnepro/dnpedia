# LearningJavaScript

## 1. 첫번쨰 애플리케이션 

**문법 하이라이트**
문법 하이라이트 기능은 프로그램의 문법적 요소를 색깔로 구별하는 기능 

**괄호 맟추기**
괄호는 반드시 짝이 맞아야하며 맞지 않으면 프로그램이 정확히 동작하지 않음 

**코드 접기**
괄호 기능과 관련, 하고 있는 작업과 무관한 코드는 임시적으로 숨겨놓은 기능 

**자동 완성**
단어 일부를 타이핑하기만 해도 어떤 단어를 타이핑하려 했는지 짐작 및 제시 -`단어완성`, `인텔리센스` 

**주석**
자바스크립트에서는 주석을 완전 무시합니다. 주석은 미래의 나 또는 동료들을 위해 작성합니다.

> 🔖 `use strict` 엄격모드
> 자바스크립트 인터프리터에서 코드를 더 업격하게 처리하는 뜻입니다. 
> 엄격 모드를 선언하면 해당 파일 전체가 엄격 모드로 동작하고, 함수 위에서 선언한다면 해당 함수만 엄격 모드로 동작합니다. 
> **ES2015 모듈을 이용해 작성된 코드는 항상 엄격 모드로 동작하기 때문에, 함수 위에 'use strict';를 붙여주지 않아도 엄격 모드로 동작합니다.**


**자바스크립트 개발 도구** 

* Git: 큰 프로젝트도 관리가 쉽고 다른 개발자와 협력할 수 있게 돕는 버전 컨트롤 도구 
* Node:  브라우저 밖에서 자바스크립트를 실행할 수 있게 하는 도구,  npm은 이 리스트의 다른 도구를 설치할 떄 필요
* Gulp: 반복적인 개발 작업을 자동화하는 빌드 도구 
* Babel: ES6코드를 ES5로 변환하는 트랜스컴파일러
* ESLint: 자주 하는 실수를 피하고 더 나은 프로그래머가 되도록 도움 

### 1. ES06 (ES2015)

자바스크립트는 인터프리팅 언어이고 번거로운 부대 작업이 필요 없다는 장점이 있습니다.
-> 노드 같은 자바스크립트 엔진은 분명 자바스크립트를 컴파일하긴 하지만, 프로그래머가 개입할 필요 없이 자동으로 이루어집니다. 

**자바스크립트의 장점**
1. 어디서든 쓰인다
1. 항상 브라우저 스크립트 언의 표준
1. 노드의 등장으로 이제 브라우저 바깥으로 영역 확대

ES06의 훌륭한 기능을 모두 지원할 때까지는 시간이 걸리게 때문에 트랜스컴파일([Babel](https://babeljs.io/))을 피할 수 없습니다.

뉴욕 개발자 캉각스는 ES06의 기능별 호환성 테이블을 운영 [kangax](https://kangax.github.io/compat-table/es6/)


### 1-2. [Git](https://git-scm.com/)

### 1-3. 터미널 

가장 많이 사용하는 배시(bash)라는 셸입니다. 
|리눅스|MacOS|윈도우|
|---|---|---|
|셸|셸|터미널(윈도우는 Git Bash 다운)|


**터미널 명령어**
```js
// 파일 리스트 보기
$ ls

// 홈 디레터리
$ cd ~

// 현재 디렉터리 경로 출력
$ pwd

// 새 디렉터리 만들기 
$ mkdir 파일명

// 디렉터리 이동
$ cd 파일명

// 한 단계 위 디렉더리
$ cd ..
```

> 🏷Tip
> 프로젝트마다 디렉터리를 따로 만드는게 좋습니다. 
> 이 디렉터리를 프로젝트 `루트`라고 부릅니다. 

### 1-4. git 

```js 
// 저장소 만들기
$ git init

//  저장소의 현재 상태출력
$ git status

// 파일이 아니라 변경사항을 추가
$ git add
```

[참고하세요!!!](https://try.github.io/)

### 1-5. npm 패키지 관리 

노드개발에서  npm은 필수 !!!
npm을 통해 빌드 도구와 트랜스컴파일러를 설치합니다.
npm은 패키지를 설치할 때 전역(globally) 또는 로컬(locally)설치할 수 있습니다. 

- 터미널에서 실행하는 도구, 개발과정에서 사용: 전역으로 설치하는 패키지(globally)
- 프로젝트에 종속되는 패키지: 로컬(locally)

설치하는 모듈이 늘어나면 모듈을 추적하고 관리할 방법이 필요합니다. 프로젝트에 설치하고 사용하는 모듈을 `의존성`이라고 부릅니다.  프로젝트가 성장하면서 늘어날 필요 패키지를 간결하게 정리할 방법이 있으면 좋습니다. 
npm은 package.json파일을 통해 의존석을 관리합니다.

- 개발의존성: 앱을 실행할 때는 필요없지만, 프로젝트 개발할 때 필요하거나 도움이 되는 패키지입니다. 


### 1-6, 빌드 도구: 걸프와 그런트 

반복작업을 자동화하는 빌드 도구 -> 그런트와 걸프 

```js
//설치
$npm install -g gulp
```

### 1-7. 프로젝트 구조 

```
# Git
.git
.gitignore

# npm
package.json
node_modules

# 노드소스
es6
dist

# 브라우저 소스
.public/
├── es6/
└── dist/

```

## 2. 트랜스컴파일러

트랜스컴파일러는 바벨과 트레이서입니다. 
바벨: ES5-> ES6로 바꾸는 트랜스컴파일러로 시작하였고 프로젝트가 성장하면서 ES6와 react, ES7 등 여러가지를 지원하는 범용 크랜드컴파일러가 됐습니다.

```js
$ npm install --save-dev babel-preset-es2015
```

### 2-1. 바벨과 걸프 함께 사용

ES6 코드를 ES5 코드로 바뀔때 사용 
걸프는 파이프라인 개념으로 작업을 처리합니다. 

### 3. 린트 

린트 프로그램은 당신의 코드를 세심히 검토해서 자주 일어나느 실수를 알려줍니다. 

```js
npm install -g eslint

// .eslintrc 생섬 및 스타일 가이드 설정 질문이 나옴 
eslint --init
```

Gulpgile에는 ESLint를 꼭 추가하길 권합니다. 빌드 할때 마다 걸프를 실행하므로 여기서 코드를 체크하는 것이 좋습니다.

```js
npm install --save-dev gulp-eslint
```

[ESLint](https://eslint.org/)에는 설정 옵션이 아주 많으며, 해당 사이트에 문서화되어 있습니다. 확인하세요

## 3. 리터럴과 변수, 상수, 데이터 타입

변수와 상수 리터럴은 자바스크립트가 데이터를 보관하는 메커니즘(체제)

### 3-1. 변수와 상수 

**변수** 
* 이름이 붙은 값, 언제든 바꿀수 있는 값
* 선언(생성)하고 초기값을 할당하는 두 가지 일을 함 
* 선언만 해도 에러가 나지 않습니다.
* 변수를 선언할때 초깃값을 지정하지 않으면 `undefined`
* let문 하나에 변수 여러 개를 선언 

```js
let currrentTempC = 22;
```

**상수**
* 선언(생성)을 가능하지만 재대입은 불가능
* 선언할 때는 반드시 값을 대입
* 상수 여러개를 선언 가능 
* 상수 이름은 보통 대문자와 밑줄만 사용 


```js
const currrentTempC = 22;
```

> 항상 let 보다 const를 사용하는 것이 좋습니다. let을 사용하면 의도치 않게 다른 값이 대입되어 버리는 일이 생길 수 있기 때문입니다. 정말로 재대입이 필요한 경우에만 let을 사용하는 것이 좋은 습관입니다.

### 3-2. 식별자 

변수와 상수, 함수 이름을 식별자라 부릅니다. 

* 숫자, 알파벳, 달러 문자($), 언더스코어(_)가 포함될 수 있다.
* 단, 숫자로 시작되어서는 안 된다.
* 예약어는 식별자가 될 수 없다.

```js
const foo; // O
const _bar123; // O
const $; // O - jQuery가 이 식별자를 사용합니다.
const 7seven; // X
const const; // X - 예약어는 식별자가 될 수 없습니다.
```

**Camel case**
JavaScript에서 널리 사용되는 관례
```js
// Camel case
let fastCampus;
let fooBar;
```

**Snake case**
JavaScript에서는 잘 사용되지 않고, Python 등의 프로그래밍 언어에서 많이 사용
```js
// Snake case
let fast_campus;
let foo_bar;
```

### 3-3. 리터럴

리터럴이라는 단어는 값을 프로그램 안에서 직접 지정한다는 의미
리터럴은 값을 만드는 방법 

```js
1; // 정수 리터럴
2.5; // 부동 소수점 리터럴
'hello'; // 문자열 리터럴
true; // 진리값 리터럴
```
### 3-4. 원시 타입과 객체

|원시타입|참조타입|
|---|---|
|Boolean|Object|
Null6|-|
Undefined|-|
Number|-|
String|-|
Symbol|-|

![](https://t1.daumcdn.net/cfile/tistory/9968C8405C2704C702)

Primitive Type(기본형) : 값을 그대로 할당

변수에 할당 -> 데이터가 비어있는 주소를 찾아서 데이터 할당 -> 같은 변수에 할당

-> 해당 변수가 가지고있는 주소로 가서 데이터 할상


![](https://t1.daumcdn.net/cfile/tistory/99B207405C2704C635)


Reference Type(참조형) : 참조된 주소를 할당

선언 -> 할당 -> 데이터에 객체정보 주소와 저장 -> 해당 주소의 데이터 안에 객체정보 주소와 저장 -> 해당 주소의 온전한 데이터들을 할당

### 3-5. 숫자

자바스크립트도 다른 프로그래밍 언너와 마찬가지로 실제 숫자의 근사치를 저장할 때 IEEE-764 배정도 부동소수점 숫자 형식을 사용합니다. 

자바스크립트에는 숫자형 데이터 타입이 하나밖에 없습니다. 대부분의 프로그래밍 언어는 여러가지 정수 타입을 사용하며 부동소수점 숫자 타입도 두가지 이상 사용합니다. 

> 🚧 숫자를 작성할때 따옴표를 쓰지 마십시오

```js
7; // 정수 리터럴
2.5; // 부동 소수점 리터럴
0b111; // 2진수 리터럴 (binary literal)
0o777; // 8진수 리터럴 (octal literal)
0xf5; // 16진수 리터럴 (hexademical literal)

NaN //계산 불가능한 연산의 결과값
-0 // 0과 같은 값으로 간주
Infinity //무한 
-Infinity
```

**NaN**

유일하게 자신과 같지 않은 값지 않은 값입니다. 
판별하기 위해서는 `Number.isNaN` 또는 `Object.is` 함수를 사용합니다. 

```js
const thisIsNan = NaN;

// 주의! 이렇게 하면 안 됩니다.
thisIsNan === NaN; // false

// 이렇게 해야 합니다.
Number.isNaN(thisIsNan); // true
Object.is(thisIsNan, NaN); // true
```

**-0**

`0`과 `-0`은 별개의 값이지만 비교연산은 하면 `true`
그러나 예외 존재 합니다. `Object.is` 함수는 `0`과 `-0`을 다른값으로 취급합니다. 
그리고 0이 아닌 어떤수를 `0` 혹은 `-0`으로 나눌 때에도 결과값이 다릅니다.

```js
0 === -0; // true
Object.is(0, -0); // false
1 / 0; // Infinity
1 / -0; // -Infinity
```

**Infinity**
어떤 값이 `Infinity`인지 아닌지 판별하려면, `Number.isFinite` 메소드를 사용
```js
Number.isFinite(1); // true
Number.isFinite(Infinity); // false
Number.isFinite('1'); // false
isFinite('1'); // true - `isFinite`는 문자열을 숫자로 변환합니다.
```



### 3-6. 문자열 

자바스크립트 문자열은 유니코드텍스트입니다. 
자바스크립트의 문자열 리터럴에는 작은따옴표, 큰따옴표, 백틱을 사용

필자는 ""을 사용 이유는 don't등의 아포스트로피를 더 많이 쓰는편이기 떄문 




### 3-7. 템플릿 리터럴 

``` js
const name1 = 'Foo';
const name2 = 'Bar';
const sentence = `${name1} meets ${name2}!`;
console.log(sentence);

// 일반적인 문자열 리터럴로는 아래와 같이 해야 합니다.
name1 + ' meets ' + name2 + '!';
```

### 3-8. 불리언 

불리언은 true와 false 두 가지 값밖에 없는 데이터 타입입니다. 

```js
// falsy
false
null
undefined
0
NaN
''
```

### 3-9. 심볼 

심볼은 유일한 토큰을 나타내기 위해 ES6에서 도입한 새 데이터 타입입니다.
심볼은 항상 유일, 원시 값의 특징을 모두 가지고 있으므로 확장성 있는 코드를 만들 수 있습니다.

``` js
const RED = Symbol("The color of a sunset!");
const ORANGE = Symbol("The color of a sunset!");
RED === ORANGE //false: 심볼은 모두 서로 다릅니다.
```
심볼은 `Symbol()` 생성자로 만듭니다. 자바스크립트의 객체지향 프로그래밍에 익숙하다면 심볼을 만들 때 new 키워드를 사용할 수 없으며, 대문자로 시작하는 식별자는 new와 함께 사용 

### 3-10. null과 undefined

null이 가질 수 있는 값은 null 하나뿐이며, nudefined가 가질 수 있는 값도 undefined 하나뿐 
null, undefined 모두 존재하지 않음, 

`null` 
- 프로그래머에게 허용된 데이터 타입, 
- 변수의 값을 아직 모르거나 적용할 수 없는 경우 사용

`undefined` 
- 자바스크립트 자체에서 사용한다는 타입 
- 명시적으로 값을 할당하지 않으면 그 변수에는 기본적으로 undefined가 할당

```js
let currentTemp; //암시적으로 undefined입니다. 
const targetTemp = null; //대상 온도는 null, 즉 "아직 모르는" 값입니다.
currentTemp = 19.5; //currentTemp에는 이제 값이 있음
currentTemp = undefined; //currentTemp는 초기화되지 않은 듯합니다. 권장하지 않습니다.
```

### 3-10. 객체 

원시 타입은 단 하나의 값만 나타낼 수 있고 불변이지만, 이와 달리 객체는 여러 가지 값이나 복잡한 값을 나타낼 수 있느며, 변할 수도 있습니다. 

```js
const obj = {};
```

객체 이름은 아무거나 써도 되자만, 일반적으로 의미를 알 수 있는 이름을 써야 합니다.
객체의 콘텐츤은 프로퍼티또는 멤버라고 부릅니다. 프로퍼티는 이름(key)과 값으로 구성됩니다. 
프로퍼티 이름에 유효한 식별자를 써야 멤버 접근 연산자(.)를 사용할수 있습니다.
프로퍼티 이름에 유효하지 않은 식별자를 쓴다면 계산된 멤버 접근 연산자([])를 써야 합니다. 프로퍼티 이름이 유효한 식별자여도 대괄호로 접근할 수 있습니다. 

obj는 계속 같은 객체를 가리키고, 바뀐 것은 객체의 프로퍼티입니다.

```js
const sam1 = {
    name: 'Sam',
    age: 4,
}

const sam2 = {name: "Sam", age: 4} //한줄로 선언

const sam3 = {
    name: 'Sam',
    classification:{  //프로퍼티 값도 객체가 될 수 있음
        kingdom: 'Anamalia',
        phylum: 'Chordata',
        class: 'Mamalia',
        order: 'Carnivoria',
        family: 'Felidae',
        subfamily: 'Felinae',
        genus: 'Felis',
        species: 'catus',
    }
}
```

```js
// sam3의 family에 접근하는 방법 
// 백틱도 가능 
sam3.classification.family;
sam3["classification"].family;
sam3.classification["family"];
sam3["classification"]["family"]

// 객체에 함수를 담기 
sam3.speak=function(){return "Meow!"};

// 함수 호출
sam3.speak();

// 프로퍼티 제거
delete.sam3.speak;
```


### 3-11. Number, String, Boolean 객체 

숫자롸 문자열, 불리언에는 각각 대응하는 객체 타입 Number, String, Boolean 있음, 이들 객체에는 두가지 목적이 있습니다. 하나는 Number.INFINITY 같은 특별한 값을 저장하는것이고, 다른 하나는 함수 형태로 기능을 제공

number 타입과 마찬가지로 string 타입도 래퍼 객체의 속성과 메소드를 사용할 수 있습니다. 

```js
// 문자열의 길이 알아내기
'hello'.length; // 5

// 여러 문자열 연결하기
'hello'.concat('fun', 'javascript'); // 'hellofunjavascript'

// 특정 문자열을 반복하는 새 문자열 생성하기
'*'.repeat(3); // '***'

// 특정 문자열이 포함되어 있는지 확인하기
'hello javascript'.includes('hello'); // true
'hello javascript'.startsWith('he'); // true
'hello javascript'.endsWith('ript'); // true
'hello javascript'.indexOf('java'); // 6

// 문자열의 특정 부분을 바꾼 새 문자열 생성하기
'hello javascript'.replace('java', 'type'); // 'hello typescript'

// 문자열의 일부를 잘라낸 새 문자열 생성하기
'hello'.slice(2, 4); // 'll'

// 좌우 공백문자를 제거한 새 문자열 생성하기
'   hello  '.trim(); // 'hello'
'   hello  '.trimLeft(); // 'hello  '
'   hello  '.trimRight(); // '   hello'

// 좌우 공백문자를 추가한 새 문자열 생성하기
'hello'.padStart(8); // '   hello'
'hello'.padEnd(8); // 'hello   '

// 문자열을 특정 문자를 기준으로 잘라 새 배열 생성하기
'hello!fun!javavscript'.split('!'); // ['hello', 'fun', 'javascript']
'hello'.split(''); // ['h', 'e', 'l', 'l', 'o']

// 모든 문자를 소문자, 혹은 대문자로 변환한 새 문자열 생성하기
'Hello JavaScript'.toLowerCase(); // 'hello javascript'
'Hello JavaScript'.toUpperCase(); // 'HELLO JAVASCRIPT'
```

### 3-12. 배열

객체와 달리 배열 콘텐츠에는 항상 순서가 있고, 키는 순차적인 숫자입니다. 배열은 유용한 메서드를 많이 가진 대단한 강력한 데이터 타입 

동적 배열, 리으드 리스트를 혼합한 것임을 알수 있다.

* 배열 크기는 고정되지 않습니다.언제든 요소를 추가하거나 제거할 수 있습니다.
* 요소의 데이터 타입을 가리지 않습니다. 즉, 문자열만 쓸 수 있는 배열이라던가 숫자만 쓸 수 있는 배열 같은 개념이 아예 없습니다. 
* 배열 요소는 0으로 시작 

> 배열은 기능이 추가된 특수한 객체이므로 배열에 숫자가 아닌 키나 분수, 음수 등을 키로 쓸 수는 있습니다. 가능하기는 하지만, 이런 행동은 배열의 설계 목적에 어긋날 뿐 아니라 어려운 버그 초래

```js
const a1 = [1,2,3,4]; // 숫자로 구성된 배열
const a2 = [1,'tow',3, null]; // 여러 가지 타입으로 구성된 배열
const a3 = [    // 여러 줄로 정의한 배열
    "one",
    "two",
    "three"
]; 
const a4 = [   // 객체가 들어있는 배열
    {name: "Ruby", hardness:9}
];
const a5 = [   // 배열이 들어있는 배열
    [1,3,5]
    [2,4,6]
]
```

```js
//배열에 요소 숫자를 반환
const arr = ['a', 'b', 'c'];
arr.length;
```

```js
const arr = ['a', 'b', 'c'];
// 첫번째 요소를 가져옵니다.
arr[0]
// arr의 마지막 요소의 인덱스
arr[arr.length-1]
// 배열 요소의 값을 덮어쓰기
const arr = [1,2,'c',,4,5];
arr[2]=3;
```

배열과 객체 리터럴의 마지막에는 항상 쉼표가 있습니다. 
> 자바스크립트 객체 표기법(JSON)에서는 마지막 쉼표를 허용하지 않습니다.


### 3-13. 날짜

자바스크립트의 날짜와 시간은 내장된 Date 객체에서 담당합니다. Date 객체는 자바스크립트에서 불만스러운 부분 중 하나입니다.
현재 날짜와 시간을 나타내는 객체를 만들 떄는 new Date()를 사용합니다. 

```js
const now = new Date();
now;
```
```js
const halloweenParty = new Date();
halloweenParty.getFullYear(); 
halloweenParty.getMonth();
halloweenParty.getDate();
halloweenParty.getDay();
halloweenParty.getHours();
halloweenParty.getMinutes();
halloweenParty.getSeconds();
halloweenParty.getMilliseconds();
```

### 3-14. 정규표현식

정규표현식은 자바스크립트의 부속 언어에 가깝습니다. 정규표현식은 여러 가지 프로그래밍 언어에서 일종의 확장으로 제공하며, 문자열에서 필요한 복잡한 검색과 교체 작업을 비교적 단순하게 만듭니다.

### 3-15. 맵과 셋

ES6에서는 새로운 데이터 타입 Map과 Set, 그리고 그들의 "약한" 짝인 WeakMap, WeakSet을 도입
맵- 키와 값을 연결, 특정 상황에서 객체보다 유리한 부분이 있었음
셋- 배열과 비슷하지만 중복 허용되지 않음

### 3-16. 데이터 타입 변환
데이터 타립을 다른타입ㅇ으로 바꾸는 일은 매우 자주 하는 작업 
사용자 입력이나 다른 시스템에서 가져온 데이터를 그대로 쓸 수 있는 경우는 별로 없고, 대개 변환합니다. 

**숫자 바꾸기**

```js
// Number 객체 생성자
const numStr = "33.3";
const num = Number(numStr); //문자열인 "33.3"을 숫자로 변환합니다. 

// parseInt, parseFloat
const a = pareInt("16 volts", 10); //"volts"는 무시됩니다. 10진수 16입니다. 
const b = pareInt("3a", 16); //16진수 3a를 10진수로 바꿉니다. 결과는 58입니다. 
const c = pareFloat("15.5 kph") //"kph"는 무시됩니다. parseFloat는 항상
                                //기수가 10이라고 가정합니다.
```

**Date 객체를 숫자로 바꾸기**
```js
// valueOf()
const d = new Date();
const ts = d.valueOf(); // 몇 밀리초가 지났는지 나타내는 숫자
```

**문자열로 변환**
```js
// toString()
const n = 33.5;
n; // 숫자
const s = n.toString();
s; // 문자열
const arr = [1, true, "hello"];
arr.toString(); // 문자열
```

**불리언으로 변환**
부정 연산자(!)를 써서 모든값을 불리언으로 바꿈
```js
const n = 0; // falsy
const b1 = !!n; // false
const b2 = Boolean(n) // false
```


## 4. 제어문
제어문은 크게 말해 조건문과 반봅ㄱ문 두 가지 범주로 나뉩니다. 조건문(if, if...else, switch)을 말하자면 갈림길과 같습니다. 선택할 수 있는 길이 몇 가지 있으면 그중 하나를 택할 뿐, 다른곳에는 갈 수 없습니다. 반복문(while, do...while, for) 조건이 맞는 동안 바디를 계속 반복합니다.

### 4-1. 제어문의 예외
제어문의 일반적인 실행 방식을 바꾸는 네가지 문이 있습니다. 

**break**

루프 중간에 빠져나갑니다. 

**continue**

루프에서 다음 단게로 바로 건너뜁니다. 

**return**

제어문을 무시하고 현재 함수를 즉시 빠져나갑니다.

**throw**

예외 핸들러에서 반드시 처리해야 할 예외를 일으킵니다. 예외 핸들러는 현재 제어문 바깥에 있어도 상관없습니다. 

```js
function translateColor(english) {
  switch (english) {
    case 'red': return '빨강색';
    case 'blue': return '파랑색';
    case 'purple':
    case 'violet': return '보라색';
    default: throw new Error('일치하는 색깔이 없습니다.');
  }
}
```
### 4-2. 제어문 기초

#### 4-2-1. 블록문 

제어문은 아니지만 제어문과 함게 씁니다. 문 여러개를 중괄호로 붂은 것이며 하나의 단위로 취급 
제어문 없이 사용은 가능하지만 의미는 없음. 

```js
let funds = 50;

while(funds > 1 && funds <100){
  funds = funds + 2;
  funds = funds - 1;
  console.log(funds) // 51~100
}

while(funds > 1 && funds <100)
  funds = funds + 2;
  console.log(funds) // 100
```

#### 4-2-2. 공백 
줄바꿈 문자를 포함해, 추가 공백을 신결 쓰지 않습니다. 하지만 return문 뒤에 줄바꿈 문자를 쓰면 문제가 생깁니다. 줄바꿈없는 코드도 모로해 보이지 않는 코드가 될수있습니다. 

블록안에 써서 일관성을 유지하고 의미를 명료하게 표현 하라고 하지만 협력하는 사람들과 상의하여 선택한 가이드를 따릅니다. 단지 불록 문과 블럭 없는 문을 썪어 사용하지 마세요



#### 4-2-3. while 루프

**while**

while 루프는 조건을 만족하는 동안 **코드를 계속 반복**합니다. 

```js
let funds= 50;
while(funds >1 && funds<100){
  // 돈을 겁니다. 
  // 주사위를 굴립니다. 
  // 그림을 맞췄으면 돈을 가져옵니다.
}
```

#### 4-2-4. do...while

while 구문과 사용법은 크게 다르지 않으나, 내부 코드를 **무조건 한 번은 실행시킨다**는 차이점이 있습니다.

```js
do {
  console.log('do...while!');
} while (false); // 절대 `true`가 될 수 없지만, 루프는 1회 실행됩니다.
```


#### 4-2-5. for 루프

for문이 러울린 경우는 어떤 일을 정해진 숫자만큼 반복하려 할때, 특히 그 일을 지금 몇 번째 하는지 알아야 할때 입니다.

```js
const hand = [];
for(let roll = 0; roll<3; roll++){
    hand.push(randFace())
}
```

#### 4-2-6. if 문

if 문에서는 분기 중 하나만 행동으로 연결됩니다. 

#### 4-2-7. if...else

while문과 달리 if...else 문 자체에 반복 기능이 없습니다. 판단하고, 그에 따라 움직입니다.
elsw 절은 if...else 문의 옵션입니다. 

if..else 문을 연달아 쓰고, 각 else 절이 다음 if...else 문을 포함할 뿐입니다. 

```js
const bets = {crown:0, anchor:0, heart:0, spade:0, club:0, diamond:0 };
let totalBet = rand(1,funds);
if(totalBet ===7) {
    totalBet = funds;
    bet.heart = totalBet
} else{
    // 그 판에 걸 돈을 분배합니다.
}
funds
```

```js
// new Date().getDay()는 현재 요일에 해당하는 
// 숫자를 반환합니다. 0은 일요일
if (new Date().getDay() === 3){
    totalBet = 1;
} else if(funds === 7){
    totalBet = funds;
} else {
    console.log("NO")
}
```








#### 4-2-8. switch 

if..else 두가지줄 하나를 선택하지만 switch문은 조건 하나로 여러가지 중 하를 선택할수 있습니다. 
```js
switch(expression) {
    case value1:
        // expression을 평가한 결과가 vaule1일 때 실행합니다.
        break;
    case value2:
        // expression을 평가한 결과가 vaule2일 때 실행합니다.
        break;
    case valueN:
        // expression을 평가한 결과가 vauleN일 때 실행합니다.
        break;
    default:
        // expression을 평가한 결과에 맞는 것이 없을 때 실행합니다.
        break && return 
}
```
**break**루프 중간에 빠져나갑니다. 
switch에서 break를 생략 할수도 있습니다. 그래서 꼭 주석을 남기세요

**default**는 case 절이 없을 떄 실행합니다. default절은 필수는 아니지만, 보톤 맨 마지막에 사용 

**break**을 습관적으로 사용해야합니다. **return**은 즉시 함수를 빠져나가므로 break문 대신 쓸 수 있습니다.

#### 4-2-9. for...in 
for...in 루프는 객체의 프로퍼티에 루프를 실행하도록 설계하도록 설계된 루프입니다. 
**(객체)**
```js
for (variable in obj) 
    statement
```

#### 4-2-10. for..of
for...of es06에 새로 생긴 반복문 
**(배열)**
```js
for (variable of obj) 
    statement
```
배열은 몰론 이터러블 객체에 모두 사용할 수 있는 범용적인 루프입니다. for...of는 배열에 루프를 실행해야 하지만 각 요소의 인덱스를 알 필요는 없을때 알맞습니다.
인덱스를 알야야한다면 일반적인 for루프 사용 
```js
const arr = [1, 2, 3, 4, 5];

for (let item of arr) {
  console.log(`현재 요소는 ${item} 입니다.`);
}
```

#### 4-2-11. forEach
```js
const arr = [1, 2, 3, 4, 5];

arr.forEach((item, index) => {
  console.log(`배열의 ${index + 1} 번째 요소는 ${item} 입니다.`);
})
```

#### 코드 이해 
```js
// m 이상 n 이하의 무작위 정수를 반환
function rand(m,n){
    return m + Math.floor((n-m+1)*Math.random());
}
// 크라운 앤 앵커 게임의 여섯 그림 중 하나에 해당하는 문자열을 무작위로 변환합니다.
function randFace(){
    return ["crown", "anchor", "heart","spade", "club", "diamond"]
  [rand(0,5)];
}

let funds = 50; //시작 조건
let round = 0;

while(funds > 1 && funds < 100){
    round++;
  console.log(`round ${round}:`);
  console.log(`\tstarting funds: ${funds}p`);
 // 돈을 겁니다.
  let bets = {crown:0, anchor:0, heart:0, spade:0, club:0, diamond:0};
  let totalBet = rand(1,funds);
  if(totalBet === 7){
      totalBet = funds;
    bets.heart = totalBet;
  } else {
      // 판돈을 나눕니다.
    let remaining = totalBet;
    do{
        let bet = rand(1,remaining);
      let face = randFace();
      bets[face] = bets[face] + bet;
      remaining = remaining - bet;
    } while(remaining > 0)
  }
  funds = funds - totalBet;

// 주사위를 구비립니다. 
  const hand = [];
  for(let roll = 0; roll<3; roll++){
      hand.push(randFace());
  }
  console.log(`\thand: ${hand.join(',')}`);

  // 딴 돈을 가져옵니다. 
  let winnings = 0;
  for (let die=0; die < hand.length; die++) {
      let face = hand[die];
    if(bets[face] > 0) winnings = winnings + bets[face]
  }
  funds = funds + winnings;
  console.log(`\twinnings: ${winnings}`);
}

console.log(`\tending funds: ${funds}`)
```

### 4-3. 메타 문법

배커스-나우르 표기법 확장을 떠올립니다. 
메타 문법을 써서 자바스크립트 제어문의 문법을 간결하게 표기 
MDN에서 사용하는 문법 

대괄호([])로 감싼 것은 옵션, 생략 부호(...)는 여기 들어갈 내용이 더 있다는 뜻 
> 블록문도 문이므로, 문을 쓸 수 있는 곳에는 항상 블록 문도 사용 

```js
// while
while(condition)
    statement

// if...else
if(condition)
    statement1
[else
    statement2]

// do..while
do
    statement
while(condition);

// for
for([initialization]; [condition]; [final-expression])
    statement
```





### 4-4. 유용한 제어문 패턴

**널리 쓰이는 패턴을 공부**

#### 4-4-1. continueans문을 사용하여 조건 중첩 줄이기
반복문 안에 조건문을 써야할 경우 
```js
// 변경 전
while(funds> 1 && funds <100){
  let totalBet = rand(1, funds);
  if(totalBet === 13) {
    console.log(Skip)
  } else{
    //플레이
  }
}

// 변경후
while(funds> 1 && funds <100){
  let totalBet = rand(1, funds);
  if(totalBet === 13) {
    console.log(Skip)
    continue
  } 
    //플레이
}
```

#### 4-4-2. break나 return 문을 써서 불 필요한 연산 줄이기

뭔가를 찾기 위해서 루프를 실행했다면, 찾으려는 것을 이미 찾은후에는 루프 바디를 계속 실행할 필요가 없습니다. 

```js
// 변경전
let firstPrime = null;
for(let n of bigArrayOfNumbers) {
  if(isPrime(n) && firstPrime === null)
    firstPrime = n;
}

// 변경후
let firstPrime = null;
for(let n of bigArrayOfNumbers) {
  if(isPrime(n)){
    firstPrime = n;
    break;
  }
}
```
루프가 함수 안에 있었다면 break 대신 return 문을 써도 됩니다.

#### 4-4-3. 배열을 수정할 때 감소하는 인덱스 사용하기 

배열에 루프를 실행하면서 루프 바디에서 배열을 수정하는 건 위험할 수 있습니다. 뜼하지 않게 종료 저건을 바꿀 수도 있으니깐. 

예를 들어 bigArrayOfNumbers에서 찾은 소수를 제거하고 싶다. splice 매서드는 배열 요소를 추가하거나 제거할 떄 사용합니다.

```js
for(let i=0; i<bigArrayOfNumbers.length; i++){
    if(isPrime(gibArrayOfNumers[i])) bigArrayOfNumbers.splice(i,1)
}

for(let i =bigArrayOfNumbers.length-1; i >=0; i--){
     if(isPrime(gibArrayOfNumers[i])) bigArrayOfNumbers.splice(i,1)
}
```

인덱스는 점점 커지는데 우리는 요소를 제거하고 있으므로, 소수가 연달아 존재한자면 그중 일부를 제거하지 않고 넘어갈 가능성이 있습니다. 감소하는 인덱스 사용으로 해결 

## 5. 표현식과 연산자

표현식(expression)은 값으로 평가될 있는 문입니다. 표현식, 즉 결과가 값인 문과, 표현식이 아님 문의 차이를 이해하는것이 매우 중요합니다. 

표현식이 아닌문(statement)은 **일종의 지시**라고 생각할 수 있고, 표현식은 **무언가를 요청하는 것**이라고 생각할수 있다. 

표현식은 값이 됩니다. 그 결과를 다른 표현식에 결합하여 다른값을 얻을수 있습니다. 하지만 표현식이 아닌문은 결합할 수 없습니다.

표현식은 값이 되므로 할당에 쓸 수 있습니다. 즉, 표현식의 결과를 변수나 상수, 프로퍼티에 할당할 수 있습니다. 

표현식은 대부분 **연산자**표현식입니다. 곱셈 표현식은 곱셈 연산자(*)와 피연산지 두개로 이루어집니다. 

연산자 표현식이 아닌 표현식에는 식별자 표현식과 리터럴 표현식 두가지가 있습니다. 

> **expression**\
> 볼트 A를 너트 B에 끼우고, 내가 검사할 수 있도록 가져오세요

> **statement**\
> 당신이 할 일은 볼트A를 너트B에 끼우는 일입니다.

코드 중에 값으로 변환될 수 있는 부분을 **표현식(expression)**이라고 부릅니다. 아래 목록은 표현식의 예입니다.

* 리터럴
    * 1
    * null
    * 'hello'
    * {prop: 1}
    * [* 1, 2, 3]
    * function(x, y) { return x + y }
    * (x, y) => x + y
* 연산자
    * 1 + 2
    * true && false
    * 'prop' in obj
    * delete obj.prop
    * typeof null
    * obj instanceof Object
    * new Object()
    * (variable 변수가 선언되어 있다면) variable = 1
* 기타
    * this
    * variable (변수)
    * obj.prop (속성)
    * func() (함수 호출)

### 5-1. 연산자

연산자를 표현식의 명사에 떄한 동사, 표현식이 값이 되는것이라면 연산자는 값을 만든 행동이라는 뜻입니다.

### 5-2. 산술 연산자

|연산자|내용|예제|
|:---|:---|:---|
|+|덧셈(문자열 병합에도 쓰입니다.)|3+2 //5|
|-|뺄셈|3-2 //1|
|/|나눗셈|3/2 //1.5|
|*|곱셈|3*2 //6|
|%|나머지|3%2 //1|
|-|단항 부정|-x //x의 부호를 바꿉니다. x가 5이면 -x는 -5입니다.|
|+|단항 플러스|+x //x가 숫자가 아니면 숫자로 변환을 시도합니다.|
|++|전위 증가|++x //x에 1을 더한 다음 평가합니다.|
|++|후위 증가|x++ //x를 평가한 다음 1을 더합니다.|
|--|전위 감소|--x //x에 1을 뺀 다음 평가합니다.|
|--|후위 감소|x-- //x의 값을 평가한 다음 1을 뺍니다.|

증감 연산자 ++는 할당 연산자와 덧셈 연산자를 하나로 합친 거나 다름없습니다 \
감소 연산자 --는 할당 연산자와 뺄셈 연사자를 한로 합친 거나 다름없습니다.

```js
let x =2;
const r1 = x++ + x++;
// ((x++) + (x++))
// (2 + (x++))
// (2 + 3)
// 5


const r2 = ++x + ++x;
// ((++x) + (++x))
// (5 + (++x))
// (5 + 6)
// 11

const r3 = x++ + ++x
// ((x++) + (++x))
// (5 + (++x))
// (6 + 8)
// 14
```

### 5-3. 연산자 우선순의 
괄호가 제일 먼저, 그다음에 곱셈과 나눗셈, 마지막에 덧셈과 뺼셈

### 5-4. 비교 연산자 
비교 연산자는 이름처럼 두 개의 값을 비교\
* 일치함 strict equality(===)
* 동등함 loose equality(==)
* 대소 관계(<,>,<=,=>)

동등과 일치의 차이는 두값이 같은 객체를 가리키거나 같은 타입이고 값도 같으면 일치(===),
두값이 같은 객체를 가리키거나 값은 값을 갖도록 변한할 수 있다면 두 값을 동등(==),
관계연산자는 관계가 있는 값을 비교하며, 문자열이나 숫처럼 원래 순서가 있는 데이터 다입에만 사용할 수 있습니다.

### 5-5. 숫자 비교

특별한 숫자형 값 NaN은 그 자신을 포함하여 무엇과도 같지 않습니다. 
```js
NaN === NaN //false
NaN == NaN //false
```
숫자가 NaN인지 알아보려면 내장된 isNaN 함수를 사용

자바스크립트에서 정수를 비교할때, 그 정수가 안전한 범위라면 (Number.MIN_SAFE_INTEGER이상, Number.MAX_SAFE_INTEGER 이하)
Number.EPSILON(약 2.22e-16)

### 5-6. 문자열 병합
"+" 연산자는 덧셈과 문자열 병합에 모두 사용합니다.

### 5-7. 논리 연산자
프로그래밍 언어에서 논리 연산자는 불리언 값에서만 동작하며 불리언 값만 동작합니다.

#### 5-7-1. 참 같은 값과 거짓 같은 값 

모든 데이터 타입을 참 같은 값과 거짓 같은 값으로 나눌 수 있습니다.\
거짓 같은 값은 다음과 같습니다. 

* undefined
* null
* false
* 0 
* NaN
* ''(빈 문자열)

이외 모두 참 같은 값입니다. 염두 해야되는 값 

* 모든 객체, valueOf() 매서드를 호출했을때 false를 반환하는 객체도 참 같은 값에 속합니다. 
* 배열, 빈 배열도 참 같은 값에 속합니다. 
* 공백만 있는 문자열 (" ")
* 문자열 "false"

**빈 배열 arr이 거짓 같은 값으로 평가되길 원한다면 arr.length를 쓰십시오. 반 배열에서 이 프롶퍼티를 호출하면 0을 반환하며 이는 거짓 같은 값입니다.**

### 5-8. AND, OR, NOT
논리 연산자 AND(&&), OR(||), NOT(!) 세 가지입니다.\
AND는 교집합, OR은 합집합, NOT은 부정 
```js
false && expression
true || expression
```
&& 연산자와 || 연산자의 실제 동작 방식은 다음과 같습니다.

* && - 왼쪽 피연산자를 평가해서 falsy이면 이 값을 바로 반환합니다. 아니라면 오른쪽 피연산자를 평가한 결과값을 반환합니다.
* || - 왼쪽 피연산자를 평가해서 truthy이면 이 값을 바로 반환합니다. 아니라면 오른쪽 피연산자를 평가한 결과값을 반환합니다.

> 단축 평가 - 두 값을 모두 평가하지 않아도 될 때 있을 그때를 단축 평가라고 함
 ```js
 const skipIt = true;
 let x = 0;
 const result = skipIt || x++;
 ```

 #### 5-8-2. 피연산자가 불리언이 아닐 때 논리 연산자가 동작하는 방법 

 NOT은 불리언 아닌 값을 반환할 수 없으므로 ! 연산자는 피연산자의 타입이 무엇이든 항상 불리언을 반환합니다. 피연산자가 truthy이면 false, falsy이면 true

 #### 5-8-3. 조건 연사자 

 조건연산자는 삼항연산자입니다. 이 연산자는 피연산자 세개를 받습니다. 조건 연산자는 if...else문과 동등한 표현식입니다.

 ```js
 const doIt = false;
 const result = doIt ? "Did it!" : "Didn't do it";
 ```

 **삼항 연산자는 문이 아니라 표현식이므로 다른 표현식과 결합하여 매우 유용하게 사용할 수 있습니다.**

## 7. 스코프

### 7-6. 함수, 클로저, 정적 스코프 

모든 함수를 전역에서 정의하고 함수 안에서 전역 스코프를 참조하지 않도록 신경 쓰는 전통적 프로그램에서는 함수가 어떤 스코프에 접금할 수 있는지 생각할 필요도 없습니다. 
하지만 최신 자바스크립트에서는 함수가 필요한 곳에서 즉석으로 정의할 때가 많습니다. 
* 함수를 변수나 객체 프로퍼티에 할당
* 배열에 추가
* 다른함수에 전달
* 함수가 함수를 반환
* 익명함수 

함수가 특정 스코프에 접근할 수 있도록 의도적으로 그 스코프에서 정의 - `클로저`
(스코프를 함수 주변으로 좁히는 것)

```js
let globalFunc;    // 정의되지 않은 전역 함수
{
    let blockVar = 'a'; //블록 스코프에 있는 변수
    globalFunc = function(){
        console.log(blockVar)
    }
}
globalFunc();
```

일반적으로 스코프 바깥쪽에 잇는 것들에는 접근할 수 없습니다. 함수를 정의해 클로저를 만들면 접근할 수 없었던 것들에 접근할 방법이 생깁니다.

