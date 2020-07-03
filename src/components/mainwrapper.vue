<template>
    <div class="main-container">

        <div class="leftSection">
            <app-sideNav></app-sideNav>

        </div>
        <div class="rightSection px-6 bg-gray-custom">
            <app-topNav></app-topNav>
            <app-mainWrapper></app-mainWrapper>
        </div>

    </div>

</template>
<script>
import sideNav from "../components/sidemenu";
import topNav from "../components/topmenu";
import mainWrapper from "../components/mainbody";


export default {
  components: {
    "app-sideNav": sideNav,
    "app-topNav": topNav,
    "app-mainWrapper": mainWrapper

  }
};
</script>