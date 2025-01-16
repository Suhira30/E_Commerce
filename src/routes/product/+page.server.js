{/* <script>
  import { writable, derived } from 'svelte/store';
  import { onMount } from 'svelte';

  export const filterStore = writable({
    minPrice: 0,
    maxPrice: 80000,
    category: 'all',
    color: 'all'
  });

  let products = writable([]);
  let error = writable(null);

  const categories = ['Head Phone', 'Ear Buds', 'Wireless Speaker'];
  const colors = ['Black', 'White', 'Red', 'Blue'];

  async function fetchProducts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      if (!response.ok) {
        throw new Error('Fetching failed');
      }
      const data = await response.json();
      const result = data.map(item => ({
        id: item.id,
        name: item.title,
        price: Math.floor(Math.random() * 80000) * 295,
        category: categories[Math.floor(Math.random() * categories.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        image: item.url
      }));
      products.set(result);
    } catch (err) {
      error.set(err.message);
    }
  }

  onMount(fetchProducts);

  const filteredProducts = derived([filterStore, products], ([$filterStore, $products]) => {
    return $products.filter(product =>
      product.price >= $filterStore.minPrice &&
      product.price <= $filterStore.maxPrice &&
      ($filterStore.category === 'all' || product.category === $filterStore.category) &&
      ($filterStore.color === 'all' || product.color === $filterStore.color)
    );
  });

  export let itemsPerPage = 5;
  const currentPage = writable(1);

  const paginatedProducts = derived(
    [filteredProducts, currentPage],
    ([$filteredProducts, $currentPage]) => {
      const start = ($currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return $filteredProducts.slice(start, end);
    }
  );

  const totalPages = derived(filteredProducts, $filteredProducts =>
    Math.ceil($filteredProducts.length / itemsPerPage)
  );

  function goToPage(page) {
    currentPage.set(page);
  }
</script>

<main class="flex">
  <div class="w-full sm:w-1/4 p-4 bg-gray-100 h-screen sticky top-0">
    <div class="mb-4 mt-10 ml-4 mr-4">
      <label for="price-range" class="block text-sm font-medium text-gray-700">Price Range</label>
      <input type="range" min="0" max="80000" step="10" bind:value={$filterStore.minPrice} class="w-full mt-2" />
      <input type="range" min="0" max="80000" step="10" bind:value={$filterStore.maxPrice} class="w-full mt-2" />
      <div class="flex justify-between text-sm">
        <span>{$filterStore.minPrice}</span>
        <span>{$filterStore.maxPrice}</span>
      </div>
    </div>

    <div class="mb-4 ml-4 mr-4">
      <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
      <select bind:value={$filterStore.category} class="w-full p-2 mt-2 border rounded">
        <option value="all">All</option>
        {#each categories as category}
          <option value={category}>{category}</option>
        {/each}
      </select>
    </div>

    <div class="mb-4 ml-4 mr-4">
      <label for="color" class="block text-sm font-medium text-gray-700">Color</label>
      {#each colors as color}
        <label class="flex items-center">
          <input type="radio" name="color" value={color} bind:group={$filterStore.color} class="mr-2" />
          {color}
        </label>
      {/each}
    </div>
  </div>

  <div class="w-full sm:w-3/4 p-4">
    <h2 class="text-xl font-bold mb-4">Product List</h2>
    {#if $paginatedProducts.length > 0}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each $paginatedProducts as product}
          <div class="bg-white p-4 border rounded">
            <img src={product.image} alt={product.name} class="w-full h-48 object-cover mb-4 rounded" />
            <h3 class="text-lg font-semibold">{product.name}</h3>
            <p class="text-sm text-gray-600">{product.category}</p>
            <p class="text-lg font-bold text-gray-900">${product.price}</p>
          </div>
        {/each}
      </div>
    {:else}
      <div class="text-center text-gray-500">
        <p>No products matched your filter options.</p>
      </div>
    {/if}

    <section class="mt-10 flex items-center justify-between">
      <button
        on:click={() => goToPage($currentPage - 1)}
        disabled={$currentPage <= 1}
        class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
      >
        Previous
      </button>
      <span>Page {$currentPage} of {$totalPages}</span>
      <button
        on:click={() => goToPage($currentPage + 1)}
        disabled={$currentPage >= $totalPages}
        class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
      >
        Next
      </button>
    </section>
  </div>
</main> */}
