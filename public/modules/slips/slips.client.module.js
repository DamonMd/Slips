'use strict';

// Use application configuration module to register a new module
angular.module('slips').run(['Menus',
  function(Menus){
       // Set top bar menu items
       Menus.addMenuItem('topbar', 'Slips', 'slips', 'dropdown', '/slips(/create)?');
       Menus.addSubMenuItem('topbar', 'slips', 'List Slips', 'slips');
       Menus.addSubMenuItem('topbar', 'slips', 'New Slip', 'slips/create');
  }
]);
