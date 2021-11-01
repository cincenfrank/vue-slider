Vue.config.devtools = true;
window.addEventListener("DOMContentLoaded", () => {
  const vueApp = new Vue({
    el: "#vueApp",
    data: {
      activeImageIndex: 0,
      countDownTime: 0,
      intervalId: "",
      imagesArray: [
        {
          url: "img/01.jpg",
          title: "Svezia",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
        },
        {
          url: "img/02.jpg",
          title: "Svizzera",
          description: "Lorem ipsum",
        },
        {
          url: "img/03.jpg",
          title: "Gran Bretagna",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        },
        {
          url: "img/04.jpg",
          title: "Germania",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
        },
        {
          url: "img/05.jpg",
          title: "Paradise",
          description:
            "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
        },
      ],
    },
    methods: {
      onForwardPressed() {
        this.activeImageIndex =
          this.activeImageIndex === this.imagesArray.length - 1
            ? 0
            : ++this.activeImageIndex;
        this.resetCountDownTime();
      },
      onPreviousPressed() {
        this.activeImageIndex =
          this.activeImageIndex === 0
            ? this.imagesArray.length - 1
            : --this.activeImageIndex;
        this.resetCountDownTime();
      },
      blockAutoplay() {
        if (this.intervalId != "") {
          clearInterval(this.intervalId);
          this.intervalId = "";
        }
        this.resetCountDownTime();
      },
      resetCountDownTime() {
        this.countDownTime = 3;
      },
      startAutoplay() {
        this.resetCountDownTime();
        this.intervalId = setInterval(() => {
          if (this.countDownTime <= 0) {
            this.onForwardPressed();
            this.countDownTime = 3;
          } else {
            this.countDownTime--;
          }
        }, 1000);
      },
      /**
       *
       * @param {KeyboardEvent} event
       */
      keyUpHandler(event) {
        if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
          this.onPreviousPressed();
        } else if (event.key === "ArrowDown" || event.key === "ArrowRight") {
          this.onForwardPressed();
        }
      },
    },
    mounted() {
      // this.intervalId = setInterval(() => {
      //   this.onForwardPressed();
      // }, 3000);
      this.startAutoplay();
    },
    created() {
      // window.addEventListener("keydown", this.onForwardPressed);
      window.addEventListener("keyup", this.keyUpHandler);
    },
    destroyed() {
      // window.removeEventListener("keydown", this.onForwardPressed);
      window.removeEventListener("keyup", this.keyUpHandler);
    },
  });
});
