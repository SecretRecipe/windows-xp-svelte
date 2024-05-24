<script>
  import Loading from "./Loading.svelte";
  import { Router, Route } from "svelte-routing";
  import LoginScreen from "./LoginScreen.svelte";
  import Home from "./Home.svelte";

  export let url = "";
</script>

<Router {url}>
  <Route path="/" component={Loading} />
  <Route path="/login" component={LoginScreen} />
  <Route path="/home" component={Home} />
</Router>
