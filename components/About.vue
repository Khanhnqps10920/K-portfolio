<template>
  <!--ABOUT-->
  <section id="about" v-animate-on-scroll>
    <div class="row">
      <div
        class="
          col-md-6 col-xs-12
          no-pad
          d-flex
          justify-content-center
          align-items-center
        "
      >
        <div class="bg-about" :style="image" style="filter: grayscale(1)"></div>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12 white-col">
        <div class="row">
          <!--OWL CAROUSEL2-->

          <div class="col-md-12 col-sm-12 col-xs-12 white-col">
            <div class="row">
              <div
                class="
                  col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12
                "
              >
                <div class="wrap-about">
                  <table class="w-content">
                    <tbody>
                      <tr>
                        <td class="title">Name</td>
                        <td class="break">:</td>
                        <td>Khanh Nguyen</td>
                      </tr>
                      <tr>
                        <td class="title">Phone</td>
                        <td class="break">:</td>
                        <td>+84 938494081</td>
                      </tr>
                      <tr>
                        <td class="title">Email</td>
                        <td class="break">:</td>
                        <td>khanhng3009@gmail.com</td>
                      </tr>
                      <tr>
                        <td class="title">Address</td>
                        <td class="break">:</td>
                        <td>Binh Thanh, Ho Chi Minh city</td>
                      </tr>
                      <tr>
                        <td class="title">Skype</td>
                        <td class="break">:</td>
                        <td>live:.cid.7912f9efe08eab0c</td>
                      </tr>
                      <tr>
                        <td class="title">Linkedin</td>
                        <td class="break">:</td>
                        <td>
                          <a
                            href="https://www.linkedin.com/in/khanh-nguyen-0348b0183/"
                            target="_blank"
                            >My Linkedin</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td class="title">Facebook</td>
                        <td class="break">:</td>
                        <td>
                          <a
                            href="https://www.facebook.com/profile.php?id=100004833734488"
                            >My Facebook</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td class="title">Hobby</td>
                        <td class="break">:</td>
                        <td>Cat, Meof, Mèo, Mòe, all things cat related.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <!--/.OWL CAROUSEL2 END-->
        </div>
      </div>
    </div>
  </section>
  <!--/.ABOUT END-->
</template>

<script>
// import Me from "assets/images/me.jpg";

export default {
  name: "About",

  data() {
    return {
      image: { background: `black` },
    };
  },
};
</script>

<style scoped>
.enter {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
.before-enter {
  opacity: 0;
  transform: translateY(150px);
  transition: all 1.3s ease;
}
</style>