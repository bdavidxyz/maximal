---
title: "Find The Draw"
layout: splash
---

A football strategy that look for games that will most likely end up in the DRAW result.

<div id="strategy_app">
  <bet-graph v-bind:bet_list="bet_list"></bet-graph>
  <bet-table v-bind:bet_list="bet_list"></bet-table>
</div>

<!-- <div class="ct-chart" style="height:15rem"></div>

<table>
  <thead>
    <tr>
      <th>date</th>
      <th class="sm-hidden-cell">game</th>
      <th class="sm-hidden-cell">competition</th>
      <th class="sm-hidden-cell">event</th>
      <th>beton</th>
      <th>odd</th>
      <th>result</th>
    </tr>
  </thead>
  <tbody>
    {% for draw in site.data.football_draw %}
      <tr>
        <td>{{ draw.date }}</td>
        <td class="sm-hidden-cell">{{ draw.game }}</td>
        <td class="sm-hidden-cell">{{ draw.competition }}</td>
        <td class="sm-hidden-cell">{{ draw.event }}</td>
        <td>{{ draw.beton }}</td>
        <td>{{ draw.odd }}</td>
        <td>{{ draw.result }}</td>
      </tr>
    {% endfor %} 
  </tbody>
</table> -->

<script type="text/javascript">
  var raw_data = {{ site.data.football_draw | jsonify }};
</script>


