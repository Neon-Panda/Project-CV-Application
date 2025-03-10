export default function Resume({
  personalInfo,
  personalSkills,
  personalEducation,
  personalEmployment,
}) {
  function listEducation(individualEducation, index) {
    return (
      <li key={index}>
        <div className="education-item">
          <h3>{individualEducation.school}</h3>
          <p>
            {individualEducation.dateStart} - {individualEducation.dateEnd}
          </p>
        </div>
        <p className="education-location">{individualEducation.location}</p>
        <p className="education-description">
          {individualEducation.description}
        </p>
      </li>
    );
  }

  function listEmployment(individualEmployment, index) {
    return (
      <li key={index}>
        <div className="employment-item">
          <h3>{individualEmployment.role}</h3>
          <p>
            {individualEmployment.dateStart} - {individualEmployment.dateEnd}
          </p>
        </div>
        <p className="employment-location">{individualEmployment.location}</p>
        <p className="employment-description">
          {individualEmployment.description}
        </p>
      </li>
    );
  }

  function listSkill(individualSkill, index) {
    return (
      <li className="skill-item" key={index}>
        <span>{individualSkill.category}:</span>{" "}
        <span>{individualSkill.skills}</span>
      </li>
    );
  }
  return (
    <>
      <aside className="aside-info">
        <h3 className="aside-header">Contact</h3>
        <ul className="aside-content">
          <li className="aside-item">
            <span>Address</span> <br /> {personalInfo.address}
          </li>
          <li className="aside-item">
            <span>Phone</span> <br /> {personalInfo.phone}
          </li>
          <li className="aside-item">
            <span>Email</span> <br /> {personalInfo.email}
          </li>
          <li className="aside-item">
            <span>Portfolio</span> <br /> {personalInfo.portfolio}
          </li>
        </ul>
      </aside>
      <article className="resume-main-content">
        <section className="resume-head">
          <h1 className="resume-name">
            {personalInfo.nameFirst} {personalInfo.nameLast}
          </h1>
          <p className="resume-about">{personalInfo.about}</p>
        </section>
        <div className="resume-body">
          <section className="resume-education">
            <h2 className="resume-header">Education</h2>
            <ul>
              {personalEducation.map((individualEducation, index) =>
                listEducation(individualEducation, index)
              )}
            </ul>
          </section>
          <section>
            <h2 className="resume-header">Skills</h2>
            <ul className="resume-skills">
              {personalSkills.map((individualSkill, index) =>
                listSkill(individualSkill, index)
              )}
            </ul>
          </section>
          <section>
            <h2 className="resume-header">Employment</h2>
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
