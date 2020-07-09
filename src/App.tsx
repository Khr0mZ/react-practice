import React from "react";
import logo from "./logo.svg";
import "./App.css";

const character = {
  name: "Darth Kitty",
  location: "Hamburg",
  avatar: "assets/profile.jpg",
  bio:
    "I am a strong fan of lorem ipsum sit amet et dolor magna aliqua eiusmod adipising.",
  classes: [
    { class: "UX", rank: "Neophyte" },
    { class: "Backend", rank: "Journeyman" },
    { class: "Frontend", rank: "Adept" },
  ],
  skilltree: [
    {
      category: "UX",
      skills: [
        { name: "Hotgloo", xp: "800" },
        { name: "Figma", xp: "1800" },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { name: "HTML", xp: "45600" },
        { name: "CSS", xp: "23040" },
        { name: "Less", xp: "3040" },
        { name: "SCSS", xp: "300" },
      ],
    },
    {
      category: "Frontend development",
      skills: [
        { name: "JS", xp: "42200" },
        { name: "Typescript", xp: "21000" },
        { name: "React", xp: "19940" },
        { name: "Angular", xp: "30" },
      ],
    },
  ],
  inventory: [
    {
      category: "Hardware",
      items: ["LG Gram 17", "iPhone 11", "Oculus quest", "NES"],
    },
    {
      category: "Books",
      items: ["Programming in GO", "Code complete"],
    },
  ],
  goals: [
    {
      category: "Adventures",
      items: [
        "Climb mount Kilimandscharo once",
        "Go to the Maledives",
        "Live on a sailboat in the Mediterranean for two weeks",
      ],
    },
    {
      category: "Health",
      items: [
        "Eat more veggies and meat, less sugar",
        "Work out three times per week",
        "Get to 8% bodyfat once",
      ],
    },
    {
      category: "Skills",
      items: [
        "Learn to speak spanish",
        "Learn to play the piano",
        "Get better at Figma",
      ],
    },
    {
      category: "Finances",
      items: [
        "Have a paid off house",
        "Earn over 10k€ per month",
      ],
    },
    {
      category: "Relationships",
      items: [
        "Hold a family retrospective once a week",
        "Spend each saturday with the family",
      ],
    },    
  ],
  achievements: [
    { img: "assets/achievement1.png", label: "Slayer of a thousand bugs" },
    { img: "assets/achievement2.png", label: "Attended 250+ standup meetings" },
    { img: "assets/achievement3.png", label: "50 Retros" },
    { img: "assets/achievement4.png", label: "100 Merge requests" },
  ],
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
