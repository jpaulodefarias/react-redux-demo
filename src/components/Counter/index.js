import React from "react";
import { connect } from "react-redux";
import { counter } from "../../store/actions";

class Counter extends React.Component {
  componentDidMount() {
    this.props.increase();
  }

  render() {
    return this.props.count;
  }
};

const mapStateToProps = state => ({
  count: state.counter.count
});

const mapDispatchToProps = dispatch => ({
  increase: () => dispatch(counter.increment())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);