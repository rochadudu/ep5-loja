// Itens do carrinho (exemplo)
const items = [
    { id: 1, name: 'Produto 1', price: 10.00 },
    { id: 2, name: 'Produto 2', price: 15.00 },
    // Adicione mais itens conforme necessário
];

// Seletores
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-button');

// Função para atualizar o carrinho
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;

    items.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remover';
        removeButton.addEventListener('click', () => removeFromCart(item));
        li.appendChild(removeButton);
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.innerText = `$${total.toFixed(2)}`;
}

// Função para adicionar item ao carrinho
function addToCart(item) {
    items.push(item);
    updateCart();
}

// Função para remover item do carrinho
function removeFromCart(item) {
    const index = items.findIndex(i => i.id === item.id);
    if (index !== -1) {
        items.splice(index, 1);
        updateCart();
    }
}

// Evento de clique no botão "Finalizar Compra"
checkoutButton.addEventListener('click', () => {
    // Implemente a lógica de finalização de compra aqui
    alert('Compra finalizada! Obrigado por comprar conosco.');
});

// Atualiza o carrinho inicialmente
updateCart();
