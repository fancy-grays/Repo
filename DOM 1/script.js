// Select all the plus buttons
const plusButtons = document.querySelectorAll(".fa-plus-circle");

// Select all the minus buttons
const minusButtons = document.querySelectorAll(".fa-minus-circle");

// Select all the trash buttons
const deleteButtons = document.querySelectorAll(".fa-trash-alt");

// Select all the heart buttons
const heartButtons = document.querySelectorAll(".fa-heart");

// Select the total price element
const totalPrice = document.querySelector(".total");

// Function to calculate the total price
function calculateTotal() {
    let total = 0;

    // Select all the product cards
    const cards = document.querySelectorAll(".list-products .card");

    cards.forEach(function (card) {
        const price = parseFloat(
            card.querySelector(".unit-price").textContent
        );

        const quantity = parseInt(
            card.querySelector(".quantity").textContent
        );

        total += price * quantity;
    });

    totalPrice.textContent = total + " $";
}

// Add quantity when the plus button is clicked
plusButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const card = button.closest(".card");

        const quantityElement = card.querySelector(".quantity");

        let quantity = parseInt(quantityElement.textContent);

        quantity++;

        quantityElement.textContent = quantity;

        calculateTotal();
    });
});

// Reduce quantity when the minus button is clicked
minusButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const card = button.closest(".card");

        const quantityElement = card.querySelector(".quantity");

        let quantity = parseInt(quantityElement.textContent);

        if (quantity > 0) {
            quantity--;

            quantityElement.textContent = quantity;

            calculateTotal();
        }
    });
});

// Delete a product when the trash icon is clicked
deleteButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const cardBody = button.closest(".card-body");

        // Remove the product's outer container
        const productContainer = cardBody.parentElement.parentElement;

        productContainer.remove();

        calculateTotal();
    });
});

// Change the heart color when clicked
heartButtons.forEach(function (heart) {
    heart.addEventListener("click", function () {
        if (heart.style.color === "red") {
            heart.style.color = "black";
        } else {
            heart.style.color = "red";
        }
    });
});

// Calculate the initial total
calculateTotal();