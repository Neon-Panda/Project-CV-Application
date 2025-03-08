export default function SkillsInputs({ personalSkills, setPersonalSkills }) {
  function changeSkills(event, personalSkills, setPersonalSkills, index) {
    if (event.target.name === "category") {
      setPersonalSkills([
        ...personalSkills.slice(0, index),
        { ...personalSkills[index], category: event.target.value },
        ...personalSkills.slice(index + 1),
      ]);
    } else if (event.target.name === "skills") {
      setPersonalSkills([
        ...personalSkills.slice(0, index),
        { ...personalSkills[index], skills: event.target.value },
        ...personalSkills.slice(index + 1),
      ]);
    }
    console.log(personalSkills);
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
        </form>
      </div>
    </section>
  );
}
