export default function PersonalInputs({ personalInfo, setPersonalInfo }) {
  function changeInfo(event, personalInfo, setPersonalInfo) {
    switch (event.target.id) {
      case "name-first":
        setPersonalInfo({ ...personalInfo, nameFirst: event.target.value });
        break;
      case "name-last":
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
    <section className="personal-info">
      <h2 className="personal-input-header">Personal Information</h2>
      <form action="" id="personal-info-form">
        <div className="personal-input-area">
          <label htmlFor="name-first"></label>
          <span>First Name:</span>
          <input
            type="text"
            name="name-first"
            id="name-first"
            placeholder={personalInfo.nameFirst}
            value={personalInfo.nameFirst}
            onChange={(event) =>
              changeInfo(event, personalInfo, setPersonalInfo)
            }
          />
        </div>
        <div className="personal-input-area">
          <label htmlFor="name-last"></label>
          <span>Last Name:</span>
          <input
            type="text"
            name="name-last"
            id="name-last"
            placeholder={personalInfo.nameLast}
            value={personalInfo.nameLast}
            onChange={(event) =>
              changeInfo(event, personalInfo, setPersonalInfo)
            }
          />
        </div>
        <div className="personal-input-area">
          <label htmlFor="email"></label>
          <span>Email:</span>
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
        </div>
        <div className="personal-input-area">
          <label htmlFor="phone"></label>
          <span>Phone Number:</span>
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
        </div>
        <div className="personal-input-area">
          <label htmlFor="address"></label>
          <span>Address:</span>
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
        </div>
        <div className="personal-input-area">
          <label htmlFor="portfolio"></label>
          <span>Portfolio Link:</span>
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
        </div>
        <div className="personal-input-area">
          <label htmlFor="about"></label>
          <span className="info-description">Personal Description:</span>
          <textarea
            type="text"
            name="about"
            id="about"
            placeholder={personalInfo.about}
            value={personalInfo.about}
            onChange={(event) =>
              changeInfo(event, personalInfo, setPersonalInfo)
            }
          />
        </div>
      </form>
    </section>
  );
}
