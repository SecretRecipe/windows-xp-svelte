<script>
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import windows_bg from "../assets/windows-xp-bg.webp";
  import win_xp_logo from "../assets/win_xp_logo.webp";
  import pc from "../assets/computer.png";
  import click_mp3 from "../assets/sounds/click_sound.mp3";
  import { Sound } from "svelte-sound";
  import { show, hide, showStart } from "../stores";
  import StartMenu from "../components/StartMenu.svelte";
  let clicked = false;
  const click_sound = new Sound(click_mp3);

  let time = new Date();
  $: hours = time.getHours();
  $: minutes = time.getMinutes().toString().padStart(2, "0");

  let clickedStartButton = false;
  let FileViewComponent = null;
  let FileExplorerBarComponent = null;

  // Handle Start Button Click
  function handleStart(event) {
    clickedStartButton = true;
    showStart.update((value) => !value);
    event.stopPropagation(); // Prevent the click from propagating to the document
  }

  // Handle My Computer Icon Click
  function handleClick() {
    clicked = !clicked;
  }

  // Handle My Computer Icon Double Click
  async function doubleClick() {
    click_sound.play();
    hide.update(() => true);
    show.update(() => true);

    if (!FileViewComponent) {
      const module = await import("../components/FileView.svelte");
      FileViewComponent = module.default;
    }

    if (!FileExplorerBarComponent) {
      const module = await import("../components/FileExplorerBar.svelte");
      FileExplorerBarComponent = module.default;
    }
  }

  // Update Time Function
  function updateTime() {
    time = new Date();
  }

  // Handle Outside Click
  function handleOutsideClick(event) {
    const startMenu = document.querySelector(".start-menu-wrapper");
    const startButton = document.querySelector(".start-button");

    if (
      startMenu &&
      !startMenu.contains(event.target) &&
      startButton &&
      !startButton.contains(event.target) &&
      get(showStart)
    ) {
      showStart.set(false);
    }

    clickedStartButton = false; // Reset the flag after handling the outside click
  }

  // Mount and Cleanup Functions
  onMount(() => {
    const interval = setInterval(updateTime, 1000);
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      clearInterval(interval);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });
</script>

<div class="w-screen h-screen overflow-y-hidden">
  <img
    src={windows_bg}
    alt="Windows Background"
    class="w-full h-full object-cover pointer-events-none"
  />
  <!-- Footer -->
  <div
    class="absolute bottom-0 w-full h-[36px] bg-gradient-to-b from-[#3168D5] to-[#4993E6]"
  >
    <div
      class="h-full w-full bg-gradient-to-b from-[#235CD9] to-[#2663E0] flex flex-row items-center"
    >
      <!-- Start Button -->
      <div class="styled-div start-button">
        <button
          class="ml-2 h-9 w-9 px-1 rounded inline-flex items-center text-white italic font-semibold"
          on:click={handleStart}
        >
          <img
            src={win_xp_logo}
            alt="Windows Logo"
            class="mr-2 w-6 h-6 object-contain"
          />
          start
        </button>
      </div>
      {#if FileExplorerBarComponent}
        <svelte:component this={FileExplorerBarComponent} />
      {/if}
    </div>
  </div>
  <div
    class="absolute bottom-0 right-0 h-[36px] w-24 bg-[#0F8EEA] flex items-center justify-end border-s-[1px] border-black"
  >
    <p
      class="h-full flex items-center justify-center text-white text-sm font-light pr-4"
    >
      {hours}:{minutes}
    </p>
  </div>
  <button
    class="absolute top-10 left-5 w-22 h-12 flex flex-col justify-end items-center object-contain cursor-pointer"
    on:click={handleClick}
    on:dblclick={doubleClick}
  >
    <img src={pc} alt="My Computer" class="w-12 h-12" />
    <p
      class={`w-full text-xs p-1 text-white ${clicked ? "bg-[#004E98]" : "bg-transparent"}`}
    >
      My Computer
    </p>
  </button>
  {#if FileViewComponent}
    <svelte:component this={FileViewComponent} />
  {/if}
  {#if $showStart}
    <div class="start-menu-wrapper">
      <StartMenu />
    </div>
  {/if}
</div>

<style>
  .styled-div {
    width: 110px;
    height: 100%;
    position: relative;
    bottom: 0;
    left: 0;
    background: linear-gradient(to bottom right, #337634, #48ac48);
    border-bottom-right-radius: 15px;
    border-top-right-radius: 0.45rem;
    transition: background 0.3s;
  }
  .styled-div:hover {
    background: linear-gradient(to bottom right, #48ac48, #6fd16f);
  }
</style>
