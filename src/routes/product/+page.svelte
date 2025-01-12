<script>
    let minPrice = 0;
    let maxPrice = 1000;
    let category = 'all';
  
    // Sample product data (can be fetched from an API)
    const products = [
      { id: 1, name: 'Product 1', price: 200, category: 'electronics', image: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Product 2', price: 400, category: 'clothing', image: 'https://via.placeholder.com/150' },
      { id: 3, name: 'Product 3', price: 600, category: 'electronics', image: 'https://via.placeholder.com/150' },
      { id: 4, name: 'Product 4', price: 100, category: 'furniture', image: 'https://via.placeholder.com/150' },
      { id: 5, name: 'Product 5', price: 150, category: 'clothing', image: 'https://via.placeholder.com/150' },
    ];
  
    // Filter products based on price and category
    $: filteredProducts = products.filter(product => 
      product.price >= minPrice && product.price <= maxPrice &&
      (category === 'all' || product.category === category)
    );
  </script>
<main class="flex">
    <!-- Filter Slider (Left Side) -->
    <div class="w-full sm:w-1/4 p-4 bg-gray-100">
      <h2 class="text-xl font-bold mb-4">Filters</h2>
  
      <!-- Price Range Filter -->
      <div class="mb-4">
        <label for="price-range" class="block text-sm font-medium text-gray-700">Price Range</label>
        <!-- <input type="range" id="price-range" min="0" max="1000" step="10" bind:value={minPrice} class="w-full mt-2" /> -->
        <input type="range" id="price-range" min="0" max="1000" step="10" bind:value={maxPrice} class="w-full mt-2" />
        <div class="flex justify-between text-sm">
          <span>{minPrice}</span>
          <span>{maxPrice}</span>
        </div>
      </div>
  
      <!-- Category Filter -->
      <div class="mb-4">
        <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
        <select id="category" bind:value={category} class="w-full p-2 mt-2 border rounded">
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="furniture">Furniture</option>
        </select>
      </div>
    </div>
  
    <!-- Product List (Right Side) -->
    <div class="w-full sm:w-3/4 p-4">
      <h2 class="text-xl font-bold mb-4">Product List</h2>
  
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each filteredProducts as product}
          <div class="bg-white p-4 border rounded">
            <img src={product.image} alt={product.name} class="w-full h-48 object-cover mb-4 rounded" />
            <h3 class="text-lg font-semibold">{product.name}</h3>
            <p class="text-sm text-gray-600">Category: {product.category}</p>
            <p class="text-lg font-bold text-gray-900">${product.price}</p>
          </div>
        {/each}
      </div>
    </div>
  </main>
  

<style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
  </style>
