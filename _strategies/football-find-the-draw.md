---
title: "Find The Draw"
layout: splash
---

A football strategy that look for games that will most likely end up in the DRAW result.

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
</table>


