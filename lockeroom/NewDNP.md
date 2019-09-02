# 새로운 동네프로 환경만들기

새로운 동네프로 비즈, 어드민, 프로, 커스토머 작업전에 사실 백엔드 부분을 완전히 다시 세팅할 필요가 있고, 그 부분은 프론트엔드 개발자분과 얘기하기보다 제가 정해서 알려드리는 편이 속도가 더 날거라고 생각했습니다.

그래서 DB 선정과 ERD(Entity Relationship Diagram)를 그려놓고 실제 DB와 테이블을 만들어 놓는 것이 제가 해야할 선행작업이라고 생각했어요.

# 1. 서버 언어, 시간등 환경설정
언어와 시간설정은 중요합니다. 데이터베이스의 정렬방식에도 영향을 죽거든요.

## 1.1. locale : 서버 언어 설정 
Locale이란 세계 각 나라에서 가지고 있는 언어, 날짜, 시간 등에 관해 i18n(국제화)를 통해 같은 프로그램이더라도 OS별로 설정되어있는 것에 따라 어떤 방식으로 출력할지 결정하게 되는 것을 말합니다.

한국의 Locale은 보통 ko_KR.UTF-8로 사용합니다.

### 1.1.1. locale 확인
단순히 locale이라고 터미널에 입력해주면 됩니다.
```
[root@server ~]# locale
LANG=en_US.UTF-8
LANGUAGE=
LC_CTYPE="en_US.UTF-8"
LC_NUMERIC="en_US.UTF-8"
LC_TIME="en_US.UTF-8"
LC_COLLATE="en_US.UTF-8"
LC_MONETARY="en_US.UTF-8"
LC_MESSAGES="en_US.UTF-8"
LC_PAPER="en_US.UTF-8"
LC_NAME="en_US.UTF-8"
LC_ADDRESS="en_US.UTF-8"
LC_TELEPHONE="en_US.UTF-8"
LC_MEASUREMENT="en_US.UTF-8"
LC_IDENTIFICATION="en_US.UTF-8"
LC_ALL=en_US.UTF-8
```
### 1.1.2. locale 변경
바꾸기 전에 먼저 한글 패키지를 설치해야합니다(이미 있을 수도 있습니다).
`language-pack-ko`라는 이름의 패키지가 설치되어있는지 확인해봅시다.

```
dpkg -l | grep ko
```

없다면 다음과 같이 설치해주세요.
```
sudo apt-get install language-pack-ko
```
참고로 `apt`는 Advanced Packaging Tool의 약어입니다. 패키지관리자라고 보면되요. 
지금 상태는 한국어 패키지가 있는 상태인데 이걸 locale에 등록하려면 다음 명령어를 쳐야합니다.
```
sudo locale-gen ko_KR.UTF-8
```
그 다음 `nano /etc/default/locale`로 locale파일을 수정합니다. en_US로 되어있던 것을 ko_KR로 바꿔주세요.
```
LANG=ko_KR.UTF-8
LC_ALL=ko_KR.UTF-8
LA_COLLATE="C"
```
그리고 저장하고 나오면 됩니다!

