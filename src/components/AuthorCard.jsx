// src/components/AuthorCard.jsx
import { useState } from 'react';

function AuthorCard({ author, onLike, onAddToReadingList }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      //  Two event listeners to track the mouse
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      
      style={{
        backgroundColor: "white",
        padding: "1.5rem",
        borderRadius: "12px",
        marginBottom: "1.5rem",
        transition: "all 0.3s ease", 
        
        // DYNAMIC STYLES:  Change based on the 'isHovered' state
        boxShadow: isHovered 
          ? "0 12px 24px rgba(0,0,0,0.15)" 
          : "0 4px 10px rgba(0,0,0,0.08)",
        transform: isHovered 
          ? "translateY(-8px)" 
          : "translateY(0px)",
        cursor: "default"
      }}
    >
      <h3>{author.name}</h3>
      
      {/* Genre */}
        <p style={{ margin: "0.5rem 0", fontWeight: "bold", color: "#555" }}>
          {author.genre.join(" · ")} 
        </p>

      {/* Line 2: Books list */}
      <p style={{ margin: "0.5rem 0", color: "#333" }}>
        <strong>Books:</strong> {Array.isArray(author.books) ? author.books.join(", ") : author.books}
      </p>

      <div style={{ marginTop: "1rem" }}>
        <button 
          onClick={() => onLike(author.id)}
          style={{
            cursor: "pointer",
            padding: "6px 12px",
            borderRadius: "4px",
            border: "1px solid #ddd",
            backgroundColor: author.liked ? "#ffebee" : "#fff"
          }}
        >
          {author.liked ? "Liked ❤️" : "Like ♡"}
        </button>

        <button
          onClick={() => onAddToReadingList(author)}
          style={{ 
            marginLeft: "8px",
            cursor: "pointer",
            padding: "6px 12px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#007BFF",
            color: "white"
          }}
        >
          Add to Reading List
        </button>
      </div>
    </div>
  );
}

export default AuthorCard;