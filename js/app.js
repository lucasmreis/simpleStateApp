angular.module('simpleStateApp', []).run(function(AppStateService, StorageService) {
    AppStateService.change('foos', StorageService.load('foos'));
    AppStateService.change('bars', StorageService.load('bars'));

    AppStateService.listen('foos', StorageService.save('foos'));
    AppStateService.listen('bars', StorageService.save('bars'));
  });
