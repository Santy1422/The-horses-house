import { useEffect, useState } from "react";

const TextArea = ({
  value = "",
  setValue = () => {},
  placeholder = "",
  label,
  hintEditable = true,
  rows = 2,
}) => {
  const [hint, setHint] = useState(hintEditable);
  const [visible, setVisible] = useState("invisible");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [divBlue, setDivBlue] = useState(false);
  const [text, setText] = useState(value);

  const onFocusDivBlue = (e) => {
    if (error) return;
    setDivBlue(!divBlue);
  };

  const onBlurDivBlue = (e) => {
    setDivBlue(false);
  };

  const showHint = () => {
    if (visible === "invisible") setVisible("visible");
    if (visible === "visible") setVisible("invisible");
  };

  const validateText = (text) => {
    const textRegex = /^[a-zA-Z0-9\s]+$/;
    return textRegex.test(text);
  };

  useEffect(() => {
    if (isValid) {
      setError("");
      setValue(text);
    } else {
      setError("Please enter a correct text");
      setValue("");
      setDivBlue(false);
    }
  }, [isValid, text]);

  const onChange = (e) => {
    setText(e.target.value);
    setIsValid(validateText(e.target.value));
  };

  return (
    <div className={`flex flex-col w-full items-start gap-1.5 `}>
      <label className="w-10 h-5 font-primary">{label}</label>
      <div
        className={`flex h-auto px-3.5 py-2.5 bg-white border border-gray-300 rounded items-center gap-2  w-full ${
          divBlue ? "border-blue-300" : ""
        } ${error ? "border-red-300" : text ? "border-green-300" : ""}`}
      >
        <textarea
          value={text}
          onChange={(e) => onChange(e)}
          placeholder={placeholder}
          rows={rows}
          style={{ resize: "none" }}
          className="w-full h-auto outline-0"
          onFocus={(e) => onFocusDivBlue(e)}
          onBlur={(e) => onBlurDivBlue(e)}
        />
        {error ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Error icon */}
          </svg>
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={showHint}
            className="hover:cursor-pointer"
          >
            {/* Hint icon */}
          </svg>
        )}
      </div>
      {error ? (
        <span className="w-full h-4  text-sm font-light leading-6 font-primary text-red-500 ">
          {error}
        </span>
      ) : (
        <span
          className={`w-full h-4  text-sm font-light leading-6 font-primary text-gray-400 ${visible}`}
        >
          {hint}
        </span>
      )}
    </div>
  );
};

export default TextArea;
