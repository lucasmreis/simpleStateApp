angular.module('simpleStateApp', []).run(function(AppStateService, StorageService) {
    AppStateService.on('update', 
      function() { 
        StorageService.save('baobab', AppStateService.get()); 
      });
  });
