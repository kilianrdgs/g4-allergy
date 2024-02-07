<template>
   <div>
     <h1>Connexion</h1>
     <form @submit.prevent="connexion">
       <div>
         <label for="email">Email:</label>
         <input type="email" id="email" v-model="email" required>
       </div>
       <div>
         <label for="password">Mot de passe:</label>
         <input type="password" id="password" v-model="password" required>
       </div>
       <button type="submit">Se connecter</button>
     </form>
   </div>
 </template>
 
 <script>
 export default {
   name: "Connexion",
   data() {
     return {
       email: "",
       password: "",
     };
   },
   methods: {
  async connexion() {
    try {
      console.log(this.email)
      console.log(this.password)
      const response = await fetch('http://localhost:3001/connexion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la connexion');
      }

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.error('Erreur lors de la connexion:', error.message);
    }
  },
},

 };
 </script>
 
 <style scoped>
 </style>
 