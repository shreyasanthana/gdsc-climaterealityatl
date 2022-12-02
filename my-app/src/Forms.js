import React, { useState } from "react";

const Form = () => {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    //name, email, age, phone number, previously involved in climate change activism, suggestion? 
    "entry.90026055": "",
    "entry.1831593027": "",
    "entry.1866223984": "",
    "entry.1584917209": "",
    //button???
    "entry.1509076509": ""

  });

  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);

    let url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSdmvxm0fJezJe_oB3onPYLuUWYU595fMFJzZkjzguOf-rJeKg/formResponse?entry.90026055=${formData["entry.90026055"]}&entry.1831593027=${formData["entry.1831593027"]}&entry.1866223984=${formData["entry.1866223984"]}&entry.1584917209=${formData["entry.1584917209"]}&entry.1509076509=${formData["entry.1509076509"]}`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  }
  return (
    <div className="contactFormWrapper">
      <div className="formheader"></div>
      <div className="formcontact">
        {submit ? (
          <div className="afterForm">Thanks, will get back to you soon</div>
        ) : (
          <form onSubmit={handleSubmit} target="_self">
            <fieldset>
              <label htmlFor="entry.90026055">Name:</label>
              <input
                required
                type="text"
                name="entry.90026055"
                onChange={handleInputData("entry.90026055")}
                value={formData["entry.90026055"]}
                autoComplete={false}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="entry.1831593027">E-mail:</label>
              <input
                required
                type="email"
                name="entry.1831593027"
                onChange={handleInputData("entry.1831593027")}
                value={formData["entry.1831593027"]}
                autoComplete={false}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="entry.1866223984">Age:</label>
              <input
                required
                name="entry.1866223984"
                onChange={handleInputData("entry.1866223984")}
                value={formData["entry.1866223984"]}
                autoComplete={false}
              ></input>
            </fieldset>

            <fieldset>
              <label htmlFor="entry.1584917209">Phone Number:<br />(format ex. xxx-xxx-xxxx)</label>
              <input
                required
                name="entry.1584917209"
                onChange={handleInputData("entry.1584917209")}
                value={formData["entry.1584917209"]}
                autoComplete={false}
              ></input>
            </fieldset>

            <fieldset>
              <label htmlFor="entry.1509076509">Enter your suggestion below:</label>
              <textarea
                required
                name="entry.1509076509"
                rows="4"
                cols="100"
                onChange={handleInputData("entry.1509076509")}
                value={formData["entry.1509076509"]}
                autoComplete={false}
              ></textarea>
            </fieldset>

            <button type="submit">Connect</button>
          </form>
        )}
      </div>
    </div>
    /*
    put this before last one
                <fieldset>
              <label htmlFor="entry.1451219623">Previously involved in climate change activism?</label>
              <input
                required
                name="entry.1451219623"
                onChange={handleInputData("entry.1451219623")}
                value={formData["entry.1451219623"]}
                autoComplete={false}
              ></input>
            </fieldset>
            */
  );
};

export default Form;
