// Get the elements that will be dragged
const draggables = document.querySelectorAll(".card");
// Get the dropzone
const drop1 = document.querySelector(".drop1");


// Loop through the draggable elements
draggables.forEach((draggable) => {
  // Add event listeners for when the element is being dragged
  draggable.addEventListener("dragstart", () => {
    // Add a class to the element being dragged to style it
    draggable.classList.add("dragging");
  });
  draggable.addEventListener("dragend", () => {
    // Remove the class from the element being dragged
    draggable.classList.remove("dragging");
  });
});
//drop zone 1 init
// Add event listeners for when the element is being dragged over the dropzone
drop1.addEventListener("dragover", (e) => {
  // Prevent the default behavior of not allowing elements to be dropped
  e.preventDefault();
  // Add a class to the dropzone to style it
  drop1.classList.add("dragover");
});

// Add event listeners for when the element is no longer being dragged over the dropzone
drop1.addEventListener("dragleave", () => {
  // Remove the class from the dropzone
  drop1.classList.remove("dragover");
});

// Add event listeners for when the element is dropped onto the dropzone
drop1.addEventListener("drop", () => {
  // Get the element that was dropped
  const draggable = document.querySelector(".dragging");
  // Append the element to the dropzone
  drop1.appendChild(draggable);
  // Remove the class from the dropzone
  drop1.classList.remove("dragover");
});
//drop zone 1 end

//drop zone 2 init 
const drop2 = document.querySelector(".drop2");


drop2.addEventListener("dragover", (e) => {
    // Prevent the default behavior of not allowing elements to be dropped
    e.preventDefault();
    // Add a class to the dropzone to style it
    drop2.classList.add("dragover");
  });
  
  // Add event listeners for when the element is no longer being dragged over the dropzone
  drop2.addEventListener("dragleave", () => {
    // Remove the class from the dropzone
    drop2.classList.remove("dragover");
  });
  
  // Add event listeners for when the element is dropped onto the dropzone
  drop2.addEventListener("drop", () => {
    // Get the element that was dropped
    const draggable = document.querySelector(".dragging");
    // Append the element to the dropzone
    drop2.appendChild(draggable);
    // Remove the class from the dropzone
    drop2.classList.remove("dragover");
  });
// drop zone 2 end

// drop zone 3 init
const drop3 = document.querySelector(".drop3");


drop3.addEventListener("dragover", (e) => {
    // Prevent the default behavior of not allowing elements to be dropped
    e.preventDefault();
    // Add a class to the dropzone to style it
    drop2.classList.add("dragover");
  });
  
  // Add event listeners for when the element is no longer being dragged over the dropzone
  drop3.addEventListener("dragleave", () => {
    // Remove the class from the dropzone
    drop3.classList.remove("dragover");
  });
  
  // Add event listeners for when the element is dropped onto the dropzone
  drop3.addEventListener("drop", () => {
    // Get the element that was dropped
    const draggable = document.querySelector(".dragging");
    // Append the element to the dropzone
    drop3.appendChild(draggable);
    // Remove the class from the dropzone
    drop3.classList.remove("dragover");
  });