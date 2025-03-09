import { useState } from "react";
import PersonDetails from "./components/personal-details";
import PersonalSkills from "./components/skills";
import EducationHistory from "./components/education-history";

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

  const [personalSkills, setPersonalSkills] = useState([
    { category: "Programming Languages", skills: "HTML, CSS, Javascript, ..." },
    { category: "Databases", skills: "SQL MongoDB, ..." },
    { category: "Frameworks", skills: "React, ..." },
  ]);

  const [personalEducation, setPersonalEducation] = useState([
    {
      school: "University of California",
      degree: "Computer Science",
      location: "Berkeley, California",
      dateStart: "2021-03-24",
      dateEnd: "2024-08-13",
      visible: true,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur esse ex quis sint voluptatem minima blanditiis quidem laborum exercitationem repellendus.",
    },
  ]);

  return (
    <>
      <PersonDetails
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />
      <PersonalSkills
        personalSkills={personalSkills}
        setPersonalSkills={setPersonalSkills}
      />
      <EducationHistory
        personalEducation={personalEducation}
        setPersonalEducation={setPersonalEducation}
      />
    </>
  );
}

export default App;
