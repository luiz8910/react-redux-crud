import React, { useState } from "react";
import { connect } from "react-redux";
import { addData } from "../actions/dataActions";

const AddFormData = ({ addData }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addData({ name });

    setName("");
  };

  return (
    <div>
      <h2>Add Data</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default connect(null, { addData })(AddFormData);
