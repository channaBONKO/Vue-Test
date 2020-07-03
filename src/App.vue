<template>
  <div id="app">

  <app-mainApp></app-mainApp>

  </div>
</template>

<script>

import mainApp from "../src/components/mainwrapper";

export default {
    name: "app",
  components: {

    "app-mainApp": mainApp,

  }

}
</script>

