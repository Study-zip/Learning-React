import React from "react";
import { Component, createContext } from "react";

type Counter = {
  count: number;
};

const CounterContext = createContext<Counter | undefined>(undefined);
// createContext : context를 생성하는 데에 사용. Provider와 Consumer를 갖는 객체를 반환한다.
class CounterComponent extends Component {
  render() {
    // Provider로 주입된 상태를 CounterComponent(자식의 자식)에서 사용 중
    return (
      // Consumer는 context값을 소비하는 데 사용. 현재 context 값을 받아와 사용할 수 있다.
      <CounterContext.Consumer>
        {(state) => <p>{state?.count}</p>}
      </CounterContext.Consumer>
    );
  }
}

class DummyParent extends Component {
  render() {
    return (
      <>
        <CounterComponent />
      </>
    );
  }
}

export default class MyApp extends Component<{}, Counter> {
  state = { count: 0 };

  componentDidMount() {
    this.setState({ count: 1 });
  }

  handleClick = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  render() {
    // Provider는 context의 값을 제공하고 해당 값을 업데이트하는 역할, value prop을 통해 context 값을 하위 컴포넌트에 제공한다.
    return (
      <CounterContext.Provider value={this.state}>
        <button onClick={this.handleClick}>+</button>
        <DummyParent />
      </CounterContext.Provider>
    );
  }
}
