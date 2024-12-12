// script.js
document.querySelectorAll(".key").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
  
      // Update screen text
      const screenText = document.getElementById("screen-text");
      switch (action) {
        case "about":
          screenText.textContent = "About Me!";
          break;
        case "projects":
          screenText.textContent = "Projects!";
          break;
        case "interests":
          screenText.textContent = "Interests!";
          break;
        case "experience":
          screenText.textContent = "Experience!";
          break;
        case "skills":
          screenText.textContent = "Skills!";
          break;
        case "contact":
          screenText.textContent = "Contact Me!";
          break;
        default:
          screenText.textContent = "Ben Williams ";
      }
  



      // Show the corresponding modal
      showPopUpPage(`${action}Page`);
    });
  });
  
  function showPopUpPage(pageId) {
    document.querySelectorAll(".modal").forEach((page) => {
      page.style.display = "none";
    });
    const modal = document.getElementById(pageId);
    modal.style.display = "block";
  
    // Automatically reset when modal appears
    modal.addEventListener('shown.bs.modal', resetPayphone);
  }
  
  function resetPayphone() {
    const screenText = document.getElementById("screen-text");
    screenText.textContent = "Welcome!";
    document.querySelectorAll(".modal").forEach((page) => {
      page.style.display = "none";
    });
  }
  
  // Handle reset button click
  document.getElementById("reset-button").addEventListener("click", resetPayphone);

    // Call the function with the appropriate page ID based on the action
    switch (action) {
      case "about":
        showPopUpPage("aboutPage");
        break;
      case "projects":
        showPopUpPage("projectsPage");
        break;
      case "interests":
        showPopUpPage("interestsPage");
        break;
      case "experience":
        showPopUpPage("experiencePage");
        break;
      case "skills":
        showPopUpPage("skillsPage");
        break;
      case "contact":
        showPopUpPage("contactPage");
        break;
      default:
        showPopUpPage("errorPage");
    }
      // Navigate to sections (optional: smooth scrolling)
      // You can add section IDs in the HTML and scroll to them here.
   
  
  document.querySelectorAll('.key').forEach(button => {

    button.addEventListener('click', () => {
  
      const action = button.getAttribute('data-action');
  
      document.querySelectorAll('.popUpPage').forEach(page => {
  
        page.style.display = 'none';
  
      });
  
      document.getElementById(`${action}Page`).style.display = 'block';
  
    });
  
  });
  



  function handleButtonClick(action) {
    switch (action) {
      case "about":
        showPopUpPage("aboutPage");
        break;
      // Add other cases as needed
      default:
        showPopUpPage("errorPage");
    }
    const audio = new Audio('dtmf-tone.mp3');
audio.play();
  }
  