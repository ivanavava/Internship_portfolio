
// to use express and have it handle http requests
const express = require("express");
const cors = require("cors");

// allow React on localhost:3000 to make http requests to http://localhost:5000 (backend)
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const projects = [
    // Your portfolio data


    //temporary mock data for now. REPLACE WITH MONGO DB LATER
    {
        id: 1,
        title: "PDF Portfolio1",
        description: "An intro PDF to my work.",
        mediaType: "pdf",
        mediaUrl: "/work",
        size: "26 KB"
      }, 
      
      { id: 2,
        title: "PDF Portfolio2",
        description: "An intro PDF to my work.",
        mediaType: "pdf",
        mediaUrl: "/work2",
        size: "26 KB" },

        { id: 3,
          title: "PDF Portfolio3",
          description: "An intro PDF to my work.",
          mediaType: "pdf",
          mediaUrl: "https://example.com/portfolio.pdf",
          size: "24 KB"},

          { id: 4,
            title: "PDF Portfolio4",
            description: "An intro PDF to my work.",
            mediaType: "pdf",
            mediaUrl: "https://example.com/portfolio.pdf",
            size: "24 KB"},

          { id: 5,
            title: "PDF Portfolio5",
            description: "An intro PDF to my work.",
            mediaType: "pdf",
            mediaUrl: "https://example.com/portfolio.pdf",
            size: "24 KB"},

          { id: 6,
            title: "PDF Portfolio6",
            description: "An intro PDF to my work.",
            mediaType: "pdf",
            mediaUrl: "https://example.com/portfolio.pdf",
            size: "24 KB"},
          
          { id: 7,
            title: "PDF Portfolio7",
            description: "An intro PDF to my work.",
            mediaType: "pdf",
            mediaUrl: "https://example.com/portfolio.pdf",
            size: "24 KB"},

          { id: 8,
            title: "PDF Portfolio8",
            description: "An intro PDF to my work.",
            mediaType: "pdf",
            mediaUrl: "https://example.com/portfolio.pdf",
            size: "24 KB"},

          { id: 9,
            title: "PDF Portfolio9",
            description: "An intro PDF to my work.",
            mediaType: "pdf",
            mediaUrl: "https://example.com/portfolio.pdf",
            size: "24 KB"},

          { id: 10,
            title: "PDF Portfolio10",
            description: "An intro PDF to my work.",
            mediaType: "pdf",
            mediaUrl: "https://example.com/portfolio.pdf",
            size: "24 KB"},

          { id: 10,
            title: "PDF Portfolio10",
            description: "An intro PDF to my work.",
            mediaType: "pdf",
            mediaUrl: "https://example.com/portfolio.pdf",
            size: "24 KB"},
  ];

  //api route to front end. display work from database
  app.get('/api/projects', (req, res) => {
    res.json(projects);
  });

  // Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
  
  //api route to post stuff (only add this if you decided to add a login)
  //api route to delete stuff (only add this if you decided to add a login)