<ul>

  <li class="submenu">
    <a class="active" href="{{ route('dashboard') }}"><i class="fa fa-home"></i><span> Dashboard </span> </a>
  </li>

  <li class="submenu">
    <a href="#"><i class="fa fa-users"></i> <span> {{ t('personnel.title') }} </span></a>
  </li>

  <li class="submenu">
    <a href="{{ route('users.index') }}"><i class="fa fa-user"></i> <span> {{ t('user.title') }} </span></a>
  </li>

  <li class="submenu">
    <a href="{{ route('permissions.index') }}"><i class="fa fa-user-secret"></i> <span> {{ t('permission.title') }} </span></a>
  </li>
</ul>