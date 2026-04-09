import { useState } from "react";

function MemoInsert({ onAdd }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;

    onAdd(text);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="memo-insert">
      <input
        type="text"
        placeholder="메모를 입력해 주세요"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        className="memo-input"
      />
      <button onClick={handleAdd} className="add-btn">
        추가
      </button>
    </div>
  );
}

export default MemoInsert;