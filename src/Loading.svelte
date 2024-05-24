<script>
  import windows_logo from "./assets/windows_xp.png";
  import { onMount } from "svelte";
  import { Router, Link, Route, navigate } from "svelte-routing";
  onMount(() => {
    console.log("nav");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  });
</script>

<div class="w-screen h-screen bg-black flex justify-center items-center">
  <div class="w-[400px] h-[300px]">
    <img src={windows_logo} alt="Windows Logo" class="w-full h-full" />
    <div class="container">
      {#each Array(3) as _, index}
        <div class="box"></div>
      {/each}
    </div>
  </div>
  <h2
    class="absolute bottom-[10%] right-[10%] text-white text-2xl font-bold italic"
  >
    Microsoft
  </h2>
</div>

<style>
  @import url("https://fonts.googleapis.com/css?family=Roboto:100,300,700");
  .container {
    width: 200px;
    height: 20px;
    border: 2px solid #b2b2b2;
    border-radius: 7px;
    margin: 0 auto;
    padding: 2px 1px;
    overflow: hidden;
    font-size: 0;
    margin-top: 20px;
  }
  .box {
    width: 9px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      #2838c7 0%,
      #5979ef 17%,
      #869ef3 32%,
      #869ef3 45%,
      #5979ef 59%,
      #2838c7 100%
    );
    display: inline-block;
    margin-right: 2px;
    animation: loader 2s infinite;
    animation-timing-function: linear;
  }
  @keyframes loader {
    0% {
      transform: translate(-30px);
    }
    100% {
      transform: translate(200px);
    }
  }
</style>
