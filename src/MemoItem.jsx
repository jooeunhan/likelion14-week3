function MemoItem({ memo, onDelete }) {
  return (
    <div className="memo-item">
      <span className="memo-text">{memo.text}</span>
      <button
        className="delete-btn"
        onClick={() => onDelete(memo.id)}
      >
        삭제
      </button>
    </div>
  );
}

export default MemoItem;