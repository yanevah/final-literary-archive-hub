# FINAL - Literary Archive Hub


## Project Summary
It's an interactive digital library and author discovery platform built with React and Vite. This project allows users to explore authors, express interest through a like feature, filter by muiltiple genres, search by name, and manage a persistent personal reading list. The application also includes a submissions form where users can request additional authors to be added to the archive.

The project demonstrates component-based architecture, state management, event handling, and responsive UI design  using modern front-end development tools. 


## Key Features and Functionality

### Dynamic Search and  Multi-Filter:
Real-time searching combined with a genre filtering system that supports authors with multiple genrees.

### Interactive Author Cards:
Features  state-based UI effects, including a "Hover Lift" animation and a "Like" toggle.

### Persistent Reading List:
A side-bar management tool that saves your selections to the browser's LocalStorage, ensuring your data remains even after a page refresh.

### Author Request System:
A fully validated form that allows users to suggest new authors, featuring conditional rendering and success/error  states. 

### Bookish Aesthetic:
A vintage bookstore UI using the Google Font 'Merriweather' and a parchment-inspired colour palette. 


## Technologies Used

- React
- Vite
- JavaScript (ES6+)
- HTML5
- CSS3
- Git & GitHub for version control
	- https://github.com/yanevah/final-literary-archive-hub

### Data  Normalization:
I used .map() and .split() during state initialization to convert raw string data (books/genres) into Arrays, allowing for cleaner manipulation.

### Dynamic UI Generation:
Used new Set() and .flatMap() to automatically generate genre filter buttons based on the data provided, making the app future-proof.

### Complex  Logic:
Implemented a dual-condition .filter() function that handles both text search and array inclusion simultaneously.

### CSS Keyframes:
Integrated custom CSS animations (slideIn) with React's conditional rendering for a smoother User Experience.


## Instructions For Use
Clone the repository: git clone [https://github.com/yanevah/final-literary-archive-hub]

Install dependencies: npm install

Run the development server: npm run dev

Build for production: npm run build

View and Operate: http://localhost:5173/

Browse Authors, Browse Genres, Add to Reading List, "Like" Authors, Request New Authors


