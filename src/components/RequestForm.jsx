import { useState } from 'react';

function RequestForm() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // --- Validation Logic ---
    if (name.trim().length < 3) {
      setError('Please enter a valid author name (at least 3 characters).');
      return;
    }

    // Success! 
    console.log("Author Requested:", name);
    setSubmitted(true);
    setName('');
    setError('');

    // Hide the success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div style={{
      marginTop: '3rem',
      padding: '2rem',
      backgroundColor: '#fffcf5',
      borderRadius: '12px',
      border: '2px dashed #a1887f',
      textAlign: 'center'
    }}>
      <h3>Can't find an author?</h3>
      <p>Request to add them to our archive:</p>

      {submitted ? (
        <p style={{ color: 'green', fontWeight: 'bold' }}>✅ Request sent! Thank you.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Author Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              padding: '10px',
              borderRadius: '6px',
              border: error ? '2px solid red' : '1px solid #ccc',
              width: '250px',
              marginRight: '10px'
            }}
          />
          <button type="submit" style={{
            padding: '10px 20px',
            backgroundColor: '#5d4037',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}>
            Request
          </button>
          {/* Error message styling inside RequestForm.jsx */}
              {error && (
                <p style={{ 
                  color: "#b71c1c", // A deeper, "brick" red that fits the vintage vibe
                  fontSize: "0.9rem", 
                  marginTop: "12px",
                  fontStyle: "italic",
                  backgroundColor: "#ffebee", // Soft red background to make it look like a real alert
                  padding: "8px",
                  borderRadius: "4px",
                  display: "inline-block"
                }}>
                  ⚠️ {error}
  </p>
)}
        </form>
      )}
    </div>
  );
}

export default RequestForm;