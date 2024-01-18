import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/dataActions";

const DataList = ({ data, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <h2>Data List</h2>
      <ul>
        {data.items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { fetchData }(DataList));
