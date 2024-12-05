// Search functionality for Products
function searchProducts() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const productCards = document.querySelectorAll(".card");
  
    productCards.forEach((card) => {
      const productName = card.querySelector(".card-title").textContent.toLowerCase();
      if (productName.includes(input)) {
        card.parentElement.style.display = "block";
      } else {
        card.parentElement.style.display = "none"; 
      }
    });
  }
 