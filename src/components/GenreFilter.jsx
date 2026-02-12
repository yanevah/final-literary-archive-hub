function GenreFilter({ selectedGenre, onGenreChange }) {
  const genres = ["All", "Sci-fi", "Fantasy", "Romance", "Fiction"];

  return (
    <select value={selectedGenre} onChange={e => onGenreChange(e.target.value)}>
      <option value="All">All</option>
      <option value="Sci-Fi">Sci-Fi</option>
      <option value="Fantasy">Fantasy</option>
      <option value="Romance">Romance</option>
      <option value="Fiction">Fiction</option>
    </select>
  );
}

export default GenreFilter;
