<template>
  <footer class="bg-gray-800 text-white">
    <div class="container mx-auto py-8">
      <div class="flex flex-col md:flex-row justify-between">
        <div class="mb-6 md:mb-0">
          <h2 class="text-xl font-semibold mb-2">Liens légaux</h2>
          <router-link to="/cgu" class="text-gray-300 hover:text-white transition">Conditions Générales d'Utilisation</router-link>
          <router-link to="/cgv" class="text-gray-300 hover:text-white transition">Conditions Générales de Vente</router-link>
          <!-- Ajoute d'autres liens légaux ici si nécessaire -->
        </div>
        <div class="mb-6 md:mb-0">
          <h2 class="text-xl font-semibold mb-2">Contact</h2>
          <p class="text-gray-300">{{ phoneNumber }}</p>
          <p class="text-gray-300">{{ guestHouseName }}</p>
        </div>
        <div class="flex space-x-4">
          <a href="https://www.facebook.com/profile.php?id=100083219942218" target="_blank" rel="noopener noreferrer">
            <img src="../assets/facebook-icon.png" alt="Facebook" class="w-6 h-6 opacity-70 hover:opacity-100 transition" />
          </a>
          <a href="https://fr.airbnb.be/rooms/937663970777157078?guests=1&adults=1&s=67&unique_share_id=f21f6a4e-61a9-49a7-97c1-04161f40bd54" target="_blank" rel="noopener noreferrer">
            <img src="../assets/airbnb-icon.png" alt="Airbnb" class="w-6 h-6 opacity-70 hover:opacity-100 transition" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber: "06.38.51.45.22",
      guestHouseName: "La Belle Etoile"
    };
  }
};
</script>

<style scoped>
/* Aucun style spécifique nécessaire ici, car les classes Tailwind CSS sont utilisées */
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 5px 0;
  z-index: 1000; /* Assure-toi que le footer est au-dessus du reste du contenu */
}
</style>
