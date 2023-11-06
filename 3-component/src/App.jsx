import React from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";

export default class App extends React.Component {
  search(searchKeyword) {
    console.log("TODO: search", searchKeyword);
  }

  handleReset() {
    console.log("TODO: handleReset");
  }

  render() {
    return (
      <>
        <Header title="검색" />
        <div className="container">
          <SearchForm
            onSubmit={(searchKeyword) => this.search(searchKeyword)}
            onReset={() => this.handleReset()}
          />
        </div>
      </>
    );
  }
}
