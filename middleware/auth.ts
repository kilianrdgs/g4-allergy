export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const authToken: String = localStorage.getItem("Authorization") || "";
    console.log(authToken);
    fetch(`http://localhost:3001/isConnected`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data: any) => {
        if (
          (to.path === "/" ||
            to.path === "/profil" || to.path === "/formulaire") &&
          data !== true
        ) {
          navigateTo("/connexion"); 
        }
      });
  }
});
