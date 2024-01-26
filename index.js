
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzZxtQ41SOtICCkH94wj5F4y7gWp6eEa5LluN1b1o7vkG7DHAzonz6QfaY8sTkfTL4/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thanks for Subscribing";
        setTimeout(function(){
            msg.innerHTML = " ";
        },5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
