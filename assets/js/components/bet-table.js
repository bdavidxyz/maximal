var BetTable = Vue.component('bet-table', {
  props: ['bet_list'],
  template:  

'<table class="bet-table">' +
  '<thead>' +
    '<tr>' +
      '<th>date</th>' +
      '<th class="sm-hidden-cell">game</th>' +
      '<th class="sm-hidden-cell">competition</th>' +
      '<th class="sm-hidden-cell">event</th>' +
      '<th>beton</th>' +
      '<th>odd</th>' +
      '<th>result</th>' +
    '</tr>' +
  '</thead>' +
  '<tbody>' +
    '<bet-table-row v-for="item in bet_list" v-bind:bet_data="item" v-bind:key="item.id">' +
    '</bet-table-row>' +
  '</tbody>' +
'</table>'

});
