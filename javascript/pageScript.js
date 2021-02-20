// references to dom elements
let inputRefs = document.getElementsByTagName("input");
let imgPreviewBoxRef = document.getElementById("img-preview-box");
let imgPreviewRef = document.getElementById("img-preview");
let outputSectionRef = document.getElementById("output-section");
let profilePicRef = document.getElementById("profile-pic");

const fileReader = new FileReader();

let srcValue = "",
  allFieldHasValue = true,
  type = undefined;

const fileInputChangeHandler = (event) => {
  const files = event.target.files;
  if (files.length > 0) {
    fileReader.onload = function () {
      srcValue = fileReader.result;
      type = files[0].type;
      if (type !== "image/jpeg" && type !== "image/png") {
        imgPreviewBoxRef.textContent = "No image choosen";
        alert("Please choose an image with jpg or png extension!");
      } else {
        imgPreviewBoxRef.innerHTML = `<img id="img-preview" src=${srcValue} alt="" />`;
      }
    };
    fileReader.readAsDataURL(files[0]);
  } else {
    srcValue = "";
    imgPreviewBoxRef.textContent = "No image choosen";
  }
};

const submitHandler = (event) => {
  // prevents submission of the form which is the default action
  event.preventDefault();
  allFieldHasValue = true;
  for (let iterator = 0; iterator < inputRefs.length - 1; iterator++) {
    if (inputRefs[iterator].value === "") {
      allFieldHasValue = false;
      break;
    }
  }

  // making sure that all fields has a value
  if (!allFieldHasValue) {
    alert("Each field must have a value for card generation!");
    return;
  }

  //allowing only jpg and png extension
  if (type !== "image/jpeg" && type !== "image/png") {
    alert("Please choose an image with jpg or png extension!");
    return;
  }

  //updating the output section
  outputSectionRef.innerHTML = `<header>Generated ID Card</header>
  <div id="card">
    <div id="card-left">
      <img
        src=${srcValue}
        alt=""
        id="profile-pic"
      />
    </div>
    <div id="card-right">
      <div><span class="grey-bold">Name:</span> ${inputRefs[0].value}</div>
      <div><span class="grey-bold">College Name:</span> ${inputRefs[1].value}</div>
      <div><span class="grey-bold">Location:</span> ${inputRefs[2].value}</div>
    </div>
  </div>`;
};

// eventlistener for file input change
inputRefs[3].addEventListener("change", fileInputChangeHandler);
// eventListener for clicking submit button
inputRefs[4].addEventListener("click", submitHandler);
