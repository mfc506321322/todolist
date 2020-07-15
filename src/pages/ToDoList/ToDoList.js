import React from 'react';
import { connect } from 'dva';
import {} from 'antd-mobile';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      b:2
    };
  }
  componentWillMount() {}
  render() {
    return (
      <div>
        啦啦啦啦
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.ToDoList,
    a:1
  }
}

export default connect(mapStateToProps)(ToDoList);