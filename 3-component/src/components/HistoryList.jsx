import React from "react";
import List from "./List";
import store from "../store";
import { formatRelativeDate } from "../helpers";

export default class HistoryList extends React.Component {
  constructor() {
    super();

    this.state = {
      historyList: [],
    };
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    const historyList = store.getHistoryList();
    this.setState({
      historyList,
    });
  }

  handleClickRemove(event, keyword) {
    event.stopPropagation();
    store.removeHistory(keyword);
    this.fetch();
  }
  render() {
    return (
      <List
        data={this.state.historyList}
        onClick={this.props.onClick}
        renderItem={(item) => {
          return (
            <>
              <span>{item.keyword}</span>
              <span className="date">{formatRelativeDate(item.date)}</span>
              <button
                className="btn-remove"
                onClick={(event) => this.handleClickRemove(event, item.keyword)}
              ></button>
            </>
          );
        }}
      />
    );
  }
}
