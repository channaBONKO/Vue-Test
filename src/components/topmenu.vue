<template>

<div class="menuWrapper">

<div class="topMenu">
<div class="h-12 flex items-center test border-b border-gray-400">
    <router-link to="/">
      <div class="rounded-full bg-blue-400 h-4 w-4 flex items-center justify-center"></div>
    </router-link>
    <span>
      <strong class="mx-3 text-gray-500">></strong>
    </span>
    <router-link to="/">
    <small> Link One </small>
    </router-link>
    <span>
      <strong class="mx-3 text-gray-700">></strong>
    </span>
    <router-link to="/" class>
    <small> Link Two </small>
    </router-link>

<div class="userLoginSection flex ml-auto items-center">

<p class="px-4">Welcom back <span>Channa </span> </p>

<div>
    <img src="../assets/img/userimg.png" alt="UserImg" class="userImg">
</div>

</div>

  </div>
</div>

<div class="bottomMenu flex">

<div class="headertitle flex items-center my-4">
<div class="rounded-full h-10 w-10 flex items-center justify-center bg-indigo-600 text-white shadow-md">$</div>
<h3 class="font-semibold pl-4">Title like investmant fund</h3>
</div>


<div class="topMenuActions flex items-center ml-auto">

    <div class="pt-2 relative text-gray-600 mx-4">
        <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-full text-sm focus:outline-none"
          type="search" name="search" placeholder="Search by name">
        <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
          <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
            viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
            width="512px" height="512px">
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </div>

<div class="flex flex-wrap">
    <div class="w-full text-center">
      <button ref="btnRef" v-on:click="togglePopover()" class="rounded-full h-10 w-10 flex items-center justify-center bg-gray-500 text-white shadow mr-4 hover:bg-indigo-600 focus:bg-indigo-600" type="button" style="transition:all .15s ease">
      $</button>
      <div ref="popoverRef" v-bind:class="{'hidden': !popoverShow, 'block': popoverShow}" class="bg-indigo-600 border-0 mt-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg">
        <div class="flex p-6">
         <div class="flex flex-col text-white pr-4">
           <small> Total Principal</small>
           <span class="text-3xl">$19,000.00</span>
         </div>
           <div class="flex flex-col text-white">
           <small> Total Principal</small>
           <span class="text-3xl">$565.00</span>
         </div>
        </div>
      </div>
    </div>
  </div>
 <button class="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded font-normal cut-btn uppercase outline-none">New Endowment</button>

</div>


</div>




</div>


</template>
<script>

import Popper from "popper.js";

export default {
  name: "bottom-pink-popover",
  data() {
    return {
      popoverShow: false
    }
  },
  methods: {
    togglePopover: function(){
      if(this.popoverShow){
        this.popoverShow = false;
      } else {
        this.popoverShow = true;
        new Popper(this.$refs.btnRef, this.$refs.popoverRef, {
          placement: "bottom"
        });
      }
    }
  }
}
</script>