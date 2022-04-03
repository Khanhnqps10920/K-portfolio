<template>
  <section id="home" :style="image">
    <div class="container">
      <div class="row">
        <div class="wrap-hero-content">
          <div class="hero-content">
            <h1>Hello</h1>
            <br />
            <span class="typed">
              <span class="typed-text">{{ typeValue }}</span>
              <span class="cursor" :class="{ typing: typeStatus }">
                &nbsp;
              </span>
            </span>
          </div>
        </div>
        <div class="mouse-icon margin-20">
          <div class="scroll"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import heroImg from "assets/images/hero1.jpeg";
export default {
  data() {
    return {
      image: { backgroundImage: `url(${heroImg})` },
      typeValue: "",
      typeStatus: false,
      typeArray: ["My name is Khanh", "Im a Web Developer"],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 500,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },

  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) {
          this.typeStatus = true;
        }

        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;

        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = true;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },

    eraseText() {
      if (this.charIndex === this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) {
          this.typeStatus = true;
        }

        if (this.charIndex === 0) {
          this.typeArrayIndex += 1;
        }

        this.typeValue = this.typeArray[this.typeArrayIndex].splice(
          0,
          this.charIndex - 1
        );

        this.charIndex -= 1;

        setTimeout(eraseText, this.typingSpeed);
      } else {
      }
    },
  },

  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>

<style  scoped>
span.cursor {
  display: inline-block;
  margin-left: 2px;
  width: 2px;
  background-color: black;
  animation: cursorBlink 1s infinite;
}

span.cursor.typing {
  animation: none;
}

@keyframes cursorBlink {
  49% {
    background-color: black;
  }

  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>