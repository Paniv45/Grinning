document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.querySelector('.cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartBtn = document.getElementById('cart-btn');
    const cartSection = document.getElementById('cart-section');
    const clearCartBtn = document.getElementById('clear-cart-btn');
    let total = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.parentElement;
            const productName = product.querySelector('h2').textContent;
            const productPrice = parseFloat(product.querySelector('p').textContent.slice(1));
            const productImageSrc = product.querySelector('img').src; 

            
            if (!button.classList.contains('added')) {
                
                button.textContent = 'Added';
                button.classList.add('added');

                
                const cartItemContainer = document.createElement('div');
                cartItemContainer.classList.add('cart-item');

                
                const cartItemImage = document.createElement('img');
                cartItemImage.src = productImageSrc;
                cartItemImage.alt = productName; 
                cartItemImage.style.width = '200px'; 
                cartItemImage.style.height = '200px'; 
                cartItemContainer.appendChild(cartItemImage);

                
                const cartItemDetails = document.createElement('div');
                cartItemDetails.classList.add('cart-item-details');

               
                const cartItemName = document.createElement('p');
                cartItemName.textContent = productName;
                cartItemDetails.appendChild(cartItemName);

                
                const cartItemPrice = document.createElement('p');
                cartItemPrice.textContent = `$${productPrice.toFixed(2)}`;
                cartItemDetails.appendChild(cartItemPrice);

                
                cartItemContainer.appendChild(cartItemDetails);

                
                cartItemsList.appendChild(cartItemContainer);

                total += productPrice;
                cartTotal.textContent = total.toFixed(2);
            } else {
                
                button.textContent = 'Add to Cart';
                button.classList.remove('added');

              
            }
        });
    });

    
    clearCartBtn.addEventListener('click', function() {
        cartItemsList.innerHTML = '';
        total = 0;
        cartTotal.textContent = '0.00';

        
        addToCartButtons.forEach(button => {
            button.textContent = 'Add to Cart';
            button.classList.remove('added');
        });

        
        cartSection.style.display = 'none';
    });

    
    cartSection.style.display = 'none';

    
    cartBtn.addEventListener('click', function() {
        if (cartSection.style.display === 'none') {
            cartSection.style.display = 'block';
        } else {
            cartSection.style.display = 'none';
        }
    });

    const searchInput = document.getElementById('search-input');
    const products = document.querySelectorAll('.product');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        products.forEach(product => {
            const productName = product.querySelector('h2').textContent.toLowerCase();
            if (productName.includes(searchTerm)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });

});

function logout() {
    
    window.location.assign("index.html");
    console.log("Logged Out");
}
window.onresize = function () {
    if (window.innerWidth < 0.85 * window.screen.availWidth) {
      window.resizeTo(0.85 * window.screen.availWidth, window.innerHeight);
      alert("Minimum width reached. Cannot minimize further.Kindly view in full screen for best expeerience");
    }
};

function toggleHidden() {
    var hiddenButtonsContainer = document.querySelector('.hidden-buttons-container');
    if (hiddenButtonsContainer.style.display === 'none' || hiddenButtonsContainer.style.display === '') {
        hiddenButtonsContainer.style.display = 'block';
    } else {
        hiddenButtonsContainer.style.display = 'none';
    }
}