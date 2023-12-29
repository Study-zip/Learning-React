import React, { useContext, useMemo } from "react";
import { useEffect } from "react";
import { ChangeEvent } from "react";
import { useId } from "react";
import { useCallback } from "react";
import { PropsWithChildren, createContext, useRef } from "react";

export const CounterStoreContext = createContext<Store<CounterStore>>(
  // 어떤 Context를 만들지 타입과 함께 정의
  createStore<CounterStore>({ count: 0, text: hello })
);

export const CounterStoreProvider = ({
  // 정의된 Context를 사용하기 위해 Provider 정의
  initialState,
  children,
}: PropsWithChildren<{
  initialState: CounterStore;
}>) => {
  const storeRef = useRef<Store<CounterStore>>();
  // Ref를 사용해서 스토어를 제공, Provider로 넘기는 props가 불필요하게 변경되어서 리렌더링되는 것을 막기 위해서임
  // useRef를 사용했기 때문에 오직 최초 렌더링에서만 스토어를 만들어서 값을 내려주게 됨.

  // 스토어를 생성한 적이 없다면 최초에 한 번 생성한다.
  if (!storeRef.current) {
    storeRef.current = createStore(initialState);
  }
  return (
    <CounterStoreContext.Provider value={storeRef.current}>
      {children}
    </CounterStoreContext.Provider>
  );
};

export const useCounterContextSelector = <State extends unknown>(
  selector: (state: CounterStore) => State
) => {
  const store = useContext(CounterStoreContext);
  // useStoreSelector를 사용해도 동일하다.
  const subscription = useSubscription(
    useMemo(
      () => ({
        getCurrentValue: () => selector(store.get()),
        subscribe: store.subscribe,
      }),
      [store, selector]
    )
  );
  return [subscription, store.set] as const;
};

const ContextCounter = () => {
  const id = useId();

  const [counter, setStore] = useCounterContextSelector(
    useCallback((state: CounterStore) => state.count, [])
  );
  function handleClick() {
    setStore((prev) => ({ ...prev, count: prev.count + 1 }));
  }
  function createStore(initialState: CounterStore): any {
    throw new Error("Function not implemented.");
  }

  useEffect(() => {
    console.log(`${id} Counter Rendered`);
  });
  return (
    <div>
      {counter} <button onClick={handleClick}>+</button>
    </div>
  );
};

const ContextInput = () => {
  const id = useId();
  const [text, setStore] = useCounterContextSelector(
    useCallback((state: CounterStore) => state.text, [])
  );
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setStore((prev) => ({ ...prev, text: e.target.value }));
  }
  useEffect(() => {
    console.log(`${id} Counter Rendered`);
  });
  return (
    <div>
      <input value={text} onChange={handleChange} />
    </div>
  );
};

export default function App() {
  return (
    <>
      {/* 0 */}
      <ContextCounter />
      {/* hi */}
      <ContextInput />
      <CounterStoreProvider initialState={{ count: 10, text: "hello" }}>
        {/* 10 */}
        <ContextCounter />
        {/* hello */}
        <ContextInput />
        <CounterStoreProvider initialState={{ count: 20, text: "welcome" }}>
          {/* 20 */}
          <ContextCounter />
          {/* welcome */}
          <ContextInput />
        </CounterStoreProvider>
      </CounterStoreProvider>
    </>
  );
}
