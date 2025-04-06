document.addEventListener("DOMContentLoaded", function() {
    // Handle dropdown visibility for report details
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');
    
    dropdownBtns.forEach(button => {
        button.addEventListener('click', function() {
            const dropdownContent = this.parentElement.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                // Hide all dropdowns before showing the clicked one
                document.querySelectorAll('.dropdown-content').forEach(content => {
                    content.style.display = "none";
                });
                dropdownContent.style.display = "block";
            }
        });
    });

    // Handle adding medicine to cart
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    
    addToCartBtns.forEach(button => {
        button.addEventListener('click', function() {
            alert("Medicine added to cart!");
        });
    });
});
