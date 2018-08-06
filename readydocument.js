// resize the profile picture in a way that doesn't leave blank space lying around
// necessary for Chrome and Safari but not Firefox (latest stable as of 2018/08/05)
resizeProfilePic = function() {
    pic = document.getElementById('profilePicture');
    h = pic.getBoundingClientRect().height;
    pic.setAttribute("style","width:" + h + "px; height:" + h + "px;");
    // Q: setting via pic.style is "preferred" but doesn't work:
    // https://www.w3schools.com/jsref/met_element_setattribute.asp
}
resizeProfilePic();
