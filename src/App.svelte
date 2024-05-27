<script>
  import { Router, Route } from "svelte-routing";

  // Use dynamic imports to lazy load components
  const LoginScreen = () => import("./routes/LoginScreen.svelte");
  const Home = () => import("./routes/Home.svelte");
  const Loading = () => import("./routes/Loading.svelte");
  export let url = "";
</script>

<Router {url}>
  <!-- Use the lazy-loaded components -->
  <Route path="/" component={Loading} />
  <Route path="/login" component={LoginScreen} />
  <Route path="/home" component={Home} />
</Router>
