const Quizlist = [
  {
    id: 1,
    question: "다음 속성에 대한 설명 중 틀린 것을 고르세요.",
    answer: "alt 속성은 요소에 대한 설명으로 마우스를 호버하면 툴팁을 표시합니다.",
    view: {
      number1: "src 속성은 필요한 소스의 경로를 나타냅니다.",
      number2: "href 속성은 하이퍼링크가 가리키는 URL을 나타냅니다.",
      number3: "alt 속성은 요소에 대한 설명으로 마우스를 호버하면 툴팁을 표시합니다.",
      number4: "lang 속성은 요소 내에 사용된 언어를 정의합니다."
    },
    type: "html",
    score: 50
  },
  {
    id: 2,
    question: "<button> 과 <input> 요소에 대한 설명으로 올바른 것을 고르세요.",
    answer: "<button> 요소는 컨텐츠를 중앙으로 정렬하는 기본 스타일을 가진다.",
    view: {
      number1: "<button> 요소의 기본 타입은 button 이다.",
      number2: "<input> 요소는 인라인 요소임으로 자식으로 인라인 요소만 감싸줄수 있다.",
      number3: "<button> 요소는 컨텐츠를 중앙으로 정렬하는 기본 스타일을 가진다.",
      number4: "<button>의 submit 타입의 성능이 <input>의 submit 보다 우수하다."
    },
    type: "html",
    score: 50
  },
  {
    id: 3,
    question: "HTML 요소에 대한 설명으로 틀린 것을 고르세요",
    answer: "<head> 태그는 소개 및 탐색에 도움을 주는 콘텐츠를 나타냅니다.",
    view: {
      number1: "<p> 태그는 문단을 나타냅니다.",
      number2: "<head> 태그는 소개 및 탐색에 도움을 주는 콘텐츠를 나타냅니다.",
      number3: "<article> 태그는 사이트 안에서 독립적으로 구분해 재사용할 수 있는 구획을 의미합니다.",
      number4: "<body> 태그는 html 문서의 내용을 나타냅니다."
    },
    type: "html",
    score: 50
  },
  {
    id: 4,
    question: "다음은 flex에 대한 설명입니다. 올바르지 않은 설명을 하는 사람을 고르세요.",
    answer: "빙키 : flex-item들은 기본적으로 Axis 기준으로 정렬되기 때문에 기본 방향은 위쪽에서 아래쪽이야!",
    view: {
      number1: "파이 : flex는 부모를 통해 자식들을 컨트롤할 수 있어!",
      number2: "썬 : 그리고 직계자식까지만 영향을 줄 수 있지.",
      number3: "빙키 : flex-item들은 기본적으로 Axis 기준으로 정렬되기 때문에 기본 방향은 위쪽에서 아래쪽이야!",
      number4: "뮤라 : flex-direction이 column일 때 가로로 중앙정렬을 하고 싶다면 align-item을 center로 설정하면 된대."
    },
    type: "html",
    score: 50
  },
  {
    id: 5,
    question: "다음 Array 메서드 중 return 값이 undefined인 것은?",
    answer: "forEach",
    view: {
      number1: "find",
      number2: "filter.",
      number3: "map",
      number4: "forEach"
    },
    type: "css",
    score: 50
  },
  {
    id: 6,
    question: "bootstrap의 container는 1개의 row안에 몇 colum으로 이뤄져 있나요?",
    answer: "12",
    view: {
      number1: "8",
      number2: "10",
      number3: "12",
      number4: "16"
    },
    type: "css",
    score: 50
  },
  {
    id: 7,
    question: "다음 중 SASS에서 Extend를 사용하기 위한 키워드로 알맞은 것은?",
    answer: "%",
    view: {
      number1: "@",
      number2: "%",
      number3: "$",
      number4: "&"
    },
    type: "css",
    score: 50
  },
  {
    id: 8,
    question: "다음 중 vi 에디터에서 삽입하기 명령으로 알맞은 것을 고르세요.",
    answer: "i",
    view: {
      number1: "k",
      number2: "b",
      number3: "i",
      number4: "x"
    },
    type: "css",
    score: 50
  },
  {
    id: 9,
    question: "다음 중 promise와 연계할 수 있는 명령어가 아닌 것은?",
    answer: "try",
    view: {
      number1: "then",
      number2: "catch",
      number3: "try",
      number4: "finally"
    },
    type: "js",
    score: 50
  },
  {
    id: 10,
    question: "다음 중 float 을 해제하는 방법으로 적절한 것을 고르세요.",
    answer: "Float 된 요소에 display:inline-block 속성을 부여한다.",
    view: {
      number1: "Float 된 요소에 display:inline-block 속성을 부여한다.",
      number2: "Float 된 요소의 부모요소에 clear:both 속성을 부여한다.",
      number3: "Float 된 요소의 다음 형제요소에 overflow:hidden 속성을 부여한다.",
      number4: "Float 된 요소의 부모요소에 overflow:hidden 속성을 부여한다."
    },
    type: "js",
    score: 50
  },
  {
    id: 11,
    question: "다음 중 css 선택자 우선순위(가중치)가 올바른 것을 고르세요.",
    answer: "Inline 스타일 > !important > 가상클래스 선택자 > class 선택자",
    view: {
      number1: "!important > ID 선택자 > class 선택자 > 가상 요소 선택자",
      number2: "Inline 스타일 > !important > 가상클래스 선택자 > class 선택자",
      number3: "가상 요소 선택자 > class 선택자 > 가상클래스 선택자 > 요소선택자",
      number4: "ID 선택자 > 가상클래스 선택자 > 요소 선택자 > 가상 요소 선택자"
    },
    type: "js",
    score: 50
  },
  {
    id: 12,
    question: "다음 중 display:inline 에 대한 설명으로 올바른 내용을 고르세요.",
    answer: "display:inline 요소의 자식으로는 반드시 inline 요소만 가능하다.",
    view: {
      number1: "normal flow 에 존재할 때 float 된 요소를 알아보지 못한다.",
      number2: "한 라인을 모두 차지하는 특징이 있다.",
      number3: "마진 탑(margin-top)값의 설정이 불가능하다.",
      number4: "display:inline 요소의 자식으로는 반드시 inline 요소만 가능하다."
    },
    type: "js",
    score: 50
  }
]

export default Quizlist;