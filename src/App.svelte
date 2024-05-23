<script>
  import Loading from "./Loading.svelte";
  import { Router, Link, Route, navigate } from "svelte-routing";
  import LoginScreen from "./LoginScreen.svelte";
  import Home from "./Home.svelte";

  export let url = "";
  console.log("start nav");
  setTimeout(() => {
    navigate("/login");
  }, 2000);
</script>

<Router {url}>
  <Route path="/" component={Loading} />
  <Route path="/login" component={LoginScreen} />
  <Route path="/home" component={Home} />
</Router>
