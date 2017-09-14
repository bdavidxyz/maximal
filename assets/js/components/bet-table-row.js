var BetTable = Vue.component('bet-table-row', {
  props: ['bet_data'],
  template:
      '<tr>' +
        '<td>{{ bet_data.date }}</td>' +
        '<td class="sm-hidden-cell">{{ bet_data.game }}</td>' +
        '<td class="sm-hidden-cell">{{ bet_data.competition }}</td>' +
        '<td class="sm-hidden-cell">{{ bet_data.event }}</td>' +
        '<td>{{ bet_data.beton }}</td>' +
        '<td>{{ bet_data.odd }}</td>' +
        '<td>{{ bet_data.result }}</td>' +
      '</tr>'

});
