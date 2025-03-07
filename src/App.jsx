import { useState } from "react";
import PersonDetails from "./components/personal-details";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    nameFirst: "John",
    nameLast: "Smith",
    email: "JohnSmith@Example.com",
    phone: "555-555-5555",
    address: "Random Town, California",
    portfolio: "https://github.com/JohnSmith",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla eligendi, accusantium maiores aperiam saepe molestias libero quos error et temporibus quo unde tempore. Est recusandae expedita, ex incidunt vero similique eligendi quod! Nobis eligendi est perferendis quas aperiam, repellendus aliquid!",
  });
  return (
    <>
      <PersonDetails
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />
    </>
  );
}

export default App;
