<?php

return [
  'roles_structure' => [
    'superadministrator' => [
      'dashboard' => 'r',
      'users' => 'c,r,u,d',
      'personnels' => 'c,r,u,d',
      'contracts' => 'c,r,u,d',
      'decisions' => 'c,r,u,d',
      'departments' => 'c,r,u,d',
      'roles' => 'c,r,u,d',
      'permission' => 'c,r,u,d',
      'profile' => 'r,u',
      'company' => 'r,u'
    ],
    'administrator' => [
      'dashboard' => 'r',
      'personnels' => 'c,r,u',
      'contracts' => 'c,r,u,d',
      'decisions' => 'c,r,u,d',
      'departments' => 'c,r,u,d',
      'profile' => 'r,u',
      'company' => 'r,u'
    ],
    'user' => [
      'dashboard' => 'r',
      'personnels' => 'r',
      'contracts' => 'r',
      'decisions' => 'r',
      'departments' => 'r',
      'profile' => 'r,u',
      'company' => 'r'
    ]
  ],
  'permission_map' => [
    'c' => 'create',
    'r' => 'read',
    'u' => 'update',
    'd' => 'delete'
  ]
];
