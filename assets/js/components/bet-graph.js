var BetGraph = Vue.component('bet-graph', {

  props: ['bet_list'],

  template:

  '<div class="bet-graph">' +
  '<div class="ct-chart">' +
  '</div>' +
  '</div>',

  computed: {
    displayable_list: function () {
      var that = this;
      var amount = 10;
      var result = this.bet_list;
      result = _.reverse(result);
      result = _.map(result, function(e, index) {e.index = index + 1;return e;});
      result = _.map(result, function(e, index) {
        if (that.has_won(e.result)) {
          e.gain = (Big(e.odd).minus(1)).times(amount).times(that.win_factor(e.result));
        } else {
          e.gain = Big(amount).times(that.win_factor(e.result));
        }
        e.gain = Big(e.gain);
        return e;
      });
      // var accumulations = [];

      // result = _.reduce(result, function(acc, e) { acc += e }, 0);
      return result;
    }
  },

  methods: {
    has_won: function (actual_result) {
      return this.win_factor(actual_result) >= 0;
    },
    win_factor: function (actual_result) {
      var res = 0;
      switch (actual_result) {
        case "win":
          res = 1;
          break;
        case "half-win":
          res = 0.5;
          break;
        case "half-lost":
          res = -0.5;
          break;
        case "lost":
          res = -1;
          break;
        case "void":
        case "active":
          res = 0;
          break;
        default:
          console.error("error when calculating win_factor");
      }
      return res;
    }
  },

  mounted: function() {
    var chart = new Chartist.Line('.ct-chart', {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
      [5, -4, 3, 7, 20, 10, 3, 4, 8, -10, 6, -8]
      ]
    }, {
      showArea: true,
      axisY: {
        onlyInteger: true
      },
      plugins: [
      Chartist.plugins.ctThreshold({
        threshold: 0
      })
      ]
    });
  }

});
