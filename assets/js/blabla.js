console.log('jQuery version ' + $.fn.jquery + '; '+ 'Lodash version ' + _.VERSION + '; '+ 'VueJs version ' + Vue.version + '; ' +  new Date());


if ($('#strategy_app').length) {

  var vm = new Vue({
    el: '#strategy_app',
    data: function() {
      return {
        bet_list: _.sortBy(raw_data, function(o) { return o.date * -1; }),
      }
    },
    methods: {
      toggleLight: function () {
        console.log('toggleLight');
      }
    }
  });

}
