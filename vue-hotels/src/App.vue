<script>
import { loadData } from './api/hotelsfetch'

export default {
  data() {
    return {
      hotels: [],
      searchQuery: '',
      favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
      inFavorites: false,
      isLoading: false,
      isError: false,
    }
  },

  // computed: {
  //   findHotel() {
  //     return this.inFavorites
  //       ? Boolean(this.favorites.find((el) => el.id === hotel.id))
  //       : this.todos
  //   }
  // },

  mounted() {
    this.isLoading = true;
    console.log('this.isLoading', this.isLoading);
    loadData('New York')
      .then((res) => {
        this.hotels.push(...res.data.propertySearch.properties);
        console.log('hotels', this.hotelsNew);
      })
      .catch(() => (
        this.isError = true
      ))
      .finally(() => {
        this.isLoading = false;
        console.log('this.isLoading', this.isLoading)
      });
  },

  methods: {
    searchHotels(searchQuery) {

      loadData(searchQuery)
      .then((res) => {
        this.hotels.push(...res.data.propertySearch.properties);
      })
      .catch(() => (
        this.isError = true
      ))
      .finally(() => {
        this.isLoading = false;
        console.log('this.isLoading', this.isLoading)
      });

      this.searchQuery = '';
    },


    addToFavorites(hotel) {
      this.favorites.push(hotel);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    },

    removeHotel(fav) {
      this.favorites = this.favorites.filter((favorite) => favorite !== fav);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
  },
}
</script>

<template>
  <div class="page">
    <div class="page-content">
      <div class="box">
        <div class="field">
          <label htmlFor="search-query" class="label">
            <p class="title is-8 mb-4">Hotels</p>
          </label>

          <div class="control columns is-variable is-3">
            <input type="text" id="search-query" class="input column is-four-fifths mr-2" placeholder="Type search word"  v-model="searchQuery" />
            <button class="button column is-primary is-normal auto is-responsive is-centered" @click="searchHotels(searchQuery)">Search</button>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div :class="`container is-flex justify-content: space-around ${isLoading ? 'loader' : 'is-hidden'}`"></div>
      <div class="movies">
        <div class="card" v-for="hotel of hotels" :key="hotel.id">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
              :src=hotel.propertyImage.image.url
              alt="Hotel image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ hotel.name }}</p>
              </div>
            </div>

            <div class="content mt-4">
              <p class="subtitle is-6">Price per room {{ hotel.price.lead.formatted }}</p>

              <button class="button is-primary is-outlined is-small" @click="addToFavorites(hotel)">
                Add to Favorites
              </button>
              <button class="button is-small is-danger" @click="removeHotel(hotel)">Delete</button>
            </div>
          </div>
        </div>
      </div>
      </div>

    </div>

    <div class="sidebar">
      <p class="title is-8">Favorites</p>
      
      <ul>
        <li v-for="fav of favorites" :key="fav.id">
          <div class="box">
            <p class="title is-4">{{ fav.name }}</p>
            <button class="button" @click="removeHotel(fav)">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
</style>
