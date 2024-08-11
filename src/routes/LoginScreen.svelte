<script>
  import TurnOff from "../assets/turn_off.svelte";
  import windows_xp_logo from "../assets/win_xp_logo.webp";
  import prof_pic from "../assets/github_prof.png";
  import { navigate } from "svelte-routing";
  import { Sound } from "svelte-sound";
  import startup_mp3 from "../assets/sounds/startup_sound.mp3";
  const startup_sound = new Sound(startup_mp3);
  function navigateHome() {
    startup_sound.play();
    navigate("/home");
  }
</script>

<!-- OVERLAY -->
<div
  class="w-screen h-screen bg-gradient-to-br from-[#8AA9EC] from-10% to-20% to-[#5A7EDC]"
>
  <div class="top-0 w-full h-[8%] bg-[#00309C] border-b-2 border-y-white"></div>
  <div class="window w-[80%] text-white grid grid-cols-2 gap-0">
    <!-- LEFT SIDE -->
    <div class="logo relative">
      <div>
        <p class="top">Megahard</p>
        <p class="mid">Windows<span class="span">XP</span></p>
        <p class="bottom">DerpFi Edtion</p>
      </div>
      <img
        src={windows_xp_logo}
        alt="Windows XP Logo"
        class="absolute right-0 top-0 -mt-14 mr-8 w-20 h-20"
      />
    </div>
    <!-- RIGHT SIDE -->
    <button on:click={navigateHome}
      ><div
        class="flex flex-row items-start from-[#00309C] w-[500px] h-[150px] bg-gradient-to-r rounded-lg p-6 hover:cursor-pointer"
      >
        <img
          src={prof_pic}
          alt="prof"
          class="h-24 w-24 rounded-lg border-2 border-yellow-300"
        />
        <div class="flex flex-col items-start ml-4">
          <h1 class="text-2xl font-semibold">DerpFi</h1>
          <h2 class="font-thin mt-1">Logged On</h2>
        </div>
      </div></button
    >
  </div>

  <!-- FOOTER -->
  <div
    class="absolute bottom-0 w-full h-[8%] bg-[#00309C] border-t-2 border-y-orange-500 flex flex-row items-center text-white
    justify-between"
  >
    <div class="flex flex-row">
      <div
        class="ml-10 flex items-center space-x-4 hover:underline hover:underline-offset-4"
      >
        <button
          class="bg-red-500 border-2 h-8 w-8 border-white hover:bg-red-400 text-gray-800 px-1 rounded inline-flex items-center"
          on:click={() => navigate("/")}
        >
          <TurnOff />
        </button>
        <h2 class=" text-white text-2xl hover:cursor-pointer">
          Turn off computer
        </h2>
      </div>
    </div>
    <div class="flex flex-col">
      <h3 class="mr-10 font-light">
        After you log on, you can add or change accounts.
      </h3>
      <h3 class="mr-10 font-light">
        Just go to Control Panel and click User Accounts
      </h3>
    </div>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css?family=Roboto:100,300,700");
  .window {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }
  .logo {
    width: 250px;
    margin: 50px auto;
  }
  .logo p {
    margin: 0;
    padding: 0;
  }
  .logo .top {
    font-size: 16px;
    font-weight: 300;
    line-height: 16px;
    padding-bottom: 10px;
  }
  .top:after {
    content: "\00a9";
    font-size: 10px;
    position: relative;
    top: -5px;
    margin-left: 2px;
  }
  .mid {
    font-size: 46px;
    font-weight: 700;
    line-height: 20px;
  }
  .logo .span {
    font-size: 22px;
    display: inline-block;
    vertical-align: top;
    color: #ff6821;
    margin-top: -36px;
    margin-left: 200px;
  }
  .logo .bottom {
    font-size: 30px;
    font-weight: 300;
    line-height: 30px;
    margin-left: 5px;
  }
</style>
