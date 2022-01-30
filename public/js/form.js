const formFormHandler = async (event) => {
  event.preventDefault();
console.log(event)
  const username = document.getElementById("floatingInput").value.trim();
  console.log(username)

  const zipcode = document.getElementById("floatingPassword").value.trim();
  console.log(zipcode)

  // const residentCheckBox = document
  //   .getElementById("flexCheckDefault").checked
  //   console.log(residentCheckBox)
    

  // const retailerCheckBox = document
  //   .getElementById("flexCheckChecked").checked
  //   console.log(retailerCheckBox)
  
 
  const numOfAvailableTests = document
    .getElementById("tests-available")
    .value.trim();
    console.log(numOfAvailableTests)

  const numOfTestsNeeded = document
    .getElementById("tests_seeking")
    .value.trim();
    console.log(numOfTestsNeeded)

  const comments = document.getElementById("post_comment").value.trim();
  console.log(comments)

  const contactInfo = document.getElementById("contact_me").value.trim();
  console.log(contactInfo)
//removed checkboxes from if block- find alt way to handle
  if (
    username &&
    zipcode &&
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
