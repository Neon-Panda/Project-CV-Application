export default function Employment({
  personalEmployment,
  setPersonalEmployment,
}) {
  function changeEmployment(event, index) {
    const editField = (eventCase, eventValue, index) => {
      setPersonalEmployment(
        personalEmployment.map((item, itemIndex) =>
          itemIndex === index
            ? { ...personalEmployment[index], [eventCase]: eventValue }
            : item
        )
      );
    };

    const hiddenToggle = () => {
      return !personalEmployment[index].visible;
    };

    const deleteField = (index) => {
      setPersonalEmployment(
        personalEmployment.filter((item, itemIndex) => itemIndex !== index)
      );
    };

    switch (event.target.name || event.target.dataset.btn) {
      case "role":
        editField("role", event.target.value, index);
        break;
      case "employer":
        editField("employer", event.target.value, index);
        break;
      case "locationEmployment":
        console.log("test");
        editField("location", event.target.value, index);
        break;
      case "dateStartEmployment":
        editField("dateStart", event.target.value, index);
        break;
      case "dateEndEmployment":
        editField("dateEnd", event.target.value, index);
        break;
      case "descriptionEmployment":
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

  function addEmployment() {
    const newObj = {};
    const keys = Object.keys(personalEmployment[0]);
    keys.forEach((element) => {
      element === "visible" ? (newObj[element] = true) : (newObj[element] = "");
    });
    setPersonalEmployment([...personalEmployment, newObj]);
  }

  function createForm(individualEmployment, index) {
    return (
      <form
        className="personal-education-employment-form"
        action=""
        key={index}
      >
        <div className="education-employment-area">
          <label htmlFor={"role-" + index}></label>
          <span>Role:</span>
          <input
            type="text"
            name="role"
            id={"role-" + index}
            placeholder="University of California"
            value={individualEmployment.role}
            onChange={(event) => changeEmployment(event, index)}
          />
        </div>
        <div className="education-employment-area">
          <label htmlFor={"employer" + index}></label>
          <span>employer:</span>
          <input
            type="text"
            name="employer"
            id={"employer" + index}
            placeholder="Computer Science"
            value={individualEmployment.employer}
            onChange={(event) => changeEmployment(event, index)}
          />
        </div>
        <div className="education-employment-area">
          <label htmlFor={"locationEmployment" + index}></label>
          <span>Location:</span>
          <input
            type="text"
            name="locationEmployment"
            id={"locationEmployment" + index}
            placeholder="Berkeley, California"
            value={individualEmployment.location}
            onChange={(event) => changeEmployment(event, index)}
          />
        </div>
        <div className="education-employment-area">
          <fieldset className="education-employment-dates">
            <div className="date">
              <label htmlFor={"dateStartEmployment" + index}></label>
              <span>Date Start:</span>
              <input
                type="date"
                name="dateStartEmployment"
                id={"dateStartEmployment" + index}
                placeholder="2021-03-24"
                value={individualEmployment.dateStart}
                onChange={(event) => changeEmployment(event, index)}
              />
            </div>
            <div className="date">
              <label htmlFor={"dateEndEmployment" + index}></label>
              <span>Date End:</span>
              <input
                type="date"
                name="dateEndEmployment"
                id={"dateEndEmployment" + index}
                placeholder="2024-08-13"
                value={individualEmployment.dateEnd}
                onChange={(event) => changeEmployment(event, index)}
              />
            </div>
          </fieldset>
        </div>
        <div className="education-employment-area">
          <label htmlFor={"descriptionEmployment" + index}></label>
          <span>Description:</span>
          <textarea
            type="text"
            name="descriptionEmployment"
            id={"descriptionEmployment" + index}
            placeholder="Enter Text"
            value={individualEmployment.description}
            onChange={(event) => changeEmployment(event, index)}
          />
          <div className="education-employment-btns">
            <button
              type="button"
              data-btn="hide"
              onClick={(event) => changeEmployment(event, index)}
            >
              Hide
            </button>
            <button
              type="button"
              data-btn="delete"
              onClick={(event) => changeEmployment(event, index)}
            >
              {" "}
              Delete
            </button>
          </div>
        </div>
      </form>
    );
  }

  function collapsedForm(individualEmployment, index) {
    return (
      <h3 className="collapsed-content" key={index}>
        <p className="collapsed-header">
          <span>
            {individualEmployment.role} - {individualEmployment.employer}
          </span>
          <span>
            {individualEmployment.dateStart} - {individualEmployment.dateEnd}
          </span>
        </p>
        <p>{individualEmployment.location}</p>
        <p>{individualEmployment.description}</p>
        <div className="education-employment-btns">
          <button
            type="button"
            data-btn="hide"
            onClick={(event) => changeEmployment(event, index)}
          >
            Edit
          </button>
          <button
            type="button"
            data-btn="delete"
            onClick={(event) => changeEmployment(event, index)}
          >
            Delete
          </button>
        </div>
      </h3>
    );
  }

  return (
    <section className="personal-education-employment">
      <h2 className="personal-input-header">Employment History</h2>
      {personalEmployment.map((individualEmployment, index) =>
        individualEmployment.visible
          ? createForm(individualEmployment, index)
          : collapsedForm(individualEmployment, index)
      )}
      <button type="button" onClick={addEmployment}>
        Add new Education module
      </button>
    </section>
  );
}
