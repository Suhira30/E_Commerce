<script>
  import front from '$lib/assests/front.png'
  import headphone from '$lib/assests/headphone.jpg'
  import earbuds from '$lib/assests/earbuds.jpg'
  import speaker from '$lib/assests/speaker.jpg'
</script>
<main>
  <div class="grid grid-cols-1 divide-y divide-transparent">
    <div class="h-screen items-center justify-center bg-gradient-to-r from-pink-500 to-purple-400 text-white grid grid-cols-6">
        <div class="h-screen col-span-6 md:col-span-3  flex flex-col items-center justify-center ">
          <h1 class="text-6xl font-bold ml-20 mr-20">You have reached the right sales sight</h1>
          <p class="text-xs sm:text-sm md:text-xs lg:text-sm ml-5 mr-5 sm:ml-10 sm:mr-10 md:ml-20 md:mr-20 mt-5 text-center md:text-left">
             Browse our site and find the latest technological models on the market, at the best possible price. Don't be left out of the technological future!
          </p>
          <a href="/product">
            <button class="bg-purple-800 text-lg font-medium py-2 px-6 mt-5 rounded-full hover:bg-purple-100 hover:text-black transition ml-auto">
              <span>Shop Here !</span>
            </button>
          </a>
        </div>
        <div class="h-screen col-span-6 md:col-span-3 flex items-center justify-center to-#983D47-300">
            <img src={front} alt="" class="w-100 h-full object-cover hidden md:block">
        </div>
      </div>


      <div class="text-center p-6 h-screen">
        <h1 class="text-purple-800 text-2xl sm:text-3xl md:text-4xl mb-4 font-bold">Our Products</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">

          <div class="rounded-lg shadow-lg flex flex-col h-full">
            <div class="h-48 sm:h-56 md:h-64">
              <img
                src={headphone}
                alt="Product 1"
                class="object-cover w-full h-full rounded-t-lg"
              />
            </div>
            <div class="flex-grow p-4">
              <h2 class="text-lg sm:text-base md:text-lg font-bold text-gray-800 px-4">Headphone</h2>
              <p class="text-sm sm:text-base md:text-lg text-gray-600 px-6 text-justify leading-relaxed">
                Unleash the power of premium sound with Headphones.
                Designed for audiophiles and everyday listeners alike, these
                headphones deliver exceptional sound quality, from rich bass to
                crisp highs. Whether you're enjoying music, gaming, or making calls,
                you’ll experience crystal-clear audio and immersive soundscapes.
              </p>
            </div>
          </div>
      
          <div class="rounded-lg shadow-lg flex flex-col h-full">
            <div class="h-48 sm:h-56 md:h-64">
              <img
                src={earbuds}
                alt="Ear buds"
                class="object-cover w-full h-full rounded-t-lg"
              />
            </div>
            <div class="flex-grow p-4">
              <h2 class="text-lg sm:text-base md:text-lg font-bold text-gray-800 px-4">Earbuds</h2>
              <p class="text-sm sm:text-base md:text-lg text-gray-600 px-6 text-justify leading-relaxed">
                Immerse yourself in premium sound quality with Earbuds.
                Whether you're working out, commuting, or relaxing, these earbuds deliver
                crystal-clear audio and deep bass, making every moment an auditory delight.
                Designed for comfort, they fit snugly in your ears and stay securely in place,
                even during intense movement.
              </p>
            </div>
          </div>
      
          <div class="rounded-lg shadow-lg flex flex-col h-full">
            <div class="h-48 sm:h-56 md:h-64">
              <img
                src={speaker}
                alt="Product 3"
                class="object-cover w-full h-full rounded-t-lg"
              />
            </div>
            <div class="flex-grow p-4">
              <h2 class="text-lg sm:text-base md:text-lg font-bold text-gray-800 px-4">Wireless Speaker</h2>
              <p class="text-sm sm:text-base md:text-lg text-gray-600 px-6 text-justify leading-relaxed">
                Take your music wherever you go with the Wireless Speaker.
                Engineered to deliver rich, full-bodied sound with impressive bass,
                this portable speaker brings your tunes to life, whether you're at a party,
                on a hike, or just relaxing at home. With advanced Bluetooth technology and
                a sleek design, the Wireless Speaker is your perfect companion for any occasion.
              </p>
            </div>
          </div>
        </div>
      </div>
      
  </div>
</main>

<style lang="postcss">
  :global(html) {
    background-color: salate-50;
  }
</style>
