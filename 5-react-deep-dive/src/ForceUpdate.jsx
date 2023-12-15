import React from "react";

class ForceUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "initial data",
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 항상 false를 반환하여 렌더링을 방지
    return false;
  }

  updateData = () => {
    // 데이터를 업데이트하고 forceUpdate 호출
    this.setState({ data: "updated data" }, () => {
      console.log("forceUpdate를 호출합니다.");
      this.forceUpdate();
    });
  };

  render() {
    return (
      <div>
        <h2>This is ForceUpdate Component</h2>
        <p>{this.state.data}</p>
        <button onClick={this.updateData}>Update Data</button>
      </div>
    );
  }
}

export default ForceUpdate;
