<template>
  <!--CONTACT-->
  <section id="contact" class="white-bg" v-animate-on-scroll>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h3 class="title-small">
            <span>Contact</span>
          </h3>
          <p class="content-detail">
            Please contact me Via Email:
            <a href="#">khanhng3009@gmail.com</a> Or my phone number
            <a href="#"> 0938494081 </a> or leave information here (Contact me
            directly by email, I will respond as soon as possible)
          </p>
        </div>
        <div class="col-md-6 content-right">
          <form>
            <div class="group">
              <input required="" type="text" /><span class="highlight"></span
              ><span class="bar"></span><label>Name</label>
            </div>
            <div class="group">
              <input required="" type="email" /><span class="highlight"></span
              ><span class="bar"></span><label>Email</label>
            </div>
            <div class="group">
              <textarea required=""></textarea><span class="highlight"></span
              ><span class="bar"></span><label>Message</label>
            </div>
            <input
              id="sendMessage"
              name="sendMessage"
              type="submit"
              value="Send Message"
            />
          </form>
        </div>
      </div>
    </div>
  </section>
  <!--/.CONTACT END-->
</template>

<script>
export default {
  name: "Contact",
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