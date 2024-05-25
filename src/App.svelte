<script>
  import Loading from "./Loading.svelte";
  import { Router, Route } from "svelte-routing";

  // Use dynamic imports to lazy load components
  const LoginScreen = () => import("./LoginScreen.svelte");
  const Home = () => import("./Home.svelte");

  export let url = "";
</script>

<Router {url}>
  <!-- Use a loading component while the dynamic import is loading -->
  <Route path="/" component={Loading} />

  <!-- Use the lazy-loaded components -->
  <Route path="/login" component={LoginScreen} />
  <Route path="/home" component={Home} />
</Router>
