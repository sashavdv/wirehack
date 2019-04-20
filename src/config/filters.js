import Vue from 'vue'

Vue.filter('toCurrency', function (value) {
  if (typeof value !== 'number') {
    return value
  }
  var formatter = new Intl.NumberFormat('be-NL', {
    minimumFractionDigits: 2
  })
  return formatter.format(value) + ' EUR'
})
