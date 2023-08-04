

module.exports = {
  routes: [
    { // Path defined with an URL parameter
      method: 'PUT',
      path: '/i-calendar',
      handler: 'i-calendar.updateIcalData',
    },
    { // Path defined with a regular expression
      method: 'GET',
      path: '/i-calendar', // Only match when the URL parameter is composed of lowercase letters
      handler: 'i-calendar.find',
    }
  ]
}
