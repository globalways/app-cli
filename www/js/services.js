angular.module('starter.services', [])


.factory('Stations', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var stations = [
    { id: 0, name: 'Scruff McGruff', from: '1.5km' },
    { id: 1, name: 'G.I. Joe', from: '3.5km' },
    { id: 2, name: 'Miss Frizzle', from: '10.5km' },
    { id: 3, name: 'Ash Ketchum', from: '23.5km' }
  ];

  return {
    all: function() {
      return stations;
    },
    get: function(stationId) {
      // Simple index lookup
      return stations[stationId];
    }
  }
})

.factory('Register', function(){

  var phone;
  var nick;
  var password;

  return {
      savePhone: function(newPhone){
          phone = newPhone;
      },
      getPhone: function(){
          return phone;
      },
      saveNick: function(newNick){
          nick = newNick;
      },
      getNick: function(){
          return nick;
      },
      savePassword: function(newPassword){
          password = newPassword;
      },
      getPassword: function(){
          return password;
      },
      compare: function(tel, psd){
          return phone==tel && password==psd;
      }
  }

});