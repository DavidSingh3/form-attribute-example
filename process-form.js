const resultContainer = document.getElementById('result')
const params = new URLSearchParams(document.location.search)

switch (true) {

  case params.has('action_add'):
    resultContainer.innerText += 'Should add value: '.concat(params.get('new_value'))
    break

  case params.has('action_delete'):
    resultContainer.innerText += 'Should delete index: '.concat(params.get('action_delete'))
    break

  case params.has('action_update'):
    resultContainer.innerText += 'Should update all values\n'
    params.forEach((value, key) => {
      if (key.startsWith('value_')) {
        resultContainer.innerText += key + ': ' + value + '\n'
      }
    })
    break

}