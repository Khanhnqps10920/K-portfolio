<template>
  <div id="root">
    <!-- content -->
    <div v-show="!isShowPreloader">
      <Header />
      <div class="content-wrap">
        <div class="content">
          <HeroBanner />
          <About />
          <Work />
          <Employement />
          <Skills />
          <Education />
          <Contact />
        </div>
      </div>
    </div>

    <!-- preloader -->
    <template v-if="isShowPreloader">
      <Preloader />
    </template>

    <!-- <Footer /> -->
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      isShowPreloader: true,
      timeout: null,
    };
  },
  methods: {
    loader() {
      this.timeout = setTimeout(() => {
        this.isShowPreloader = !this.isShowPreloader;
      }, 2000);
    },
    cleanUpLoader() {
      clearTimeout(this.timeout);

      this.timeout = null;
    },
  },
  mounted() {
    this.loader();
  },
  unmounted() {
    this.cleanUpLoader();
  },
};
</script>
