export default function SkillsInputs({ personalSkills, setPersonalSkills }) {
  function changeSkills(event, personalSkills, setPersonalSkills, index) {
    switch (event.target.name) {
      case "category":
        setPersonalSkills([
          ...personalSkills.slice(0, index),
          { ...personalSkills[index], category: event.target.value },
          ...personalSkills.slice(index + 1),
        ]);
        break;
      case "skills":
        setPersonalSkills([
          ...personalSkills.slice(0, index),
          { ...personalSkills[index], skills: event.target.value },
          ...personalSkills.slice(index + 1),
        ]);
        break;
      default:
        break;
    }
  }

  function deleteElement(personalSkills, setPersonalSkills, index) {
    setPersonalSkills([
      ...personalSkills.slice(0, index),
      ...personalSkills.slice(index + 1),
    ]);
  }

  function addElement(personalSkills, setPersonalSkills) {
    setPersonalSkills([...personalSkills, { category: "", skills: "" }]);
  }

  function skillListItem(individualSkill, index) {
    return (
      <li key={index}>
        <input
          type="text"
          name="category"
          placeholder={individualSkill.category}
          value={individualSkill.category}
          onChange={(event) =>
            changeSkills(event, personalSkills, setPersonalSkills, index)
          }
        />
        <input
          type="text"
          name="skills"
          placeholder={individualSkill.skills}
          value={individualSkill.skills}
          onChange={(event) =>
            changeSkills(event, personalSkills, setPersonalSkills, index)
          }
        />
        <button
          type="button"
          onClick={(event) =>
            deleteElement(personalSkills, setPersonalSkills, index)
          }
        >
          X
        </button>
      </li>
    );
  }

  return (
    <section>
      <h2>Skills</h2>
      <div>
        <div>Categories</div>
        <div>Skills</div>
        <form action="" id="personalSkills">
          <ul>
            {personalSkills.map((individualSkill, index) =>
              skillListItem(individualSkill, index)
            )}
          </ul>
          <button
            type="button"
            onClick={(event) => addElement(personalSkills, setPersonalSkills)}
          >
            Add Category & Skills
          </button>
        </form>
      </div>
    </section>
  );
}
