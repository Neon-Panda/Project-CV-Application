export default function SkillsInputs({ personalSkills, setPersonalSkills }) {
  function changeSkills(event, personalSkills, setPersonalSkills, index) {
    switch (event.target.name) {
      case "category":
        setPersonalSkills(
          personalSkills.map((item, itemIndex) =>
            itemIndex === index
              ? { ...personalSkills[index], category: event.target.value }
              : item
          )
        );
        break;
      case "skills":
        setPersonalSkills(
          personalSkills.map((item, itemIndex) =>
            itemIndex === index
              ? { ...personalSkills[index], skills: event.target.value }
              : item
          )
        );
      default:
        break;
    }
  }

  function deleteElement(personalSkills, setPersonalSkills, index) {
    setPersonalSkills(
      personalSkills.filter((item, itemIndex) => itemIndex !== index)
    );
  }

  function addElement(personalSkills, setPersonalSkills) {
    const newObj = {};
    const keys = Object.keys(personalSkills[0]);
    keys.forEach((element) => {
      newObj[element] = "";
    });
    setPersonalSkills([...personalSkills, newObj]);
  }

  function skillListItem(individualSkill, index) {
    return (
      <li key={index} className="personal-skill-item">
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
    <section className="personal-skills">
      <h2 className="personal-input-header">Skills</h2>
      <form className="personal-skills-form" action="" id="personalSkills">
        <ul className="personal-skill-list">
          <div className="personal-skills-header">
            <p>Categories</p>
            <p>Skills</p>
          </div>
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
    </section>
  );
}
