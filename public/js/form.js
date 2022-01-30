const formFormHandler = async (event) => {
  event.preventDefault();
console.log(event)
  const username = document.getElementById("floatingInput").value.trim();

  const zipcode = document.getElementById("floatingPassword").value.trim();

  const residentCheckBox = document
    .getElementById("flexCheckDefault").checked
    
console.log(residentCheckBox)
  const retailerCheckBox = document
    .getElementById("flexCheckChecked").checked
    
console.log(retailerCheckBox)
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
   // residentCheckBox &&
   // retailerCheckBox &&
    numOfAvailableTests &&
    numOfAvailableTests &&
    numOfTestsNeeded &&
    comments &&
    contactInfo
  ) {
    const response = await fetch("/api/content", {
      method: "POST",
      body: JSON.stringify({
        user_name: username,
        zip_code: zipcode,
        resident: residentCheckBox,
        retailer: retailerCheckBox,
        tests_available: numOfAvailableTests,
        tests_seeking: numOfTestsNeeded,
        post_comment: comments,
        contact_me: contactInfo,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      window.location.href = "/content"
    } else {
      alert(response.statusText);
    }
  } else {
    console.log('somethings missing')
  }
};

document
  .querySelector(".submit-form")
  .addEventListener("click", formFormHandler);
