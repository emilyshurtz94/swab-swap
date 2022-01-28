const formFormHandler = async (event) => {
  event.preventDefault();

  const username = document.getElementById("floatingInput").value.trim();

  const zipcode = document.getElementById("floatingPassword").value.trim();

  const residentCheckBox = document
    .getElementById("flexCheckDefault")
    .value.trim();

  const retailerCheckBox = document
    .getElementById("flexCheckChecked")
    .value.trim();

  const numOfAvailableTests = document
    .getElementById("tests-available")
    .value.trim();

  const numOfTestsNeeded = document
    .getElementById("tests_seeking")
    .value.trim();

  const comments = document.getElementById("post_comment").value.trim();

  const contactInfo = document.getElementById("contact_me").value.trim();
  if (
    username &&
    zipcode &&
    residentCheckBox &&
    retailerCheckBox &&
    numOfAvailableTests &&
    numOfAvailableTests &&
    numOfTestsNeeded &&
    comments &&
    contactInfo
  ) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        zipcode,
        residentCheckBox,
        retailerCheckBox,
        numOfAvailableTests,
        numOfAvailableTests,
        numOfTestsNeeded,
        comments,
        contactInfo,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.create("/content");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".submit-form")
  .addEventListener("submit", formFormHandler);
