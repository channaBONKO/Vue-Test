<template>
  <div class="sideNav p-6">
    <div class="logo mb-10">
      <img src="@/assets/img/Logo-Test.png" alt="LogoTest" />
    </div>

    <ul class="leading-10">
      <li>
        <router-link to="/" class="hover:text-gray-600"> <i class="fa fa-database pr-3" aria-hidden="true"></i> Home</router-link>
      </li>
      <li>
        <router-link to="/about" class="hover:text-gray-600"><i class="fa fa-deaf pr-3" aria-hidden="true"></i> About</router-link>
      </li>
      <li>
        <router-link to="/settings" class="hover:text-gray-600"><i class="fa fa-cog pr-3" aria-hidden="true"></i> Settings</router-link>
      </li>
      <li>
        <router-link to="/endowment" class="hover:text-gray-600"><i class="fa fa-gift pr-3" aria-hidden="true"></i> Endowment </router-link>
      </li>
      <li>
        <router-link to="/test" class="hover:text-gray-600"><i class="fa fa-life-ring pr-3" aria-hidden="true"></i> Test vue</router-link>
      </li>
      <li>
        <router-link to="/" class="hover:text-gray-600"><i class="fa fa-music pr-3" aria-hidden="true"></i> User Profile</router-link>
      </li>
    </ul>

<p class="uppercase text-xs py-8">Support</p>

    <ul class="leading-10">
      <li>
        <router-link to="/" class="hover:text-gray-600"> <i class="fa fa-database pr-3" aria-hidden="true"></i> Endowment mobile</router-link>
      </li>
    </ul>

      <div class="nav mt-16">
        <img class="nav__img" src="@/assets/img/bottomImg.png" alt="Nav img" />
      </div>

      <div class="mt-16 flex">
        <span class="margin-r mr-2">Sign out</span>
        <label class="el-switch">
          <input type="checkbox" name="switch" />
          <span class="el-switch-style"></span>
        </label>
      </div>

  </div>
</template>
<script>
export default {};
</script>

<style scoped>
/*switch component*/
.el-switch,
.el-switch-style,
.el-switch-style:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.el-switch {
  display: inline-block;
  font-size: 100%;
  height: 1.6em;
  position: relative;
}
.el-switch .el-switch-style {
  height: 1.6em;
  left: 0;
  background: #c0ccda;
  -webkit-border-radius: 0.8em;
  border-radius: 0.8em;
  display: inline-block;
  position: relative;
  top: 0;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  width: 3em;
  cursor: pointer;
}
.el-switch .el-switch-style:before {
  display: block;
  content: "";
  height: 1.4em;
  position: absolute;
  width: 1.4em;
  background-color: #fff;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  left: 0.1em;
  top: 0.1em;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.el-switch > input[type="checkbox"] {
  display: none;
}
.el-switch > input[type="checkbox"][disabled] + .el-switch-style {
  cursor: not-allowed;
  background-color: #d3dce6;
}
.el-switch > input[type="checkbox"]:checked + .el-switch-style {
  background-color: #20a0ff;
}
.el-switch > input[type="checkbox"]:checked + .el-switch-style:before {
  left: 50%;
}
.el-switch > input[type="checkbox"]:checked[disabled] + .el-switch-style {
  background-color: #b0d7f5;
}
/*define size*/
.el-radio.el-radio-sm,
.el-checkbox.el-checkbox-sm,
.el-switch.el-switch-sm {
  font-size: 85%;
}
.el-radio.el-radio-lg,
.el-checkbox.el-checkbox-lg,
.el-switch.el-switch-lg {
  font-size: 125%;
}

</style>