export default function Resume({
  personalInfo,
  personalSkills,
  personalEducation,
  personalEmployment,
}) {
  function listEducation(individualEducation, index) {
    return (
      <li key={index}>
        <div>
          <h3>{individualEducation.school}</h3>
          <p>
            {individualEducation.dateStart} - {individualEducation.dateEnd}
          </p>
        </div>
        <p>{individualEducation.location}</p>
        <p>{individualEducation.description}</p>
      </li>
    );
  }

  function listEmployment(individualEmployment, index) {
    return (
      <li key={index}>
        <div>
          <h3>{individualEmployment.role}</h3>
          <p>
            {individualEmployment.dateStart} - {individualEmployment.dateEnd}
          </p>
        </div>
        <p>{individualEmployment.location}</p>
        <p>{individualEmployment.description}</p>
      </li>
    );
  }

  function listSkill(individualSkill, index) {
    return (
      <li key={index}>
        {individualSkill.category}
        <span>{individualSkill.skills}</span>
      </li>
    );
  }
  return (
    <>
      <aside>
        <h3>Contact</h3>
        <ul>
          <li>
            <span>Address</span> <br /> {personalInfo.address}
          </li>
          <li>
            <span>Phone</span> <br /> {personalInfo.phone}
          </li>
          <li>
            <span>Email</span> <br /> {personalInfo.email}
          </li>
          <li>
            <span>Portfolio</span> <br /> {personalInfo.portfolio}
          </li>
        </ul>
      </aside>
      <article>
        <section className="resume-head">
          <h1>
            {personalInfo.nameFirst} {personalInfo.nameLast}
          </h1>
          <p>{personalInfo.about}</p>
        </section>
        <div className="resume-body">
          <section className="resume-education">
            <h2>Education</h2>
            <ul>
              {personalEducation.map((individualEducation, index) =>
                listEducation(individualEducation, index)
              )}
            </ul>
          </section>
          <section>
            <h2>Skills</h2>
            <ul>
              {personalSkills.map((individualSkill, index) =>
                listSkill(individualSkill, index)
              )}
            </ul>
          </section>
          <section>
            <h2>Employment</h2>
            <ul>
              {personalEmployment.map((individualEmployment, index) =>
                listEmployment(individualEmployment, index)
              )}
            </ul>
          </section>
        </div>
      </article>
    </>
  );
}