이제 ssh로 다시 접속하면 적용이 완료 됩니다!
## 1.2. tzselect : 서버 시간대 설정
서버의 시간대 확인은 터미널에 date라고 쳐서 확인할 수 있습니다.
```
[root@server ~]# date
2019. 08. 31. (토) 11:26:43 KST
```
만약 한국 시간대가 아니라면 다음과 같이 tzselect를 해줍니다.
```
[root@server ~]# tzselect
Please identify a location so that time zone rules can be set correctly.
Please select a continent, ocean, "coord", or "TZ".
 1) Africa
 2) Americas
 3) Antarctica
 4) Asia
 5) Atlantic Ocean
 6) Australia
 7) Europe
 8) Indian Ocean
 9) Pacific Ocean
10) coord - I want to use geographical coordinates.
11) TZ - I want to specify the time zone using the Posix TZ format.
#? 4
Please select a country whose clocks agree with yours.
 1) Afghanistan		  18) Israel		    35) Palestine
 2) Armenia		  19) Japan		    36) Philippines
 3) Azerbaijan		  20) Jordan		    37) Qatar
 4) Bahrain		  21) Kazakhstan	    38) Russia
 5) Bangladesh		  22) Korea (North)	    39) Saudi Arabia
 6) Bhutan		  23) Korea (South)	    40) Singapore
 7) Brunei		  24) Kuwait		    41) Sri Lanka
 8) Cambodia		  25) Kyrgyzstan	    42) Syria
 9) China		  26) Laos		    43) Taiwan
10) Cyprus		  27) Lebanon		    44) Tajikistan
11) East Timor		  28) Macau		    45) Thailand
12) Georgia		  29) Malaysia		    46) Turkmenistan
13) Hong Kong		  30) Mongolia		    47) United Arab Emirates
14) India		  31) Myanmar (Burma)	    48) Uzbekistan
15) Indonesia		  32) Nepal		    49) Vietnam
16) Iran		  33) Oman		    50) Yemen
17) Iraq		  34) Pakistan
#? 23

The following information has been given:

	Korea (South)

Therefore TZ='Asia/Seoul' will be used.
Local time is now:	2019. 08. 31. (토) 11:35:43 KST.
Universal Time is now:	2019. 08. 31. (토) 02:35:43 UTC.
Is the above information OK?
1) Yes
2) No
#? 1

You can make this change permanent for yourself by appending the line
	TZ='Asia/Seoul'; export TZ
to the file '.profile' in your home directory; then log out and log in again.

Here is that TZ value again, this time on standard output so that you
can use the /usr/bin/tzselect command in shell scripts:
Asia/Seoul
```
선택형으로 터미널이 나오면 Asia, Korea(south)를 선택해줍니다.

`nano ~/.profile`로 들어가 다음 한 줄을 추가해줍니다.
```
export TZ='Asia/Seoul'
```
끝입니다. 로그아웃 했다가 다시 로그인해보세요! `date`를 치면 한국시간으로 설정되어있을겁니다.
# 2. DB선정 및 설치
사실 MySQL은 영리목적으로 쓸 때 사용료를 지불해야하는 완전 무료가 아닌 DB?소프트웨어?입니다. 오라클의 경우 너무 비싸구요. 어쩔 수 없이 PostgreSQL이 답이라고 생각했습니다. 완전한 무료고, 커뮤니티도 점점 커지고 인기도 많아지고 있으니까요.

## 2.1 PostgreSQL 설치
동네프로 클라우드는 Ubuntu 16.04.6 를 운영체제로 하고 있습니다.
해당 운영체제에서 PostgreSQL을 설치하기 위해서 콘솔?터미널?배쉬에 다음과 같이 입력해줍시다.
```bash
apt-get install postgresql
```
설치가 완료되면 다음과 같은 명령어로 설치확인을 할 수 있습니다.

```bash
dpkg -l | grep postgres
```
dpkg는 데비안 패키지 관리 프로그램입니다. 그래서 d(ebial)p(ac)k(a)g(e) 약자를 본따 dpkg 라고 부르는 거죠.
-l 옵션은 설치된 리스트를 확인하는 옵션입니다. 

설치를 확인 했다면 psql을 실행해봅시다. 반응형 터미널로 진입하는 명령어인데, postgres라는 유저로 들어가겠다는 뜻입니다.
```bash
sudo -u postgres psql
```
아니면 그냥 유저를 바꿔서 접속하는 방법도 있습니다.
```bash
sudo su postgres
psql
```
그럼 쉘이 다음과 같이 변합니다.
```
postgres=#
```
이제 postgres라는 기본 생성된 루트 유저의 비밀번호를 바꿉시다. `mypassword`부분에 원하는 비밀번호를 쳐주시면됩니다.
```postgresql
alter user postgres with encrypted password 'mypassword';
```
또는
```postgresql
alter user postgres with password 'mypassword';
```
`ALTER ROLE`이라는 문구가 화면에 출력되면 정상적으로 패스워드를 바꾼겁니다.
이제 `\q`라고 입력하셔서 반응형 터미널을 빠져나와 postgresql을 재시작 해줍시다.

```
service postgresql restart
```
이제 변경된 비밀번호로 로그인해줍시다.
```
psql -U postgres -h localhost
```
만약 `sudo su postgres`로 유저를 바꾼상태라면 그냥 `psql`이라고 처도 접속됩니다.


반응형 터미널(`postgres=#`으로 진입한 상태)에서 쓸 수 있는 몇가지 간단한 명령어를 기억해둡시다

명령어 | 기능
-|-
`\l`|데이터베이스 조회
`\du`|유저 조회
`\q`|반응형 터미널 종료
`\?`|도움말 보기

## 2.2. 데이터베이스 생성/삭제/연결

