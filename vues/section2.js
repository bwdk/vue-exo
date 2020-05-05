new Vue({
    el: "#section2",
    data: {
      counter: 0,
      secondCounter: 0,
      x: 0,
      y: 0,
      title: "Hello 1!",
      link: 'http://google.fr',
      finishedLink: '<a href="http://google.ca">Google Canada</a>',
      name: 'Bowdi',
      attachRed: false,
      color: 'green',
      width: 100,
    },
    methods: {
      sayHello: function () {
        this.title = 'Hello 2!';
      },
      increase: function (step, event) {
        this.counter += step;
      },
      updateCoordinates: function (evt) {
        this.x = evt.clientX;
        this.y = evt.clientY;
      },
      alertMe: function () {
        alert('Alert');
      },
      result: function () {
        console.log('Method');
        return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
      }
    },
    computed: {
      output: function () {
        console.log('Computed');
        return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
      },
      divClasses: function () {
        return {
          red: this.attachRed,
          blue: !this.attachRed
        };
      },
      myStyle: function () {
        return {
          backgroundColor: this.color,
          width: this.width + 'px'
        };
      }
    },
    watch: {
      counter: function (value) {
        let vm = this;
        setTimeout(function () {
          vm.counter = 0;
        }, 2000);
      }
    }
  })