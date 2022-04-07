<template>
  <!--SKILLS-->
  <section class="white-bg" id="skill">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h3 class="title-small">
            <span>Skills</span>
          </h3>
          <p class="content-detail">
            To complete the job in Frontend Position, here is a list of skills I
            have learned and practiced during my working time.
          </p>
        </div>
        <div class="col-md-8 content-right">
          <!--SKILLST-->
          <div class="skillst row">
            <div class="col-md-3 col-sm-6" v-for="skill in skills" :key="skill">
              <div class="skillst-box">
                <span>{{ skill }}</span>
              </div>
            </div>
          </div>
          <!--/.SKILLST END-->
        </div>
      </div>
    </div>
  </section>
  <!--/.SKILLS END-->
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skills: ["JS", "TS", "Vue", "React", "SASS", "Nodejs", "Github", "Figma"],
    };
  },
};
</script>

<style>
.skillst-box {
  height: 100px;
  border-radius: 5px;
  filter: grayscale(1);
  box-shadow: 0px 0px 0px #818181;
  border: 0.5px solid #818181;
  /* background: #818181; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  filter: grayscale(1);
  text-transform: uppercase;
  transition: 0.4s ease;
  margin-bottom: 10px;
}

.skillst-box:hover {
  background-color: #818181;
  color: white;
  cursor: pointer;
}

.skillst {
}
</style>