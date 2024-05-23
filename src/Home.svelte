<script>
  import windows_bg from "./assets/windows-xp-bg.jpeg";
  import win_xp_logo from "./assets/win_xp_logo.png";
  import pc from "./assets/computer.png";

  let clicked = false;
  function handleClick() {
    clicked = !clicked;
    console.log(clicked);
  }
</script>

<div class="w-screen h-screen overflow-y-hidden">
  <img
    src={windows_bg}
    alt="Windows Background"
    class="w-full h-full object-cover"
  />
  <div
    class="w-full absolute bottom-0 h-[5%] bg-gradient-to-b from-[#3168D5] to-[#4993E6] pt-[3px]"
  >
    <div
      class="h-full w-full bg-gradient-to-b from-[#235CD9] to-[#2663E0]"
    ></div>
    <div
      class="w-[110px] h-full absolute bottom-0 left-0 bg-gradient-to-br hover:bg-white from-[#337634] to-[#48AC48] rounded-e-xl"
    >
      <button
        class="ml-2 h-9 w-9 mt-[2px] px-1 rounded inline-flex items-center text-white italic font-semibold"
      >
        <img src={win_xp_logo} alt="Windows Logo" class="mr-2" />
        Start
      </button>
    </div>
  </div>
  <button
    class="absolute top-10 left-5 w-22 h-12 flex flex-col justify-center items-center
    object-contain cursor-pointer"
    on:click={handleClick}
    on:dblclick={() => console.log("Hello there")}
  >
    <img src={pc} alt="My Computer" class="w-12 h-12" />
    <p
      class={`w-full text-xs p-1 text-white ${clicked ? "bg-[#004E98]" : "bg-transparent"}`}
    >
      My Computer
    </p>
  </button>
</div>
