$( ()->
  $.get('example.php', (data)->
    if (data.errors != null)
      alert("There was an error!")
    else
      $("#content").text(data.message)
  , 'json')
)