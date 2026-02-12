// src/components/AuthorList.jsx
import AuthorCard from "./AuthorCard";

function AuthorList({ authors, onLike, onAddToReadingList }) {
  return (
    <div>
      {authors.map((author) => (
        <AuthorCard
          key={author.id}
          author={author}
          onLike={onLike}
          onAddToReadingList={onAddToReadingList}
        />
      ))}
    </div>
  );
}

export default AuthorList;
