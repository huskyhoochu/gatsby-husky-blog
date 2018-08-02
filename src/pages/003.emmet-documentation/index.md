---
title: 'Emmet 기본 사용법'
subtitle: '한국어 발음은 "에멧" 과 "에밋" 사이'
category: 'frontend'
excerpt: 'html 코드 타이핑을 도와주는 툴킷인 emmet을 익혀보자.'
date: '2017-11-25T20:08:26+09:00'
---

# Emmet Documentation

## 문법 Syntax

### 요소 Elements
html 태그를 입력하고 `tab`을 누르면 원하는 태그가 완성된다.

> 예: `div → <div></div>`


### 중첩 연산자 Nesting operators

중첩 연산자는 불필요한 중복 작업을 간소화할 때 사용한다.

#### child: >

`>`를 입력하면 종속되는 태그가 자동완성된다.

> 예: `div>ul>li`

```html
<div>
  <ul>
    <li></li>
  </ul>
</div>
```

#### sibling: +
`+`를 입력하면 같은 레벨의 태그가 자동완성된다.

> 예: `div+p+bq`

```html
<div></div>
<p></p>
<blockquote></blockquote>
```

#### climb-up: ^
`^`를 입력하면 하위레벨 안에서 빠져나와 동일한 레벨인 태그를 만들 수 있다.

> 예: `div+div>p>span+em^bq`

```html
<div></div>
<div>
  <p><span></span><em></em></p>
<!--blockquote만 빠져나와서 작성되었다-->
  <blockquote></blockquote>
</div>
```

`^^^`를 입력하면 최상위 레벨 태그를 만들 수 있다.

> 예: `div+div>p>span+em^^^bq`

```html
<div></div>
<div>
  <p><span></span><em></em></p>
</div>
<!--blockquote가 최상위 레벨에서 작성되었다-->
<blockquote></blockquote>

```

#### mutiplication: *

`*`를 입력하면 여러 개를 동시에 입력할 수 있다.

> 예: `ul>li*5`

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

#### grouping: ()
복잡한 입력을 할 때는 `()`를 사용한다.

> 예: `div>(header>ul>li*2>a)+footer>p`

```html
<div>
  <header>
    <ul>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
    </ul>
  </header>
  <footer>
    <p></p>
  </footer>
</div>
```
<br>

### 속성 연산자  Attribute operators

속성 연산자는 `id`나 `class`등 html 속성을 다룰 때 사용한다.

#### ID와 Class

`#`은 `id`를, `.`은 `class`를 지정할 때 사용한다.


> 예: `div#header+div.page+div#footer.class1.class2.class3`

```html
<div id="header"></div>
<div class="page"></div>
<div id="footer" class="class1 class2 class3"></div>
```


#### 커스텀 속성 Custom attributes

`[]`를 사용하면 커스텀 속성을 입력할 수 있다.

> 예: `td[title="Hello world!" colspan=3]`

```html
<td title="Hello world!" colspan="3"></td>
```

#### item numbering: $

`$`를 입력하면 연속되는 리스트에 숫자를 순서대로 입력할 수 있다.

> 예: `ul>li.item$*5`


```html
<ul>
  <li class="item1"></li>
  <li class="item2"></li>
  <li class="item3"></li>
  <li class="item4"></li>
  <li class="item5"></li>
</ul>

```

`$@-`를 입력하면 역순 입력도 가능하다.

> 예: `ul>li.item$@-*5`

```html
<ul>
  <li class="item5"></li>
  <li class="item4"></li>
  <li class="item3"></li>
  <li class="item2"></li>
  <li class="item1"></li>
</ul>
```
<br>

### 텍스트 Text

`{}`를 사용하면 요소 사이에 텍스트를 넣을 수 있다.

> 예: `a{Click me}`

```html
<a href="">Click me</a>
```

<br>
<hr>


## 잠재적 태그 네임 Implicit tag names

어떤 요소 안에서 `.`을 입력하면 주변에 있는 태그 네임을 인식해 자동 적용한다.

* `ul` 혹은 `ol`안에서는 자동으로 `li`를 생성한다.
* `table, tbody, thead, tfoot`안에서는 자동으로 `tr`을 생성한다.
* `tr`안에서는 `td`를 생성한다.


```html
<!--예 1-->
<div>
	.item
<div>

⬇︎

<div>
	<div class="item"></div>
</div>

<!--예 2-->

<ul class="nav">
	.item
</ul>

⬇︎

<ul class="nav">
  <li class="item"></li>
</ul>

```

<br>
<hr>

## 로렘 입숨 생성기 Lorem Ipsum generator

`lorem`을 입력하면 웹사이트 공간을 채우기 위한 무의미한 단락 덩어리가 제공된다. `lorem` 뒤에 숫자를 입력하면 그 숫자만큼의 단어를 제공해 준다.

`lorem`을 이용해 복잡한 명령을 내리는 것도 가능하다.

> 예: `li.generic-item>lorem10.item*4`

```html
<ul class="generic-list">
  <li class="item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.</li>
  <li class="item">Laboriosam quaerat sapiente minima nam minus similique illum architecto et!</li>
  <li class="item">Incidunt vitae quae facere ducimus nostrum aliquid dolorum veritatis dicta!</li>
  <li class="item">Tenetur laborum quod cum excepturi recusandae porro sint quas soluta!</li>
</ul>
```







