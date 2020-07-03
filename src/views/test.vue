<template>
    <div id="apps">
  <h2>Channa:</h2>
 
  <div>
    <div v-if="element == 'check' || element == 'both'">
        <lable> <input type="checkbox" />  Checkbox element </lable>
    </div>
    <div v-if="element == 'radio' || element == 'both'">
        <lable> <input type="checkbox" />  Radio button element </lable>
    </div>
   
    <input type="text" v-model="type" class="border mt-10">
    <button @click="changeType">Change type</button>
    
  </div>
</div>
</template>
<script>
export default {


  data() {
    return {
        element:'',
        type:'',
    }
  },

  methods: {
    changeType() {
    
        this.element = this.type;
    }
  }


}
</script>