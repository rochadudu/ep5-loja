document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.querySelector(".cart-items");
    const total = document.getElementById("total-price");
    const productList = document.querySelector(".product-list");

    let cart = [];
    let totalPrice = 0;

    // Função para adicionar um item ao carrinho
    function addToCart(item) {
        cart.push(item);
        totalPrice += item.price;
        updateCart();
    }

    // Função para remover um item do carrinho
    function removeFromCart(index) {
        totalPrice -= cart[index].price;
        cart.splice(index, 1);
        updateCart();
    }

    // Função para atualizar o carrinho
    function updateCart() {
        cartItems.innerHTML = "";
        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.innerHTML = `${item.name} - $${item.price} <button class="remove-from-cart" data-index="${index}">Remover</button>`;
            cartItems.appendChild(li);
        });
        total.textContent = totalPrice.toFixed(2);
    }

    // Adicionar evento de clique para adicionar item ao carrinho
    productList.addEventListener("click", (e) => {
        if (e.target.classList.contains("add-to-cart")) {
            const listItem = e.target.parentElement;
            const name = listItem.getAttribute("data-name");
            const price = parseFloat(listItem.getAttribute("data-price"));
            addToCart({ name, price });
        }
    });

    // Adicionar evento de clique para remover item do carrinho
    cartItems.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-from-cart")) {
            const index = parseInt(e.target.getAttribute("data-index"));
            removeFromCart(index);
        }
    });
});
