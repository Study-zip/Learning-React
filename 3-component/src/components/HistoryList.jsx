import React from "react";
import List from "./List";
import store from "../store";
import { formatRelativeDate } from "../helpers";

export default class HistoryList extends List {
  componentDidMount() {
    this.fetch();
  }

  fetch() {
    const data = store.getHistoryList();
    this.setState({
      data,
    });
  }

  handleRemoveHistory(event, keyword) {
    event.stopPropagation();
    store.removeHistory(keyword);
    this.fetch();
  }

  renderItem(item) {
    return (
      <>
        <span>{item.keyword}</span>
        <span className="date">{formatRelativeDate(item.date)}</span>
        <button
          className="btn-remove"
          onClick={(event) => this.handleRemoveHistory(event, item.keyword)}
        ></button>
      </>
    );
  }
}
