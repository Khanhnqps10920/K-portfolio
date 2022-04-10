<template>
  <div id="root">
    <!-- content -->
    <template v-if="!isShowPreloader">
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
    </template>

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
    };
  },
  methods: {
    loader() {
      document.onreadystatechange = () => {
        console.log(document.readyState);
        if (document.readyState === "complete") {
          this.isShowPreloader = false;
        }
      };
    },
  },
  mounted() {
    this.loader();
  },
};
</script>
