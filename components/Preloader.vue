<template>
  <div id="preloader">
    <div id="logo">K.</div>
  </div>
</template>

<script>
export default {
  name: "PreLoader",
};
</script>

<style>
#preloader {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#preloader #logo {
  font-size: 80px;
}
</style>