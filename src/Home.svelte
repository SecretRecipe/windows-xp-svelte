<script>
  import windows_bg from "./assets/windows-xp-bg.jpeg";
  import win_xp_logo from "./assets/win_xp_logo.png";
  import pc from "./assets/computer.png";
  import click_mp3 from "./assets/click_sound.mp3";
  import { Sound } from "svelte-sound";
  import FileView from "./components/FileView.svelte";
  import { show } from "./stores";
  let clicked = false;
  const click_sound = new Sound(click_mp3);

  let time = new Date();
  $: hours = time.getHours();
  $: minutes = time.getMinutes();

  function handleClick() {
    clicked = !clicked;
  }
  function doubleClick() {
    click_sound.play();
    show.update((currentValue) => !currentValue);
  }
</script>

<div class="w-screen h-screen overflow-y-hidden">
  <img
    src={windows_bg}
    alt="Windows Background"
    class="w-full h-full object-cover"
  />
  <div
    class="w-full absolute bottom-0 h-[40px] bg-gradient-to-b from-[#3168D5] to-[#4993E6] pt-[3px]"
  >
    <div
      class="h-full w-full bg-gradient-to-b from-[#235CD9] to-[#2663E0]"
    ></div>
    <div class="styled-div">
      <button
        class="ml-2 h-9 w-9 mt-[2px] pb-[2px] px-1 rounded inline-flex items-center text-white italic font-semibold"
        on:click={() => console.log("pressed on start")}
      >
        <img src={win_xp_logo} alt="Windows Logo" class="mr-2" />
        Start
      </button>
    </div>
  </div>
  <div
    class="absolute bottom-0 right-0 h-[40px] w-24 bg-[#0F8EEA] flex items-center justify-end border-s-[1px]
    border-black"
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
  <FileView />
</div>

<style>
  .styled-div {
    width: 110px;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(to bottom right, #337634, #48ac48);
    border-bottom-right-radius: 0.75rem; /* Adjust radius as per your need */
    border-top-right-radius: 0.75rem;
    transition: background 0.3s;
  }
  .styled-div:hover {
    background: linear-gradient(to bottom right, #48ac48, #6fd16f);
  }
</style>
