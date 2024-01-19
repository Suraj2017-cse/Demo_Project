const spinner = document.querySelector(".spinner");
const userDataUrl = "https://jsonplaceholder.typicode.com/users";

// fetch(userDataUrl)
// .then(response => response.json())
// .then(data =>console.log(data)
// .catch(err => console.log(err))

// Assuming you have a total number of pages
let totalPages = 10;

function generatePageNumbers() {
  var paginationList = document.getElementById("paginationList");
  paginationList.innerHTML = ""; // Clear existing content

  // Add "Previous" button
  paginationList.innerHTML +=
    '<li class="page-item"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>';

  // Add page numbers
  for (var i = 1; i <= totalPages; i++) {
    paginationList.innerHTML +=
      '<li class="page-item"><a class="page-link" href="#">' + i + "</a></li>";
  }

  // Add "Next" button
  paginationList.innerHTML +=
    '<li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>';
}

// Call the function to generate initial page numbers
generatePageNumbers();

const pageLinks = document.querySelectorAll(".page-link");

pageLinks.forEach((e) => {
  e.addEventListener("click", () => console.log(e));
});
