export default function education({ personalEducation, setPersonalEducation }) {
  function changeEducation(event, index) {
    const editField = (eventCase, eventValue, index) => {
      setPersonalEducation(
        personalEducation.map((item, itemIndex) =>
          itemIndex === index
            ? { ...personalEducation[index], [eventCase]: eventValue }
            : item
        )
      );
    };

    switch (event.target.name) {
      case "school":
        editField("school", event.target.value, index);
        break;
      case "degree":
        editField("degree", event.target.value, index);
        break;
      case "location":
        editField("location", event.target.value, index);
        break;
      case "dateStart":
        editField("dateStart", event.target.value, index);
        break;
      case "dateEnd":
        editField("dateEnd", event.target.value, index);
        break;
      case "description":
        editField("description", event.target.value, index);
        break;
      default:
        break;
    }
  }

  function createForm(individualEducation, index) {
    return (
      <form action="" key={index}>
        <label htmlFor="school">
          School:
          <input
            type="text"
            name="school"
            id="school"
            placeholder="University of California"
            value={individualEducation.school}
            onChange={(event) => changeEducation(event, index)}
          />
        </label>
        <label htmlFor="degree">
          Degree:
          <input
            type="text"
            name="degree"
            id="degree"
            placeholder="Computer Science"
            value={individualEducation.degree}
            onChange={(event) => changeEducation(event, index)}
          />
        </label>
        <label htmlFor="location">
          Location:
          <input
            type="text"
            name="location"
            id="degree"
            placeholder="Berkeley, California"
            value={individualEducation.location}
            onChange={(event) => changeEducation(event, index)}
          />
        </label>
        <label htmlFor="dateStart">
          Start Date:
          <input
            type="date"
            name="dateStart"
            id="dateStart"
            placeholder="2021-03-24"
            value={individualEducation.dateStart}
            onChange={(event) => changeEducation(event, index)}
          />
        </label>
        <label htmlFor="dateEnd">
          End Date:
          <input
            type="date"
            name="dateEnd"
            id="dateEnd"
            placeholder="2024-08-13"
            value={individualEducation.dateEnd}
            onChange={(event) => changeEducation(event, index)}
          />
        </label>
        <label htmlFor="description">
          Description:
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Enter Text"
            value={individualEducation.description}
            onChange={(event) => changeEducation(event, index)}
          />
        </label>
      </form>
    );
  }

  return (
    <section>
      <h2>Education</h2>
      {personalEducation.map((individualEducation, index) =>
        createForm(individualEducation, index)
      )}
    </section>
  );
}
