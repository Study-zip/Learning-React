import React from "react";
import useSWR from "swr"; // pnpm install swr

const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const ExampleComponent = () => {
  // SWR 훅을 사용하여 데이터 가져오기
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/todos/1",
    fetcher
  );

  if (error) return <div>데이터를 불러오는 중 에러가 발생했습니다.</div>;
  if (!data) return <div>데이터를 불러오는 중...</div>;

  return (
    <div>
      <h1>할 일: {data.title}</h1>
      <p>완료 여부: {data.completed ? "완료" : "미완료"}</p>
    </div>
  );
};

export default ExampleComponent;
