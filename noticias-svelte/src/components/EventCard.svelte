<script>
  export let titulo;
  export let date;
  export let lugar;
  export let foto;
</script>

<style>
  .EventCard-container {
    position: relative;
    top: 10px;
    border: 2px solid #0fa397;
    border-top: 10px solid #0fa397;
    background: #fff;
  }
</style>

<div class="EventCard-container">
  <div class="EventenCard-header">{foto}</div>
  <div class="EventCart-title">{titulo}</div>
  <div class="EventCard-text">{lugar}</div>
  <div class="EventCard-text">{date}</div>
</div>
