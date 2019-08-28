<ul class="sidebar-menu" data-widget="tree">
  <li>
    <a href="{{ route('dashboard') }}">
      <i class="fa fa-dashboard"></i> <span>{{ t('dashboard.title') }}</span>
    </a>
  </li>
  <li class="header">{{ t('app.function')}}</li>
  <li>
    <a href="#">
      <i class="fa fa-th"></i> <span>{{ t('app.hrm') }}</span>
    </a>
  </li>
  <li>
    <a href="#">
      <i class="fa fa-th"></i> <span>{{ t('app.department') }}</span>
    </a>
  </li>
  <li>
    <a href="#">
      <i class="fa fa-th"></i> <span>{{ t('app.contract') }}</span>
    </a>
  </li>
  <li>
    <a href="#">
      <i class="fa fa-th"></i> <span>{{ t('app.decision') }}</span>
    </a>
  </li>
  <li class="header">{{ t('app.manage') }}</li>
  <li>
    <a href="{{ route('users.index') }}">
      <i class="fa fa-pie-chart"></i><span>{{ t('app.user') }}</span>
    </a>
  </li>
  <li class="treeview">
    <a href="#">
      <i class="fa fa-laptop"></i><span>{{ t('app.role_permission') }}</span>
      <span class="pull-right-container">
        <i class="fa fa-angle-left pull-right"></i>
      </span>
    </a>
    <ul class="treeview-menu">
      <li><a href="#"><i class="fa fa-circle-o"></i> {{ t('app.role') }}</a></li>
      <li><a href="{{ route('permissions.index') }}"><i class="fa fa-circle-o"></i> {{ t('app.permission') }}</a></li>
    </ul>
  </li>
</ul>