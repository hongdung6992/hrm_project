<header class="main-header">
  <a href="index2.html" class="logo">
    <span class="logo-mini"><b>H</b>RM</span>
    <span class="logo-lg">{{ t('app.hrm') }}</span>
  </a>
  <nav class="navbar navbar-static-top">
    <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
      <span class="sr-only">Toggle navigation</span>
    </a>
    <div class="navbar-custom-menu">
      <ul class="nav navbar-nav">
        <li class="dropdown user user-menu">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <img src="{{ asset('images/avatar/' . Auth::user()->avatar) }}" class="user-image">
            <span class="hidden-xs">{{ Auth::user()->name }}</span>
          </a>
          <ul class="dropdown-menu">
            <li class="user-header">
              <img src="{{ asset('images/avatar/' . Auth::user()->avatar) }}" class="img-circle">
              <p>{{ Auth::user()->name }}</p>
            </li>
            <li class="user-footer">
              <div class="pull-left">
                <a href="{{ route('profile.index') }}" class="btn btn-default btn-flat">{{ t('user.profile') }}</a>
              </div>
              <div class="pull-right">
                {!! Form::open(['method' => 'post', 'route' => 'logout']) !!}
                {!! Form::submit(t('button.logout'), ['class'=> 'btn btn-default btn-flat']) !!}
                {!! Form::close() !!}
              </div>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
        </li>
      </ul>
    </div>
  </nav>
</header>