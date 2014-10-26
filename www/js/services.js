angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Elections', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var elections = [
    { id: 0, name: 'Feedly.com: our software team should include friend suggestions' , current: true },
    { id: 1, name: 'American idol contestant results' , current: true},
    { id: 2, name: 'Parking spaces in local town' , current: false},
    { id: 3, name: 'Parent-teacher association - distribute budget' , current: false}
  ];

  return {
    all: function() {
      return elections;
    },
    get: function(id) {
      // Simple index lookup
      return elections[id];
    }
  }
});
