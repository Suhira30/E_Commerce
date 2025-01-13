<script>
import front from '$lib/assests/front.png'
</script>
<main>
  <div class="grid grid-cols-1 divide-y divide-transparent">
    <div class="h-screen items-center justify-center text-white grid grid-cols-6">
        <div class="h-screen col-span-3 bg-gradient-to-r from-pink-500 to-purple-400 flex flex-col items-center justify-center">
          <h1 class="text-7xl font-bold ml-16">Find Your Beats Studio</h1>
          <a href="/product" class="mt-4">
            <button class="bg-blue-600 text-lg font-medium py-2 px-4 rounded hover:bg-blue-700 transition">
              Click
            </button>
          </a>
        </div>
        <div class="h-screen col-span-3 flex items-center justify-center  bg-gradient-to-r from-purple-400 to-#983D47-300">
            <img src={front}  class="w-100 h-full object-cover scroll-px-0 ml-0">
        </div>
      </div>
    <!-- <div class="h-screen text-2xl flex items-center justify-center">Our Products</div> -->
    <!-- <div class="h-screen text-lg flex items-center justify-center">Footer</div> -->
  </div>
</main>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
