<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
<div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px last:mr-0 text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 block leading-normal cursor-pointer" v-on:click="toggleTabs(1)" v-bind:class="{'text-gray-600 bg-white': openTab !== 1, 'text-gray-900 border-b-2 border-blue-600': openTab === 1}">
            Profile
          </a>
        </li>
        <li class="-mb-px last:mr-0 text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 block leading-normal cursor-pointer" v-on:click="toggleTabs(2)" v-bind:class="{'text-gray-600 bg-white': openTab !== 2, 'text-gray-900 border-b-2 border-blue-600': openTab === 2}">
            Settings
          </a>
        </li>
        <li class="-mb-px last:mr-0 text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 block leading-normal cursor-pointer" v-on:click="toggleTabs(3)" v-bind:class="{'text-gray-600 bg-white': openTab !== 3, 'text-gray-900 border-b-2 border-blue-600': openTab === 3}">
            Options
          </a>
        </li>
      </ul>
      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
        <table class="table-auto w-full">
          <thead>
            <tr>
              <th class="border-b-2 py-2 text-left">Investmant Fund</th>
              <th class="border-b-2 py-2 text-left">Code</th>
              <th class="border-b-2 py-2 text-left">Investmant Income Clearing</th>
              <th class="border-b-2 py-2 text-left">Endowment Balance Clearing</th>
              <th class="border-b-2 py-2 text-right">Status</th>
            </tr>
          </thead>
          <tbody class="leading-10">
            <tr>
              <td class="border-b-2 py-2 text-left">John Doe</td>
              <td class="border-b-2 py-2 text-left">John@gmail.com</td>
              <td class="border-b-2 py-2 text-left">450-000</td>
              <td class="border-b-2 py-2 text-left">450-000</td>
              <td class="border-b-2 py-2 text-right">Active</td>
            </tr>
            <tr>
              <td class="border-b-2 py-2 text-left">John Doe</td>
              <td class="border-b-2 py-2 text-left">John@gmail.com</td>
              <td class="border-b-2 py-2 text-left">450-000</td>
              <td class="border-b-2 py-2 text-left">450-000</td>
              <td class="border-b-2 py-2 text-right">Active</td>
            </tr>
            <tr>
              <td class="border-b-2 py-2 text-left">John Doe</td>
              <td class="border-b-2 py-2 text-left">John@gmail.com</td>
              <td class="border-b-2 py-2 text-left">450-000</td>
              <td class="border-b-2 py-2 text-left">450-000</td>
              <td class="border-b-2 py-2 text-right">Active</td>
            </tr>
            <tr>
              <td class="border-b-2 py-2 text-left">John Doe</td>
              <td class="border-b-2 py-2 text-left">John@gmail.com</td>
              <td class="border-b-2 py-2 text-left">450-000</td>
              <td class="border-b-2 py-2 text-left">450-000</td>
              <td class="border-b-2 py-2 text-right">Active</td>
            </tr>
            <tr>
              <td class="border-b-2 py-2 text-left">John Doe</td>
              <td class="border-b-2 py-2 text-left">John@gmail.com</td>
              <td class="border-b-2 py-2 text-left">450-000</td>
              <td class="border-b-2 py-2 text-left">450-000</td>
              <td class="border-b-2 py-2 text-right">Active</td>
            </tr>
            <tr>
              <td class="border-b-2 py-2 text-left">John Doe</td>
              <td class="border-b-2 py-2 text-left">John@gmail.com</td>
              <td class="border-b-2 py-2 text-left">450-000</td>
              <td class="border-b-2 py-2 text-left">450-000</td>
              <td class="border-b-2 py-2 text-right">Active</td>
            </tr>
            <tr>
              <td class="border-b-2 py-2 text-left">John Doe</td>
              <td class="border-b-2 py-2 text-left">John@gmail.com</td>
              <td class="border-b-2 py-2 text-left">450-000</td>
              <td class="border-b-2 py-2 text-left">450-000</td>
              <td class="border-b-2 py-2 text-right">Active</td>
            </tr>
            <tr>
              <td class="border-b-2 py-2 text-left">John Doe</td>
              <td class="border-b-2 py-2 text-left">John@gmail.com</td>
              <td class="border-b-2 py-2 text-left">450-000</td>
              <td class="border-b-2 py-2 text-left">450-000</td>
              <td class="border-b-2 py-2 text-right">Active</td>
            </tr>
            <tr>
              <td class="border-b-2 py-2 text-left">John Doe</td>
              <td class="border-b-2 py-2 text-left">John@gmail.com</td>
              <td class="border-b-2 py-2 text-left">450-000</td>
              <td class="border-b-2 py-2 text-left">450-000</td>
              <td class="border-b-2 py-2 text-right">Active</td>
            </tr>
            <tr>
              <td class="border-b-2 py-2 text-left">John Doe</td>
              <td class="border-b-2 py-2 text-left">John@gmail.com</td>
              <td class="border-b-2 py-2 text-left">450-000</td>
              <td class="border-b-2 py-2 text-left">450-000</td>
              <td class="border-b-2 py-2 text-right">Active</td>
            </tr>
            <tr>
              <td class="border-b-2 py-2 text-left">John Doe</td>
              <td class="border-b-2 py-2 text-left">John@gmail.com</td>
              <td class="border-b-2 py-2 text-left">450-000</td>
              <td class="border-b-2 py-2 text-left">450-000</td>
              <td class="border-b-2 py-2 text-right">Active</td>
            </tr>
            <tr>
              <td class="border-b-2 py-2 text-left">John Doe</td>
              <td class="border-b-2 py-2 text-left">John@gmail.com</td>
              <td class="border-b-2 py-2 text-left">450-000</td>
              <td class="border-b-2 py-2 text-left">450-000</td>
              <td class="border-b-2 py-2 text-right">Active</td>
            </tr>
          </tbody>
        </table>
            </div>
            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
              <p>
                Completely synergize resource taxing relationships via
                premier niche markets. Professionally cultivate one-to-one
                customer service with robust ideas.
                <br />
                <br />
                Dynamically innovate resource-leveling customer service for
                state of the art customer service.
              </p>
            </div>
            <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
              <p>
                Efficiently unleash cross-media information without
                cross-media value. Quickly maximize timely deliverables for
                real-time schemas.
                <br />
                <br />
                Dramatically maintain clicks-and-mortar solutions
                without functional solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'Home',
//   components: {
//     HelloWorld
//   }
// }


export default {
  name: "pink-tabs",
  data() {
    return {
      openTab: 1
    }
  },
  methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
  }
}



</script>
