export default defineNuxtRouteMiddleware((to, from) => {
  const isLogged: Boolean = true;

  if (
    (to.path === "/" || to.path === "/liste" || to.path === "/profil") &&
    !isLogged
  ) {
    return navigateTo("/connexion");
  }

  if (to.path == "/" && isLogged) {
    return navigateTo("/liste");
  }

});
