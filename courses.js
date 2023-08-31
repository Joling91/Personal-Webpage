// Function to search courses based on user input
function searchCourse() {
  // Get the search input value and convert it to lowercase
  let input = document.getElementById("searchInput").value.toLowerCase();
  // Select all the course list items
  let courses = document.querySelectorAll("#courseList li");

  // Iterate over each course
  for (let course of courses) {
    // Get the course name and convert it to lowercase
    let courseName = course.querySelector("h3").textContent.toLowerCase();

    // Check if the course name includes the search input
    if (courseName.includes(input)) {
      course.style.display = "block";  // Show the course
    } else {
      course.style.display = "none";   // Hide the course
    }
  }
}
function filterByLevel() {
  // Get the selected level filter value
  let filter = document.getElementById("levelFilter").value;
  // Get the course list items
  let courses = document.querySelectorAll("#courseList li");

  // Iterate over each course
  for (let course of courses) {
    // Get the course level
    let level = course.querySelector(".level").textContent;
    // Get the course name
    let courseName = course.querySelector("h3").textContent.toLowerCase();

    // Check if the course level and course name match the selected filter and search input, respectively
    let isLevelMatch = filter === "All Levels" || level === filter;
    let isNameMatch = courseName.includes(document.getElementById("searchInput").value.toLowerCase());

    // Show or hide the course based on the filter and search input matches
    if (isLevelMatch && isNameMatch) {
      course.style.display = "block";
    } else {
      course.style.display = "none";
    }
  }
}

// Function to sort courses by level
function sortByLevel() {
  // Get the selected sorting option
  let sortOption = document.getElementById("levelSort").value;
  // Get the course list
  let courses = document.getElementById("courseList");

  // Convert the course list children to an array and sort them
  Array.from(courses.children)
    .sort((a, b) => {
      // Get the level values of the two courses
      let levelA = a.querySelector(".level").textContent.toLowerCase();
      let levelB = b.querySelector(".level").textContent.toLowerCase();

      // Perform the sorting comparison based on the selected sort option
      if (sortOption === "asc") {
        if (levelA < levelB) return -1;
        if (levelA > levelB) return 1;
        return 0;
      } else {
        if (levelA > levelB) return -1;
        if (levelA < levelB) return 1;
        return 0;
      }
    })
    .forEach(course => {
      // Append the sorted course back to the course list
      courses.appendChild(course);
    });
}
