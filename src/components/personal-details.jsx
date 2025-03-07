export default function PersonalInputs({ personalInfo, setPersonalInfo }) {
  function changeInfo(event, personalInfo, setPersonalInfo) {
    console.log(personalInfo);
    switch (event.target.id) {
      case "nameFirst":
        setPersonalInfo({ ...personalInfo, nameFirst: event.target.value });
        break;
      case "nameLast":
        setPersonalInfo({ ...personalInfo, nameLast: event.target.value });
        break;
      case "email":
        setPersonalInfo({ ...personalInfo, email: event.target.value });
        break;
      case "phone":
        setPersonalInfo({ ...personalInfo, phone: event.target.value });
        break;
      case "address":
        setPersonalInfo({ ...personalInfo, address: event.target.value });
        break;
      case "portfolio":
        setPersonalInfo({ ...personalInfo, portfolio: event.target.value });
        break;
      case "about":
        setPersonalInfo({ ...personalInfo, about: event.target.value });
        break;
      default:
        break;
    }
  }
  return (
    <section>
      <h2>Personal Information</h2>
      <form action="" id="personalInfoForm">
        <label htmlFor="nameFirst">
          First Name:
          <input
            type="text"
            name="nameFirst"
            id="nameFirst"
            placeholder={personalInfo.nameFirst}
            value={personalInfo.nameFirst}
            onChange={(event) =>
              changeInfo(event, personalInfo, setPersonalInfo)
            }
          />
        </label>
        <label htmlFor="nameLast">
          Last Name:
          <input
            type="text"
            name="nameLast"
            id="nameLast"
            placeholder={personalInfo.nameLast}
            value={personalInfo.nameLast}
            onChange={(event) =>
              changeInfo(event, personalInfo, setPersonalInfo)
            }
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            id="email"
            placeholder={personalInfo.email}
            value={personalInfo.email}
            onChange={(event) =>
              changeInfo(event, personalInfo, setPersonalInfo)
            }
          />
        </label>
        <label htmlFor="phone">
          Phone Number:
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder={personalInfo.phone}
            value={personalInfo.phone}
            onChange={(event) =>
              changeInfo(event, personalInfo, setPersonalInfo)
            }
          />
        </label>
        <label htmlFor="address">
          Address:
          <input
            type="text"
            name="address"
            id="address"
            placeholder={personalInfo.address}
            value={personalInfo.address}
            onChange={(event) =>
              changeInfo(event, personalInfo, setPersonalInfo)
            }
          />
        </label>
        <label htmlFor="portfolio">
          Portfolio Link:
          <input
            type="url"
            name="portfolio"
            id="portfolio"
            placeholder={personalInfo.portfolio}
            value={personalInfo.portfolio}
            onChange={(event) =>
              changeInfo(event, personalInfo, setPersonalInfo)
            }
          />
        </label>
        <label htmlFor="about">
          Personal Description:
          <input
            type="text"
            name="about"
            id="about"
            placeholder={personalInfo.about}
            value={personalInfo.about}
            onChange={(event) =>
              changeInfo(event, personalInfo, setPersonalInfo)
            }
          />
        </label>
      </form>
    </section>
  );
}
