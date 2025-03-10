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
      <aside className="aside-info">
        <h3 className="aside-header">Contact</h3>
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
            <ul>
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
