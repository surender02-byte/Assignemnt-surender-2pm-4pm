import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function InputPreviewApp() {
  const [text, setText] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleSubmit = () => {
    setSubmittedText(text);
  };

  const handleClear = () => {
    setText("");
    setSubmittedText("");
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div
        className="card p-4 shadow"
        style={{ width: "280px", borderRadius: "12px" }}
      >
        {/* Title */}
        <div className="border border-info bg-info-subtle p-4 mb-4 rounded shadow-sm text-center">
             <h4 className="text-primary fw-semibold">
          Input  Preview  App
        </h4>
        </div>

        {/* Input */}
        <input
          type="text"
          className="form-control mb-3 text-center"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* Buttons */}
        <div className="d-flex justify-content-between mb-3">
          <button
            className="btn btn-primary w-50 me-2"
            onClick={handleSubmit}
            disabled={!text}
          >
            Submit
          </button>

          <button
            className="btn btn-secondary w-50"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>

        {/* Live Preview Box */}
        <div
          className="border border-info bg-info-subtle text-dark p-3 rounded"
          style={{
            backgroundColor: "#d9f7ff",
            borderRadius: "8px",
            fontWeight: "500",
          }}
        >
          <div>Live Preview :</div>
          <div>{submittedText || "—"}</div>
        </div>
      </div>
    </div>
  );
}

export default InputPreviewApp;
