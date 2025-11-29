import React from "react";

function Form({ title }) {
  return (
    <>
      <h3 className="mb-4">{title}</h3>

      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputText"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="file" className="form-label">
            File
          </label>
          <input
            type="file"
            className="form-control"
            id="file"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
