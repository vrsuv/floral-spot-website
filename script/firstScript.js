// Homepage image slideshow
var slideIndex = 0;
showSlides();

function showSlides() 
{
    var i;
    var slides = document.getElementsByClassName("imgSlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) 
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}

// Form for newsletter subcription
function checkCompulsoryFieldsValues()
{
    alert ("Inside checkCompulsoryFieldsValues() !!");
    
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    
    var errorMessage = "";
    
    if (nameElement.value.trim().length <= 0)
    {
        errorMessage += "\n Invalide Name, please enter non-blank values \n";
        nameElement.style.background = "pink";
    }
    else
        nameElement.style.background = "white";
    
    var emailAsString = emailElement.value.trim();
    
    if (emailAsString.length <= 0 || !isValidEmailFormat (emailAsString))
    {
        errorMessage += "\n Invalid Email address, please enter non-blank email in correct format. \n";
        emailElement.style.background = "pink";
    }
    else
        emailElement.style.background = "white";
    
    return (errorMessage);
}

function checkFormData()
{
    var errorMessage = checkCompulsoryFieldsValues();
    
    if(errorMessage.length > 0)
        alert (errorMessage);
    else
    {
        var title = document.getElementById("name");
        
        var confirmationMessage = "-------------------------------------------\n";
            confirmationMessage += "Dear " + title.value + ", \n";
            confirmationMessage += "Thank you for subscribing to our newsletter!          \n";
            confirmationMessage += "-------------------------------------------\n";
            confirmationMessage += "You will receive an email confirming your subscription :) \n\n";
            confirmationMessage += "Have a nice day!                      \n";
        
        alert (confirmationMessage);
    }
}


function resetFormData()
{
  location = window.location.href;
}

//Events filter
function myFunction() 
{
  document.getElementsByClassName("dropdown-content").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) 
{
  if (!e.target.matches('.dropbtn')) 
  {
    var myDropdown = document.getElementsByClassName("dropdown-content");
    if (myDropdown.classList.contains('show')) 
    {
      myDropdown.classList.remove('show');
    }
  }
}

