// Get the elements that will be dragged
const draggables = document.querySelectorAll(".draggable");
// Get the dropzone
const dropzone = document.querySelector(".dropzone");

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

// Add event listeners for when the element is being dragged over the dropzone
dropzone.addEventListener("dragover", (e) => {
  // Prevent the default behavior of not allowing elements to be dropped
  e.preventDefault();
  // Add a class to the dropzone to style it
  dropzone.classList.add("dragover");
});

// Add event listeners for when the element is no longer being dragged over the dropzone
dropzone.addEventListener("dragleave", () => {
  // Remove the class from the dropzone
  dropzone.classList.remove("dragover");
});

// Add event listeners for when the element is dropped onto the dropzone
dropzone.addEventListener("drop", () => {
  // Get the element that was dropped
  const draggable = document.querySelector(".dragging");
  // Append the element to the dropzone
  dropzone.appendChild(draggable);
  // Remove the class from the dropzone
  dropzone.classList.remove("dragover");
});