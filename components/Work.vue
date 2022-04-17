<template>
  <!--WORK-->
  <section class="grey-bg mar-tm-10" id="work" v-animate-on-scroll>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <h3 class="title-small">
            <span>Work</span>
          </h3>
          <p class="content-detail">
            Here are some featured web/apps I worked on during my time at the
            company
            <br /><br />
            If you want to see my personal projects please visit my
            <a target="_blank" href="https://github.com/Khanhnqps10920"
              >Github</a
            >
          </p>
        </div>
        <div class="col-md-9 content-right">
          <!--PORTFOLIO IMAGE-->
          <ul class="portfolio-image">
            <li
              @click.prevent="hanleWorkClick(work)"
              class="col-md-6"
              v-for="work in works"
              :key="work.id"
            >
              <div>
                <img alt="image" :src="work.imgSrc" />
                <div class="decription-wrap">
                  <div class="image-bg">
                    <div class="desc">
                      <p style="font-weight: bold">{{ work.name }}</p>

                      <span
                        class="desc-group"
                        v-for="des in work.des"
                        :key="des"
                      >
                        {{ des }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <!--/.PORTFOLIO IMAGE END-->
        </div>
      </div>
    </div>

    <div
      class="custom-modal"
      v-if="modalActive"
      @click.prevent="modalActive = false"
    >
      <!-- custom-modal content -->
      <div class="custom-modal-content">
        <span class="close" @click.prevent="modalActive = false">&times;</span>
        <div class="video-wrapper">
          <video controls autoplay class="video">
            <source :src="videoSrc" />
          </video>
        </div>
      </div>
    </div>
  </section>
  <!--/.WORK END-->
</template>

<script>
import SdkVid from "assets/images/reporting-sdk/sdk-vid.mp4";
import DtdVid from "assets/images/dtd/dtd-vid.mp4";
import PfVid from "assets/images/pf/pf-vid.mp4";
import OdVid from "assets/images/od/od-vid.mp4";

export default {
  name: "Work",

  data() {
    return {
      videoSrc: "",
      modalActive: false,
      works: [
        {
          id: 1,
          imgSrc: require("../assets/images/reporting-sdk/banner.png"),
          name: "CPBO SDK",
          des: [
            "This is a SDK for CPBO",
            "This SDK will return chart - visualization - table - etc",
            "Technologies Used: Vue, Vuex, Bootstrap Vue, chartjs, HightChart",
          ],
          vid: SdkVid,
        },
        {
          id: 2,
          imgSrc: require("../assets/images/dtd/banner.jpg"),
          name: "CPBO - DTD module",
          des: [
            "A web application was created to help manage orders and barcodes of each product.",
            "Technologies used: Vue, Vuex, Bootstrap Vue, CPBO-SDK",
          ],
          vid: DtdVid,
        },
        {
          id: 3,
          imgSrc: require("../assets/images/pf/banner.jpg"),
          name: "CPBO - PF module",
          des: [
            "A web application was created to manage financial of business",
            "Technologies Used: Vue, Vuex, Bootstrap Vue, CPBO-SDK",
          ],
          vid: PfVid,
        },
        {
          id: 4,
          name: "Outdoorequipped",
          imgSrc: require("../assets/images/od/banner.jpg"),
          des: [
            "A store selling outdoor equip items",
            "Technologies Used: Shopify, Liquid, Html, Css, Js",
          ],
          vid: OdVid,
        },
      ],
    };
  },
  methods: {
    hanleWorkClick(work) {
      this.videoSrc = work.vid;
      this.modalActive = true;
    },
  },
};
</script>

<style scoped>
.desc-group {
  font-size: 10px !important;
  letter-spacing: 0.5px !important;
  font-weight: 300 !important;
  display: block;
}

.custom-modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1000000000; /* Sit on top */
  padding-top: 20px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* custom-modal Content */
.custom-modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 10px;
  border: 1px solid #888;
  width: 95%;
  height: 95%;
  position: relative;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  position: fixed;
  right: 40px;
  top: 15px;
  font-size: 30px;
  font-weight: 300;
  z-index: 300;
}

.close:hover,
.close:focus {
  text-decoration: none;
  cursor: pointer;
}

.video-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.video {
  width: 100%;
  height: 100%;
  position: absolute;
}

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
