<script>
  import { derived, writable } from 'svelte/store';
  import { onMount } from 'svelte';
  import logo from "$lib/assests/logo.png"
  export const filterStore = writable({
    minPrice: 500,
    maxPrice: 600000,
    category: 'all',
    color: 'all'
  });

  let products = writable([]);
  let error = writable(null);
  const pageStore = writable(1); 
  const categories = ['Head Phone', 'Ear Buds', 'Wireless Speaker'];
  const color = ['Black', 'White', 'Red', 'Blue'];
  const itemsPerPage = 12;

  async function fetchProducts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      if (!response.ok) {
        throw new Error('fetching failed');
      }
      const data = await response.json();
      const result = data.map((item) => ({
        id: item.id,
        name: item.title,
        price: Math.floor(Math.random() * 80000) * 295,
        category: categories[Math.floor(Math.random() * categories.length)],
        color: color[Math.floor(Math.random() * color.length)],
        image: item.url,
        thumbnailImage: item.thumbnailUrl
      }));
      products.set(result);
    } catch (err) {
      error.set(err.message);
    }
  }

  onMount(fetchProducts);

  const filteredProducts = derived([filterStore, products], ([$filterStore, $products]) => {
    return $products.filter((product) =>
      product.price >= $filterStore.minPrice &&
      product.price <= $filterStore.maxPrice &&
      ($filterStore.category === 'all' || product.category === $filterStore.category) &&
      ($filterStore.color === 'all' || product.color === $filterStore.color)
    );
  });

  const paginatedProducts = derived([filteredProducts, pageStore], ([$filteredProducts, $pageStore]) => {
    const page = parseInt($pageStore, 10) - 1;
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return $filteredProducts.slice(startIndex, endIndex);
  });

  const totalPages = derived(filteredProducts, ($filteredProducts) => {
    return Math.ceil($filteredProducts.length / itemsPerPage);
  });

  function goToNextPage() {
    pageStore.update(($pageStore) => Math.min($pageStore + 1, $totalPages));
  }

  function goToPreviousPage() {
    pageStore.update(($pageStore) => Math.max($pageStore - 1, 1));
  }
</script>

<main class="flex">
  <div class="w-full xs:w-1/2 sm:w-1/3 md:w-1/4 p-4 bg-purple-50 h-screen sticky top-0">
    <div class="mb-4 mt-10 ml-4 mr-4">
      <label for="price-range" class="block text-sm font-medium text-black-400 ">Price Range</label>
      <input type="range" min="500" max="600000" step="5" bind:value={$filterStore.minPrice} class="w-full mt-2" />
      <input type="range" min="500" max="600000" step="5" bind:value={$filterStore.maxPrice} class="w-full mt-2" />
      <div class="flex justify-between text-sm">
        <span>{$filterStore.minPrice}</span>
        <span>{$filterStore.maxPrice}</span>
      </div>
    </div>

    <div class="mb-4 ml-4 mr-4">
      <label for="category" class="block text-sm font-medium text-black-400">Category</label>
      <select bind:value={$filterStore.category} class="w-full p-2 mt-2 border rounded">
        <option value="all">All</option>
        <option value="Head Phone">Head Phones</option>
        <option value="Ear Buds">Ear Buds</option>
        <option value="Wireless Speaker">Wireless Speaker</option>
      </select>
    </div>

    <div class="mb-4 ml-4 mr-4">
      <label for="color" class="block text-sm font-medium text-black-400">Color</label>
      <div class="mt-2 space-y-2">
        <label class="flex items-center">
          <input type="radio" name="color" value="all" bind:group={$filterStore.color} class="mr-2" />
          All
        </label>
        <label class="flex items-center">
          <input type="radio" name="color" value="Red" bind:group={$filterStore.color} class="mr-2" />
          Red
        </label>
        <label class="flex items-center">
          <input type="radio" name="color" value="Blue" bind:group={$filterStore.color} class="mr-2" />
          Blue
        </label>
        <label class="flex items-center">
          <input type="radio" name="color" value="White" bind:group={$filterStore.color} class="mr-2" />
          White
        </label>
        <label class="flex items-center">
          <input type="radio" name="color" value="Black" bind:group={$filterStore.color} class="mr-2" />
          Black
        </label>
      </div>
    </div>
  </div>

  <div class="w-full sm:w-3/4 p-4">
    <div >
        <img class="object-cover w-30 h-20 rounded-lg mb-5" src={logo} alt="Logo" >
        
    {#if $filteredProducts.length > 0}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6  ">
        {#each $paginatedProducts as product}
          <div class="bg-purple-100 p-4 border rounded-3xl  transition-transform transform hover:scale-105 hover:shadow-lg">
            <img src={product.image} alt="not founded" class="w-full h-48 object-cover mb-4 rounded" />
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

     <div class="flex justify-between mt-10 p-4">
    <button
    class=" px-1 py-1 sm:px-2 sm:py-1 md:px-4 md:py-2   bg-purple-500 text-white rounded-full"
      disabled={$pageStore <= 1}
      on:click={goToPreviousPage}
    >
      Prev
    </button>
    <span class="text-sm">
      Page {$pageStore} of {$totalPages}
    </span>
    <button
    class=" px-1 py-1 sm:px-2 sm:py-1 md:px-4 md:py-2  bg-purple-500 text-white rounded-full"
    disabled={$pageStore >= $totalPages}
      on:click={goToNextPage}
    >
      Next
    </button>
  </div>
  </div>
</main>
