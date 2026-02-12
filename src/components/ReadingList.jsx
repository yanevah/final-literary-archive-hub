function ReadingList({ readingList, onRemove }) {
  return (
    <div>
      <h2>Your Reading List</h2>

      {readingList.length === 0 && <p>No authors yet.</p>}

      <ul>
        {readingList.map(author => (
          <li key={author.id}>
            {author.name}
            <button onClick={() => onRemove(author.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReadingList;
