const trash = document.getElementsByClassName("fa-trash-o");

Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function() {
    const task = this.parentNode.parentNode.childNodes[1].innerText
    const day = this.parentNode.parentNode.childNodes[3].innerText

    fetch('messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'task': task,
        'day': day
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});
