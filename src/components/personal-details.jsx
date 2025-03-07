export default function PersonalInputs({ personalInfo, personalInfoSetter }) {
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
          />
        </label>
      </form>
    </section>
  );
}
