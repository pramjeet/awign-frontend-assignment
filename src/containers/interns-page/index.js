import React, { Component } from "react";
import { connect } from "react-redux";
import InternsTable from "../../components/interns-table";
import Header from "../../components/header";
import { fetchInterns } from "../../actions/interns-actions";

class InternsPage extends Component {
  componentDidMount() {
    this.props.fetchInterns();
  }
  render() {
    const { interns, isFetchingInterns, fetchingInternsErrorMsg } = this.props;

    return (
      <div>
        <Header title="Interns" />
        <div className="container">
          {isFetchingInterns && <p>Loading..</p>}
          {!isFetchingInterns &&
            !fetchingInternsErrorMsg && <InternsTable interns={interns} />}
          {!isFetchingInterns &&
            fetchingInternsErrorMsg && (
              <p className="text-danger">{fetchingInternsErrorMsg}</p>
            )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    interns: state.internsState.interns,
    isFetchingInterns: state.internsState.isFetchingInterns,
    fetchingInternsErrorMsg: state.internsState.fetchingInternsErrorMsg
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchInterns: () => dispatch(fetchInterns())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InternsPage);
