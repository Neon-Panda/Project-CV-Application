export default function Education({ personalEducation, setPersonalEducation }) {
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

    const hiddenToggle = () => {
      return !personalEducation[index].visible;
    };

    const deleteField = (index) => {
      console.log("test");
      setPersonalEducation(
        personalEducation.filter((item, itemIndex) => itemIndex !== index)
      );
    };

    switch (event.target.name || event.target.dataset.btn) {
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
      case "hide":
        editField("visible", hiddenToggle(), index);
        break;
      case "delete":
        deleteField(index);
        break;
      default:
        break;
    }
  }

  function addEducation() {
    const newObj = {};
    const keys = Object.keys(personalEducation[0]);
    keys.forEach((element) => {
      element === "visible" ? (newObj[element] = true) : (newObj[element] = "");
    });
    setPersonalEducation([...personalEducation, newObj]);
  }

  function createForm(individualEducation, index) {
    return (
      <form
        className="personal-education-employment-form"
        action=""
        key={index}
      >
        <div className="education-employment-area">
          <label htmlFor={"school-" + index}></label>
          <span>School:</span>
          <input
            type="text"
            name="school"
            id={"school-" + index}
            placeholder="University of California"
            value={individualEducation.school}
            onChange={(event) => changeEducation(event, index)}
          />
        </div>
        <div className="education-employment-area">
          <label htmlFor={"degree" + index}></label>
          <span>Degree:</span>
          <input
            type="text"
            name="degree"
            id={"degree" + index}
            placeholder="Computer Science"
            value={individualEducation.degree}
            onChange={(event) => changeEducation(event, index)}
          />
        </div>
        <div className="education-employment-area">
          <label htmlFor={"location" + index}></label>
          <span>Location:</span>
          <input
            type="text"
            name="location"
            id={"location" + index}
            placeholder="Berkeley, California"
            value={individualEducation.location}
            onChange={(event) => changeEducation(event, index)}
          />
        </div>
        <div className="education-employment-area">
          <fieldset className="education-employment-dates">
            <div className="date">
              <label htmlFor={"dateStart" + index}></label>
              <span>Date Start:</span>
              <input
                type="date"
                name="dateStart"
                id={"dateStart" + index}
                placeholder="2021-03-24"
                value={individualEducation.dateStart}
                onChange={(event) => changeEducation(event, index)}
              />
            </div>
            <div className="date">
              <label htmlFor={"dateEnd" + index}></label>
              <span>End Date:</span>
              <input
                type="date"
                name="dateEnd"
                id={"dateEnd" + index}
                placeholder="2024-08-13"
                value={individualEducation.dateEnd}
                onChange={(event) => changeEducation(event, index)}
              />
            </div>
          </fieldset>
        </div>
        <div className="education-employment-area">
          <label htmlFor={"description" + index}></label>
          <span>Description:</span>
          <textarea
            type="text"
            name="description"
            id={"description" + index}
            placeholder="Enter Text"
            value={individualEducation.description}
            onChange={(event) => changeEducation(event, index)}
          />
          <div className="education-employment-btns">
            <button
              type="button"
              data-btn="hide"
              onClick={(event) => changeEducation(event, index)}
            >
              Hide
            </button>
            <button
              type="button"
              data-btn="delete"
              onClick={(event) => changeEducation(event, index)}
            >
              {" "}
              Delete
            </button>
          </div>
        </div>
      </form>
    );
  }

  function collapsedForm(individualEducation, index) {
    return (
      <h3 className="collapsed-content" key={index}>
        <p className="collapsed-header">
          <span>
            {individualEducation.school} - {individualEducation.degree}
          </span>
          <span>
            {individualEducation.dateStart} - {individualEducation.dateEnd}
          </span>
        </p>
        <p>{individualEducation.location}</p>
        <p>{individualEducation.description}</p>

        <div className="education-employment-btns">
          <button
            type="button"
            data-btn="hide"
            onClick={(event) => changeEducation(event, index)}
          >
            Edit
          </button>
          <button
            type="button"
            data-btn="delete"
            onClick={(event) => changeEducation(event, index)}
          >
            Delete
          </button>
        </div>
      </h3>
    );
  }

  return (
    <section className="personal-education-employment">
      <h2 className="personal-input-header">Education</h2>
      {personalEducation.map((individualEducation, index) =>
        individualEducation.visible
          ? createForm(individualEducation, index)
          : collapsedForm(individualEducation, index)
      )}
      <button type="button" onClick={addEducation}>
        Add new Education module
      </button>
    </section>
  );
}
