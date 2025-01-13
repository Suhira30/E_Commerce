<script>
 
  import { derived } from 'svelte/store';

  import { writable } from 'svelte/store';

export const filterStore = writable({
  minPrice: 0,
  maxPrice: 1000,
  category: 'all'
});

  let products = [
    { id: 1, name: 'Product 1', price: 200, category: 'electronics', image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg' },
    { id: 2, name: 'Product 2', price: 400, category: 'clothing', image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg' },
    { id: 3, name: 'Product 3', price: 600, category: 'electronics', image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg' },
    { id: 4, name: 'Product 4', price: 100, category: 'furniture', image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg' },
    { id: 5, name: 'Product 5', price: 150, category: 'clothing', image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg' },
  ];

  // Create a derived store to filter products based on the filter store
  const filteredProducts = derived(filterStore, $filterStore => {
    return products.filter(product => 
      product.price >= $filterStore.minPrice &&
      product.price <= $filterStore.maxPrice &&
      ($filterStore.category === 'all' || product.category === $filterStore.category)
    );
  });
</script>

<main class="flex">
  <div class="w-full sm:w-1/4 p-4 bg-gray-100">
    <h2 class="text-xl font-bold mb-4">Filters</h2>
    
    <!-- Price Range Filter -->
    <div class="mb-4">
      <label for="price-range" class="block text-sm font-medium text-gray-700">Price Range</label>
      <input type="range" min="0" max="1000" step="10" bind:value={$filterStore.minPrice} class="w-full mt-2" />
      <input type="range" min="0" max="1000" step="10" bind:value={$filterStore.maxPrice} class="w-full mt-2" />
      <div class="flex justify-between text-sm">
        <span>{$filterStore.minPrice}</span>
        <span>{$filterStore.maxPrice}</span>
      </div>
    </div>

    <!-- Category Filter -->
    <div class="mb-4">
      <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
      <select bind:value={$filterStore.category} class="w-full p-2 mt-2 border rounded">
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="furniture">Furniture</option>
      </select>
    </div>
  </div>

  <!-- Product List -->
  <div class="w-full sm:w-3/4 p-4">
    <h2 class="text-xl font-bold mb-4">Product List</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each $filteredProducts as product}
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
