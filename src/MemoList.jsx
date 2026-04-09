import { useState } from "react";
import MemoInsert from "./MemoInsert";
import MemoItem from "./MemoItem";

function MemoList() {
  const [memos, setMemos] = useState([]);

  const addMemo = (text) => {
    const newMemo = {
      id: Date.now(),
      text,
    };

    setMemos([newMemo, ...memos]);
  };

  const deleteMemo = (id) => {
    setMemos(memos.filter((memo) => memo.id !== id));
  };

  return (
    <div className="memo-page">
      <div className="memo-container">
        <h1 className="memo-title">My MemoList</h1>
        <p className="memo-subtitle">중요한 것들을 작성해보아요.</p>

        <MemoInsert onAdd={addMemo} />

        <div className="memo-list">
          {memos.length === 0 ? (
            <div className="empty-message">아직 작성된 메모가 없어요.</div>
          ) : (
            memos.map((memo) => (
              <MemoItem
                key={memo.id}
                memo={memo}
                onDelete={deleteMemo}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default MemoList;