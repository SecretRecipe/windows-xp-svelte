<script>
  import { onMount } from "svelte";
  import WelcomeDialog from './WelcomeDialog.svelte'; // Import the dialog component
  import windows_bg from "../assets/windows-xp-bg.webp";
  import win_xp_logo from "../assets/win_xp_logo.webp";
  import pc from "../assets/computer.webp";
  import click_mp3 from "../assets/sounds/click_sound.mp3";
  import { Sound } from "svelte-sound";
  import { showStart } from "../stores";
  import outlook from "../assets/outlook.png";

  let clicked = false;
  let clickedOutlook = false;
  const click_sound = new Sound(click_mp3);

  let time = new Date();
  $: hours = time.getHours();
  $: minutes = time.getMinutes().toString().padStart(2, "0");

  let clickedStartButton = false;
  let StartMenuComponent = null;

  let showWelcomeDialog = true; // Control visibility of the welcome dialog
  let gifPath = '/astro.gif'; // Path to the GIF in the same folder

  async function handleStart(event) {
    if (!StartMenuComponent) {
      const module = await import("../components/StartMenu.svelte");
      StartMenuComponent = module.default;
    }
    clickedStartButton = true;
    showStart.update((value) => !value);
    event.stopPropagation();
  }

  function handleClick() {
    clicked = !clicked;
    clickedOutlook = false;
  }

  function handleOutlookClick() {
    clickedOutlook = !clickedOutlook;
    clicked = false;
  }

  function updateTime() {
    time = new Date();
  }

  function handleOutsideClick(event) {
    const startMenu = document.querySelector(".start-menu-wrapper");
    const startButton = document.querySelector(".start-button");

    if (startMenu && !startMenu.contains(event.target) && startButton && !startButton.contains(event.target)) {
      showStart.set(false);
    }

    clickedStartButton = false;
  }

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
  <div
    class="absolute top-24 left-5 h-12 contain flex flex-col justify-center items-center object-contain"
  >
    <button
      class="contain flex flex-col justify-center items-center object-contain cursor-pointer py-6"
      on:click={handleClick}
    >
      <img src={pc} alt="PC Icon" class="w-20 h-20" />
      <p class="text-white text-xs">My Computer</p>
    </button>
    <button
      class="contain flex flex-col justify-center items-center object-contain cursor-pointer py-6"
      on:click={handleOutlookClick}
    >
      <img src={outlook} alt="Outlook Icon" class="w-20 h-20" />
      <p class="text-white text-xs">Outlook</p>
    </button>
  </div>
  {#if StartMenuComponent}
    <svelte:component this={StartMenuComponent} />
  {/if}
  {#if showWelcomeDialog}
    <WelcomeDialog visible={showWelcomeDialog} gifSrc={gifPath} />
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
