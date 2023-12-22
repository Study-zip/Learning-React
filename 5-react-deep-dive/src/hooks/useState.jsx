const MyReact = function () {
  const global = {};
  let index = 0;

  function useState(initialState) {
    if (!global.states) {
      // 애플리케이션 전체의 states 배열을 초기화한다.
      // 최초 접근이라면 빈 배열로 초기화 한다.
      global.states = [];
    }

    // states 정보를 조회해서 현재 상태값이 있는지 확인하고,
    // 없다면 초깃값으로 설정한다.
    const currenState = global.states[index] || initialState;
    // states의 값을 위에서 조회한 현재 값으로 업데이트한다.
    global.states[index] = currenState;

    // 즉시 실행 함수로 setter를 만든다.
    const setState = (function () {
      // 현재 index를 클로저로 가둬놔서 이후에도 계속해서 동일한 index에
      // 접근할 수 있도록 한다.
      let currentIndex = index;
      return function (value) {
        global.states[currentIndex] = value;
        // 컴포넌트를 렌더링한다. 실제로 컴포넌트를 렌더링하는 코드는 생략.
      };
    })();
    // useState를 쓸 때마다 index를 하나씩 추가한다. 이 index는 setState에서 사용된다.
    // 즉, 하나의 state마다 index가 할당되어 있어 그 index가 배열의 값(global.states)을
    // 가리키고 필요할 때마다 그 값을 가져오게 한다.
    index = index + 1;

    return [currentState, setState];
  }

  // 실제 useState를 사용하는 컴포넌트
  // function Component() {
  //   const [value, setValue] = useState(0);
  // }
};
