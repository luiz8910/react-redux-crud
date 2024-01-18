import React from "react";
import { connect } from "react-redux";
import { deleteData } from "../actions/dataActions";

const DeleteDataButton = ({ dataId, deleteData }) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete?")) {
      deleteData(dataId);
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete Data</button>
    </div>
  );
};

export default connect(null, deleteData)(DeleteDataButton);
