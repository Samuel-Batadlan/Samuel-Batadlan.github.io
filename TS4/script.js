// Dish Data
const dishes = {
    sushi: {
        title: "Sushi",
        image: "https://cdn.pixabay.com/photo/2020/07/26/12/58/sushi-5439480_1280.jpg",
        description: "A delicate balance of vinegared rice and fresh ingredients, sushi is a celebrated Japanese dish that highlights the natural flavors of seafood, vegetables, and sometimes egg. Whether you choose nigiri (hand-pressed rice with toppings), maki (rolled sushi with seaweed), or sashimi (sliced raw fish), each bite offers a harmonious blend of texture and taste, often paired with soy sauce, wasabi, and pickled ginger for the perfect experience.",
    },
    ramen: {
        title: "Ramen",
        image: "https://media.istockphoto.com/id/1057974668/photo/japanese-traditional-food-ramen.jpg?s=612x612&w=0&k=20&c=VX0Qhoz8IQ23g_GLzsvlca_vTSHaX7hn4Rg3DLWdzDI=",
        description: "A soul-warming bowl of Japanese noodles in a rich, flavorful broth, ramen is a comfort food loved by many. With various styles such as shoyu (soy sauce-based), miso (fermented soybean paste-based), tonkotsu (pork bone broth), and shio (salt-based), each bowl offers a unique depth of umami. Topped with sliced pork, green onions, seaweed, and a soft-boiled egg, ramen is a satisfying dish that fills both the stomach and the heart."
    },
    tempura: {
        title: "Tempura",
        image: "https://media.istockphoto.com/id/184274745/photo/shrimp-tempura.jpg?s=612x612&w=0&k=20&c=ppPL66ltwxosupIEQBUe7FZKgfRX3fIik3KkFPB8phA=",
        description: "A crispy and light delight, tempura features seafood or vegetables coated in a delicate batter and deep-fried to golden perfection. Unlike heavy fried foods, Japanese tempura is known for its airy texture and subtle seasoning, allowing the fresh ingredients to shine. Served with a light dipping sauce or sprinkled with salt, it’s an irresistible dish that pairs wonderfully with rice or noodles."
    },
    takoyaki: {
        title: "Takoyaki",
        image: "https://media.istockphoto.com/id/1310599635/photo/japanese-takoyaki.jpg?s=612x612&w=0&k=20&c=InJ66ba4n0CkJODMSZfoNmQKlxagWFOv9n_0kMcoDqU=",
        description: "hese golden, bite-sized octopus balls are a beloved street food from Osaka, known for their crispy outside and soft, savory inside. Made with a flavorful batter filled with diced octopus, green onions, and pickled ginger, takoyaki is cooked in a special griddle and served with a drizzle of tangy sauce, mayonnaise, bonito flakes, and seaweed powder. A fun and flavorful snack, perfect for sharing!"
    },
    donburi: {
        title: "Donburi",
        image: "https://media.istockphoto.com/id/971739496/photo/katsudon-rice-topped-with-fried-pork-japanese-cuisine.jpg?s=612x612&w=0&k=20&c=kttPwsnCagwPFSObK0aHIzsHAymIleqjp8m9kanbmLQ=",
        description: "A hearty and comforting rice bowl, donburi features a delicious topping served over steamed rice, making it a satisfying one-bowl meal. Popular varieties include gyudon (beef), katsudon (breaded pork cutlet), oyakodon (chicken and egg), and unadon (grilled eel). Whether sweet, savory, or umami-rich, each donburi offers a wholesome taste of Japan in every bite."
    }
};

// Open Pop-up
function openPopup(dishKey) {
    const popup = document.querySelector(".popup-overlay");
    const popupTitle = document.getElementById("popup-title");
    const popupImage = document.getElementById("popup-image");
    const popupDescription = document.getElementById("popup-description");

    if (dishes[dishKey]) {
        popupTitle.innerText = dishes[dishKey].title;
        popupImage.src = dishes[dishKey].image;
        popupDescription.innerText = dishes[dishKey].description;
    }

    popup.classList.add("active"); // Show pop-up
    document.body.classList.add("no-scroll"); // Disable scrolling
}

// Close Pop-up with animation
function closePopup() {
    const popup = document.querySelector(".popup-overlay");
    popup.classList.add("closing"); // Add closing animation

    setTimeout(() => {
        popup.classList.remove("active", "closing"); // Fully hide after animation
        document.body.classList.remove("no-scroll"); // Re-enable scrolling
    }, 400); // Match CSS transition time
}

// Add event listeners to dish cards
document.querySelectorAll(".dish-card").forEach(card => {
    card.addEventListener("click", function() {
        const dishKey = this.getAttribute("data-dish");
        openPopup(dishKey);
    });
});

// Close button functionality
document.querySelector(".close-btn").addEventListener("click", closePopup);
