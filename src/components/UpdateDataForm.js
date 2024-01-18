import React, { useState } from "react";
import { connect } from "react-redux";
import { updateData } from "../actions/dataActions";

const UpdateDataForm = ({ dataId, initialName, updateData }) => {
  const [name, setName] = useState(initialName);

  const handleSubmit = (e) => {
    e.preventDefault();

    updateData(dataId, { name });
  };

  return (
    <div>
      <h2>Update Name</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default connect(null, { updateData })(UpdateDataForm);
