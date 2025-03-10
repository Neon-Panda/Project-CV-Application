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
      <form action="" key={index}>
        <label htmlFor={"school-" + index}>
          School:
          <input
            type="text"
            name="school"
            id={"school-" + index}
            placeholder="University of California"
            value={individualEducation.school}
            onChange={(event) => changeEducation(event, index)}
          />
        </label>
        <label htmlFor={"degree" + index}>
          Degree:
          <input
            type="text"
            name="degree"
            id={"degree" + index}
            placeholder="Computer Science"
            value={individualEducation.degree}
            onChange={(event) => changeEducation(event, index)}
          />
        </label>
        <label htmlFor={"location" + index}>
          Location:
          <input
            type="text"
            name="location"
            id={"location" + index}
            placeholder="Berkeley, California"
            value={individualEducation.location}
            onChange={(event) => changeEducation(event, index)}
          />
        </label>
        <fieldset>
          <legend>Start Date:</legend>
          <label htmlFor={"dateStart" + index}>
            <input
              type="date"
              name="dateStart"
              id={"dateStart" + index}
              placeholder="2021-03-24"
              value={individualEducation.dateStart}
              onChange={(event) => changeEducation(event, index)}
            />
          </label>
          <label htmlFor={"dateEnd" + index}>
            End Date:
            <input
              type="date"
              name="dateEnd"
              id={"dateEnd" + index}
              placeholder="2024-08-13"
              value={individualEducation.dateEnd}
              onChange={(event) => changeEducation(event, index)}
            />
          </label>
        </fieldset>
        <label htmlFor={"description" + index}>
          Description:
          <textarea
            type="text"
            name="description"
            id={"description" + index}
            placeholder="Enter Text"
            value={individualEducation.description}
            onChange={(event) => changeEducation(event, index)}
          />
        </label>
        <button
          type="button"
          data-btn="hide"
          onClick={(event) => changeEducation(event, index)}
        >
          HIDE
        </button>
        <button
          type="button"
          data-btn="delete"
          onClick={(event) => changeEducation(event, index)}
        >
          {" "}
          DELETE
        </button>
      </form>
    );
  }

  function collapsedForm(individualEducation, index) {
    return (
      <h3 key={index}>
        {individualEducation.school}

        <button
          type="button"
          data-btn="hide"
          onClick={(event) => changeEducation(event, index)}
        >
          HIDE
        </button>
        <button
          type="button"
          data-btn="delete"
          onClick={(event) => changeEducation(event, index)}
        >
          DELETE
        </button>
      </h3>
    );
  }

  return (
    <section>
      <h2>Education</h2>
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
