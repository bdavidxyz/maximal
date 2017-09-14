console.log('jQuery version ' + $.fn.jquery + '; '+ 'Lodash version ' + _.VERSION + '; '+ 'VueJs version ' + Vue.version + '; ' +  new Date());

// var chart = new Chartist.Line('.ct-chart', {
//   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//   series: [
//     [5, -4, 3, 7, 20, 10, 3, 4, 8, -10, 6, -8]
//   ]
// }, {
//   showArea: true,
//   axisY: {
//     onlyInteger: true
//   },
//   plugins: [
//     Chartist.plugins.ctThreshold({
//       threshold: 0
//     })
//   ]
// });
if ($('#strategy_app').length) {
    
    var vm = new Vue({
      el: '#strategy_app',
      data: function() {
        return {
          bet_list: _.sortBy(raw_data, [function(o) { return o.date * -1; }]),
        }
      },
      methods: {
        toggleLight: function () {
          console.log('toggleLight');
        }
      }
    });
    
  }
