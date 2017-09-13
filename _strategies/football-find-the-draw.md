---
title: "Find The Draw"
layout: splash
---

A football strategy that look for games that will most likely end up in the DRAW result.

<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>game</th>
      <th>competition</th>
      <th>event</th>
      <th>beton</th>
      <th>odd</th>
      <th>result</th>
    </tr>
  </thead>
  <tbody>
    {% for draw in site.data.football_draw %}
      <tr>
        <td>{{ draw.id }}</td>
        <td>{{ draw.game }}</td>
        <td>{{ draw.competition }}</td>
        <td>{{ draw.event }}</td>
        <td>{{ draw.beton }}</td>
        <td>{{ draw.odd }}</td>
        <td>{{ draw.result }}</td>
      </tr>
    {% endfor %} 
  </tbody>
</table>


