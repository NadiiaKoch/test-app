<template>
  <header>
    <nav>
      <div class="logo">
        <a href="/">Готелі</a>
      </div>
      <div class="search">
        <input type="text" v-model="searchQuery" placeholder="Пошук готелю">
        <button @click="searchHotels">Шукати</button>
      </div>
      <div class="favorites">
        <router-link to="/favorites">Мої фаворити</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    searchHotels() {
      // тут можна написати логіку для пошуку готелів за searchQuery
    },
  },
};
</script>

<style scoped>
header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}

.logo a {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
}

.search input[type="text"] {
  padding: 8px;
  border: none;
  border-radius: 4px;
  margin-right: 8px;
  font-size: 16px;
}

.search button {
  background-color: #008cba;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
}

.favorites {
  font-size: 16px;
  font-weight: bold;
}

.favorites a {
  color: #333;
  text-decoration: none;
}

.favorites a:hover {
  text-decoration: underline;
}
</style>
