const bios = [$("#js-b1"),$("#js-b2"),$("#js-b3"),$("#js-b4"),$("#js-b5")];
const triggers = [$("#js-info1"),$("#js-info2"),$("#js-info3"),$("#js-info4"),$("#js-info5")];


$("#js-info1, #js-info2, #js-info3, #js-info4, #js-info5").on("click", function (event) {
    for (let i = 0; i < bios.length; i++) {
        bios[i].fadeOut();
    }
    setTimeout(function () {
        const target = event.currentTarget.id;
    let index;
    switch (target) {
        case "js-info1":
            index = 0;
            break;
        case "js-info2":
            index = 1;
            break;
        case "js-info3":
            index = 2;
            break;
        case "js-info4":
            index = 3;
            break;
        case "js-info5":
            index = 4;
            break;
        default:
            break;
    }

    bios[index].fadeIn();
    },350)
});

/**-----------Slider----------**/
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

/**JavaScript Explained
First, set the slideIndex to 1. (First picture)

Then call showDivs() to display the first image.

When the user clicks one of the buttons call plusDivs().

The plusDivs() function subtracts one or  adds one to the slideIndex.

The showDiv() function hides (display="none") all elements with the class name "mySlides", and displays (display="block") the element with the given slideIndex.

If the slideIndex is higher than the number of elements (x.length), the slideIndex is set to zero.

If the slideIndex is less than 1 it is set to number of elements (x.length). **/


