// const
const contentText = document.getElementById('contentText');
const showRadio = document.querySelector('input[value="show"]');
const textColor = document.getElementById('contentText');
const content = document.getElementById('content');
//border color 
const colorPicker = document.getElementById('border-color');
const manualBorderColorInput = document.getElementById('manualbordercolor');
const styleBorderDiv = document.querySelector('.style-border');
// background color 
// Function to change background color
function changeBgColor(color) {
style.backgroundColor = color;
}  
// Event listener for color input
document.getElementById('bg-color').addEventListener('input', function () {
var color = this.value;
document.getElementById('manualBgColor').value = color;
changeBgColor(color);
});   
// Event listener for manual input
document.getElementById('manualBgColor').addEventListener('input', function () {
var color = this.value;
document.getElementById('bg-color').value = color;
changeBgColor(color);
});   
function changeBorderColor(color) {
targetElement.style.borderColor = color;
}
// Event listener for manual input
manualBorderColorInput.addEventListener('input', function() {
const color = this.value;
changeBorderColor(color);
});
// Event listener for color picker
colorPicker.addEventListener('input', function() {
const color = this.value;
manualBorderColorInput.value = color; // Update manual input field
changeBorderColor(color);
});
// Apply styles when inputs change
function applyStyles() {
const content = document.getElementById('contentText');
content.style.width = document.getElementById('width-hideshow').value + 'px';
content.style.height = document.getElementById('height-hideshow').value + 'px';
content.style.padding = document.getElementById('padding-hideshow').value + 'px';
content.style.border = document.getElementById('border').value + 'px solid ' + document.getElementById('border-color').value;
content.style.backgroundColor = document.getElementById('bg-color').value;
}
document.addEventListener("DOMContentLoaded", function () {
const generateCodeButton = document.getElementById("generateCodeButton");
const codeOutput = document.getElementById("codeOutput");
const htmlCode = document.getElementById("htmlCode");
const cssCode = document.getElementById("cssCode");
const jsCode = document.getElementById("jsCode");
generateCodeButton.addEventListener("click", function () {
const contentText = document.getElementById("contentText").value;
const width = document.getElementById("width-hideshow").value;
const height = document.getElementById("height-hideshow").value;
const padding = document.getElementById("padding-hideshow").value;
const border = document.getElementById("border-hideshow").value;
const borderColor = document.getElementById("border-color").value;
const bgColor = document.getElementById("bg-color").value;
const showHideOption = document.querySelector('input[name="showHide"]:checked').value;
const functionType = document.querySelector('input[name="functionType"]:checked').value;
// Generate HTML code
const hideContent = true;
const textareaStyle = hideContent ? 'none' : 'block';
let htmlCodeContent = '';  // Initialize the variable
if (functionType === "toggle") {
const showHideOption2 = document.querySelector('input[name="showHide"]:checked').value;
const displayStyle = (showHideOption2 === 'hide') ? 'display:none' : 'display:block';
const buttonText = (displayStyle === 'display:none') ? 'Show' : 'Hide';
htmlCodeContent = `
<button type="button" id="sh_toggle_button" onclick="handleShowHide()">${buttonText}</button>
<div id="content"> 
   <textarea id="contentText" style="${displayStyle}">${contentText}</textarea> 
</div>
`;
}
else if (functionType === "button") {
const showHideOption2 = document.querySelector('input[name="showHide"]:checked').value;
const displayStyle = (showHideOption2 === 'hide') ? 'display:none' : 'display:block';
htmlCodeContent = `<button type="button" onclick="ShowContent()">Show</button>
<button type="button" onclick="HideContent()">Hide</button>
<div id="content">
   <textarea id="contentText" style="${displayStyle}">${contentText}</textarea>
</div>
`;
}
else if (functionType === "checkbox") {
const showHideOption2 = document.querySelector('input[name="showHide"]:checked').value;
const displayStyle = (showHideOption2 === 'hide') ? 'display:none' : 'display:block';
// Determine if the checkbox should be checked initially
const checkboxChecked = (displayStyle === 'display:block') ? 'checked' : '';
htmlCodeContent += `
<label for="contentText">Show Hide</label>
<input type="checkbox" onchange="ShowHide();" aria-label="Show hide checkbox" ${checkboxChecked}>
<div id="content">
   <textarea id="contentText" style="${displayStyle}">${contentText}</textarea>
</div>
`;
} else if (functionType === "radiobutton") {
const showHideOption2 = document.querySelector('input[name="showHide"]:checked').value;
const displayStyle = (showHideOption2 === 'hide') ? 'display:none' : 'display:block';
// Determine which radio button should be checked initially
const showRadioChecked = (displayStyle === 'display:block') ? 'checked' : '';
const hideRadioChecked = (displayStyle === 'display:none') ? 'checked' : '';
htmlCodeContent += `
<input type="radio" name="visibility" id="show_rdo" onclick="ShowHide()" ${showRadioChecked}> Show
<input type="radio" name="visibility" id="hide_rdo" onclick="ShowHide()" ${hideRadioChecked}> Hide
<div id="content">
   <textarea id="contentText" style="${displayStyle}">${contentText}</textarea>
</div>
`;
} else if (functionType === "link") {
const showHideOption2 = document.querySelector('input[name="showHide"]:checked').value;
const displayStyle = (showHideOption2 === 'hide') ? 'display:none' : 'display:block';
htmlCodeContent += `<a href="#" id="show_link" onclick="ShowContent()">show</a>
<a href="#" id="hide_link" onclick="HideContent()">Hide</a>
<div id="content">
   <textarea id="contentText" style="${displayStyle}">${contentText}</textarea>
</div>
`;
} else if (functionType === "toggleLink") {
const showHideOption2 = document.querySelector('input[name="showHide"]:checked').value;
const displayStyle = (showHideOption2 === 'hide') ? 'display:none' : 'display:block';
let linkContent = '';
if (displayStyle === 'display:none') {
linkContent = `<a href="#" class="nclk" id="toogle" onclick="ToggleVisibility('show')">Show</a>`;
}
htmlCodeContent += `
<a href="#" class="nclk"id="toogle" onclick="ToggleVisibility()">${displayStyle === 'display:none' ? 'Show' : 'Hide'}</a>
<div id="content">
   <textarea id="contentText" style="${displayStyle}">${contentText}</textarea>
</div>
`;
}
// Generate CSS code
// Generate CSS code
const cssCodeContent = `
<style>
   #contentText {
   width: ${width}px;
   height: ${height}px;
   padding: ${padding}px;
   border: ${border}px solid ${borderColor};
   background-color: ${bgColor};
   }
</style>
`;
// Generate JavaScript code
let jsCodeContent = "";
if (functionType === "toggle") {
jsCodeContent +=`function handleShowHide() {
var contentText = document.getElementById("contentText");
var toggleButton = document.getElementById("sh_toggle_button");
if (contentText.style.display === "none" || contentText.style.display === "") {
contentText.style.display = "block";
toggleButton.innerText = "Hide";
} else {
contentText.style.display = "none";
toggleButton.innerText = "Show";
}
} `;
} else if (functionType === "button") {
jsCodeContent += `function ShowContent() {
document.getElementById('contentText').style.display = 'block';
}
function HideContent() {
document.getElementById('contentText').style.display = 'none';
}`;
} else if (functionType === "checkbox") {
jsCodeContent += `function ShowHide() {
var contentDiv = document.getElementById('contentText');
var checkbox = document.querySelector('input[type="checkbox"]');
if (checkbox.checked) {
contentDiv.style.display = 'block';
} else {
contentDiv.style.display = 'none';
}
}
window.addEventListener('load', function() {
onloadShowHide(); 
});`;
} else if (functionType === "radiobutton") {
jsCodeContent += `function ShowHide() {
var contentText = document.getElementById("contentText");
var showRadio = document.getElementById("show_rdo");
var hideRadio = document.getElementById("hide_rdo");
if (showRadio.checked) {
contentText.style.display = "block";
hideRadio.checked = false;
} else {
contentText.style.display = "none";
showRadio.checked = false;
hideRadio.checked = true;
}
}`;
} else if (functionType === "link") {
jsCodeContent += `function ShowContent() {
var contentText = document.getElementById("contentText");
contentText.style.display = "block";
}
function HideContent() {
var contentText = document.getElementById("contentText");
contentText.style.display = "none";
}`;
} else if (functionType === "toggleLink") {
jsCodeContent += `function ToggleVisibility() {
var contentText = document.getElementById("contentText");
var toggle = document.getElementById("toogle");
if (contentText.style.display === "none" || contentText.style.display === "") {
contentText.style.display = "block";
toggle.innerText = "Hide";
} else {
contentText.style.display = "none";
toggle.innerText = "Show";
}
}
`;
}
// Display generated code
codeOutput.style.display = "block";
htmlCode.textContent = htmlCodeContent;
cssCode.textContent = cssCodeContent;
jsCode.textContent = jsCodeContent;
});
});
// Copy Generated Code
// Function to copy content to clipboard
function copyToClipboard(contentId) {
var content = document.getElementById(contentId);
var range = document.createRange();
range.selectNode(content);
window.getSelection().removeAllRanges();
window.getSelection().addRange(range);
document.execCommand('copy');
window.getSelection().removeAllRanges();
}
// Add event listeners to copy buttons
var copyButtons = document.querySelectorAll('.copyButton');
copyButtons.forEach(function(button) {
button.addEventListener('click', function() {
var contentId = this.previousElementSibling.id;
copyToClipboard(contentId);
// Change the button text to "Copied"
// Change the button text to "Copied"
this.innerHTML = '<i class="fa fa-clipboard"></i> Copied';
setTimeout(function() {
button.innerHTML = '<i class="fa fa-clone"></i> Copy Code';
}, 1500);
});
});
// Add event listeners to copy buttons
var copyButtons = document.querySelectorAll('.copyButton');
copyButtons.forEach(function(button) {
button.addEventListener('click', function() {
var contentId = this.previousElementSibling.id;
copyToClipboard(contentId);
});
});
// Run Generated Code in a New Tab/Window
document.getElementById("runCodeButton").addEventListener("click", function () {
const generatedHtmlCode = document.getElementById("htmlCode").textContent;
const generatedcssCode = document.getElementById("cssCode").textContent;
const generatedjsCode = document.getElementById("jsCode").textContent;
const newTab = window.open('about:blank');
newTab.document.open();
newTab.document.write(generatedcssCode);
newTab.document.write(generatedHtmlCode);
const scriptElement = newTab.document.createElement('script'); // Create a script element
scriptElement.textContent = generatedjsCode; // Set the content of the script
newTab.document.body.appendChild(scriptElement); // Append the script to the body
newTab.document.close();
});
