<script>

  import { derived } from 'svelte/store';
  import { writable } from 'svelte/store';
  import { onMount } from 'svelte';


export const filterStore = writable({
  minPrice: 0,
  maxPrice: 80000,
  category: 'all',
  color: 'all'
});

// let products = [
//   { id: 1, name: 'Product 1', price: 200, category: 'electronics', color: 'red', image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg' },
//   { id: 2, name: 'Product 2', price: 400, category: 'clothing', color: 'blue', image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg' },
//   { id: 3, name: 'Product 3', price: 600, category: 'electronics', color: 'green', image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg' },
//   { id: 4, name: 'Product 4', price: 100, category: 'furniture', color: 'red', image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg' },
//   { id: 5, name: 'Product 5', price: 150, category: 'clothing', color: 'blue', image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg' },
// ];
let products=writable([]);
let error=writable(null);

const categories = ['Head Phone', 'Ear Buds', 'Wireless Speaker'];
const color = ['Black', 'White','Red','Blue'];

async function fetchProducts(){
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    if(!response.ok){
      throw new Error('fetching failed');
    }
    const data=await response.json();
    const result = data.map((item) => ({
      id:item.id,
      name:item.title,
      price:Math.floor(Math.random()*80000)*295,
      category:categories[Math.floor(Math.random() * categories.length)],
      color:color[Math.floor(Math.random() * color.length)]
    }));
    products.set(result);
  }catch(err){
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
</script>

<main class="flex">
  <div class="w-full sm:w-1/4 p-4 bg-gray-100 h-screen sticky top-0">
    <!-- <h2 class="text-xl font-bold mb-4">Filters</h2> -->
  
    <div class="mb-4 mt-10 ml-4 mr-4">
      <label for="price-range" class="block text-sm font-medium text-gray-700">Price Range</label>
      <input type="range" min="0" max="80000" step="10" bind:value={$filterStore.minPrice} class="w-full mt-2" />
      <input type="range" min="0" max="80000" step="10" bind:value={$filterStore.maxPrice} class="w-full mt-2" />
      <div class="flex justify-between text-sm">
        <span>{$filterStore.minPrice}</span>
        <span>{$filterStore.maxPrice}</span>
      </div>
    </div>

    
    <div class="mb-4 ml-4 mr-4" >
      <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
      <select bind:value={$filterStore.category} class="w-full p-2 mt-2 border rounded">
        <option value="all">All</option>
        <option value="Head Phone">Head Phones</option>
        <option value="Ear Buds">Ear Buds</option>
        <option value="Wireless Speaker">Wireless Speaker</option>
      </select>
    </div>

    <div class="mb-4 ml-4  mr-4">
      <label for="color" class="block text-sm font-medium text-gray-700">Color</label>
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

  <div class="w-full sm:w-3/4 p-4 ">
    <h2 class="text-xl font-bold mb-4">Product List</h2>
{#if $filteredProducts.length>0}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each $filteredProducts as product}
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
    </div>{/if}
  </div>
</main>