### 2.2.1. 데이터베이스 생성
`postgres=#`로 진입한 상태에서 다음과 같이 데이터베이스를 만들 수 있습니다.
항상 세미콜론을 붙여야 명령이 잘 실행됩니다! 안붙이면 계속 이어서 입력하는거나 다름 없게 됩니다!
```postgresql
CREATE DATABASE 데이터베이스_이름;
```
`\l`로 데이터베이스가 생성되었는지 확인해보세요. 잘 생성 되었나요?
### 2.2.1. 데이터베이스 삭제
`postgresql`도 결국 sql언어이기에 mysql, oracle에서 이용했던 명령어 대부분을 그대로 쓸 수 있습니다. 데이터베이스를 지우는 것도 마찬가지죠.
```postgresql
DROP DATABASE 데이터베이스_이름;
```
### 2.2.3. 데이터베이스 연결
mysql 에서의 `use 데이터베이스_이름;` 처럼 데이터베이스 안으로 들어가는 명령어라고 생각하시면 될 것 같아요. 다음처럼 쳐주세요.
```
\c 데이터베이스_이름;
```
그럼 user이름이 데이터베이스_이름 으로 바뀌면서 다음과 같은 문구가 콘솔에 출력됩니다.
```
You are now connected to database "데이터베이스_이름" as user "postgres".
```

## 2.3. 테이블 생성/삭제

### 2.3.1. 테이블 샏성
```postgresql
create table users(
  id serial primary key,
  name varchar(20) not null,
  created_at timestamptz default current_timestamp(0)
);
create table posts(
  id serial primary key,
  title varchar(20) not null,
  uid integer not null references users(id),
  created_at timestamptz default current_timestamp(0)
);
```
마찬가지로 mysql 과 같은 문법인데 다만 데이터타입이 생소하죠? `serial`은 4byte정수로 auto_increment되는 녀석입니다. `timestamptz` 는 타임스탬프 + 타임존을 같이 가진 녀석이에요.

current_timestamp는 옵셔널 아규먼트로 precision을 받습니다. 즉 정밀도죠. 기본값은 풀 정밀도인데 그럼 다음과 같이 밀리세컨드 이하까지 다나옵니다. 
```
dongnepro=# select current_timestamp;
              now              
-------------------------------
 2019-08-31 01:45:29.064962+09
(1 row)
```

저는 0으로 주었습니다. 그래서 다음과 같이 초 단위까지만 저장합니다.
```
dongnepro=# select current_timestamp(0);
      timestamptz       
------------------------
 2019-08-31 01:48:17+09
(1 row)
```

여기서 두가지 명령어를 더 알아둡시다
명령어 | 기능
-|-
`\dt`|테이블 목록 조회
`\d 테이블_이름`|테이블 구조 조회(sql에서 `desc 테이블_이름`과 같습니다)

**주의** : `user`는 예약어입니다. 다른 이름을 쓰세요! 정 쓰고 싶다면 따옴표(")를 붙여서 쓰세요! 하지만 `user`라는 테이블에 접근하는 모든 경우에 따옴표를 붙여서 접근해야합니다.
```
CREATE TABLE "user"(
  ...
);
```

### 2.3.2. 테이블 삭제
```postgresql
DROP TABLE 테이블_이름;
```

## 2.4. 데이터 생성/읽기/수정/삭제(CRUD)

### 2.4.1. 데이터 생성 : INSERT
mysql문법과 완전 동일합니다.
```postgresql
INSERT INTO users(name) VALUES('제관');
```

### 2.4.2. 데이터 읽기 : SELECT
mysql문법과 완전 동일합니다.
```postgresql
SELECT * FROM users;
```
결과
```
dongnepro=# select * from users;
id | name |       created_at       
----+------+------------------------
  1 | 제관 | 2019-08-31 01:53:53+09
```

### 2.4.3. 데이터 수정 : UPDATE
mysql문법과 완전 동일합니다.
```postgresql
UPDATE users SET name='갓제관' WHERE id=1;
```
결과
```
dongnepro=# select * from users;
 id |  name  |       created_at       
----+--------+------------------------
  1 | 갓제관 | 2019-08-31 01:53:53+09
(1 row)
```

### 2.4.4. 데이터 삭제 : DELETE
mysql문법과 완전 동일합니다.
```postgresql
DELETE FROM users WHERE id=1;
```
결과
```
dongnepro=# select * from users;
 id | name | created_at 
----+------+------------
(0 rows)
```
