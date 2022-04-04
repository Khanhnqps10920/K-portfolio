<template>
  <!--ABOUT-->
  <section id="about">
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
                    <tr>
                      <td class="title">Name</td>
                      <td class="break">:</td>
                      <td>M. Reza</td>
                    </tr>
                    <tr>
                      <td class="title">Phone</td>
                      <td class="break">:</td>
                      <td>+62 8678 999 012</td>
                    </tr>
                    <tr>
                      <td class="title">Email</td>
                      <td class="break">:</td>
                      <td>bdgpixel@gmail.com</td>
                    </tr>
                    <tr>
                      <td class="title">Address</td>
                      <td class="break">:</td>
                      <td>Cipamokolan street 102 , Bandung, Indonesia</td>
                    </tr>
                    <tr>
                      <td class="title">Skype</td>
                      <td class="break">:</td>
                      <td>bdgpixel</td>
                    </tr>
                    <tr>
                      <td class="title">Dribbble</td>
                      <td class="break">:</td>
                      <td>Muh-Reza</td>
                    </tr>
                    <tr>
                      <td class="title">Behance</td>
                      <td class="break">:</td>
                      <td>m-reza</td>
                    </tr>
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
import Me from "assets/images/me.jpg";

export default {
  name: "About",

  data() {
    return {
      image: { backgroundImage: `url(${Me})` },
    };
  },
};
</script>

<style>
</style>