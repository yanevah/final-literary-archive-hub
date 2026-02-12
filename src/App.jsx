import { useState, useEffect } from "react";
import authorsData from "./data/authors";
import AuthorList from "./components/AuthorList";
import GenreFilter from "./components/GenreFilter";
import ReadingList from "./components/ReadingList"; 
import RequestForm from './components/RequestForm'; 

function App() {
  // ----- STATE -----

   const [authors, setAuthors] = useState(
      authorsData.map((author) => ({
        ...author,
        // Convert book string to array
        books: typeof author.books === 'string' ? author.books.split(", ") : author.books,
        // NEW: Convert genre string to array if it isn't one (e.g., "Sci-Fi, Fiction" -> ["Sci-Fi", "Fiction"])
        genre: typeof author.genre === 'string' ? author.genre.split(", ") : author.genre,
        liked: false,
      }))
    );

  const [readingList, setReadingList] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");

  // ----- EFFECTS (localStorage) -----

  useEffect(() => {
    const savedList = localStorage.getItem("readingList");
    if (savedList) {
      setReadingList(JSON.parse(savedList));
    }
  }, []);
   
  // Save reading list whenever it changes

  useEffect(() => {
    localStorage.setItem("readingList", JSON.stringify(readingList));
  }, [readingList]);

  // ----- HANDLERS -----

    const handleLike = (id) => {
      setAuthors((prev) =>
        prev.map((author) =>
          author.id === id
            ? { ...author, liked: !author.liked }
            : author
        )
      );
    };
    // --- FUNCTIONS ---

    // Add an author to the reading list
    const addToReadingList = (author) => {
      if (!readingList.find((item) => item.id === author.id)) {
        setReadingList([...readingList, author]);
      }
    };
    
    // Remove an author from the reading list

    const removeFromReadingList = (id) => {
      setReadingList((prevList) =>
        prevList.filter((author) => author.id !== id)
      );
    };

  // -----Search Bar------

    const [searchTerm, setSearchTerm] = useState("");



 

    // ----- FILTER LOGIC -----
    const filteredAuthors = authors.filter((author) => {
    // Check if the author matches the selected genre
    const matchesGenre = selectedGenre === "All" || author.genre.includes(selectedGenre);

    // Check if the author's name matches the search term
    const matchesSearch = author.name.toLowerCase().includes(searchTerm.toLowerCase());

    // Only return authors that meet BOTH criteria
    return matchesGenre && matchesSearch;
  });

  // ----- RENDER -----

  return (
    <div
      style={{
        minHeight: "100vh",
        maxWidth: "1900px",
        minWidth: "800px",
        margin: "0 auto",
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#d6cbab",
        padding: "2rem",
        fontFamily: "'Merriweather', serif",
      }}
    >
      <header style={{ 
          backgroundColor: "#1a365d", 
          color: "white", 
          padding: "3rem 1rem", 
          textAlign: "center",
          borderRadius: "0 0 20px 20px",
          marginBottom: "2rem"
        }}>
          <h1 style={{ fontSize: "2.5rem", margin: 0 }}>📚 Literary Archive Hub 📚</h1>
          <p style={{ opacity: 0.8 }}>Discover Your Next Favourite Author</p>
        </header>

      {/* Search Bar */}
      <div style={{ marginBottom: "1.5rem" }}>
        <input
          type="text"
          placeholder="Search by author name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "1rem"
          }}
        />
      </div>

      <div style={{ display: "flex", gap: "2rem" }}>
        
        {/* LEFT SIDE */}

        <div style={{ flex: 2 }}>
          {/* Dynamic Genre Filter */}
            <div style={{ marginBottom: "1.5rem" }}>
              {/* A unique list of all genres present in your data */}
              {["All", ...new Set(authors.flatMap(a => a.genre))].map((genre) => (
                <button
                  key={genre}
                  onClick={() => setSelectedGenre(genre)}
                  style={{
                    marginRight: "8px",
                    marginBottom: "8px",
                    padding: "8px 14px",
                    borderRadius: "20px",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: selectedGenre === genre ? "#3e2723" : "#fdf6e3",
                    color: selectedGenre === genre ? "#fffcf5" : "#204222",
                  }}
                >
                  {genre}
                </button>
              ))}
            </div>

          <AuthorList
            authors={filteredAuthors}
            onLike={handleLike}
            onAddToReadingList={addToReadingList}
          />
        </div>

        {/* RIGHT SIDE - Reading List */}
        

        <div
          style={{
            flex: 1,
            backgroundColor: "#f7f2e6",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
            position: "sticky", 
            top: "20px",
            height: "fit-content"
          }}
        >
          <h2>📚 Reading List</h2>

          {readingList.length === 0 ? (
            <p style={{ color: "#3e2723" }}>
              No authors added yet.
            </p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {readingList.map((author) => (
                <li
                  key={author.id}
                  className="reading-list-item"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  {author.name}
                  <button
                    onClick={() =>
                      removeFromReadingList(author.id)
                    }
                    style={{
                      padding: "4px 8px",
                      borderRadius: "6px",
                      border: "none",
                      backgroundColor: "#a10e0e",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <hr style={{ margin: "3rem 0", border: "0", borderTop: "1px solid #ddd" }} />
      <RequestForm />
    </div>
  );
}

export default App;