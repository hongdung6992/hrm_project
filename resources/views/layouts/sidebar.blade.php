<aside class="main-sidebar">
  <section class="sidebar">
    <div class="user-panel">
      <div class="pull-left image">
        <img src="{{ asset('images/avatar/' . Auth::user()->avatar) }}" class="img-circle" alt="User Image">
      </div>
      <div class="pull-left info">
        <p>{{ Auth::user()->name }}</p>
        <a href="{{ route('profile.index') }}"><i class="fa fa-circle text-success"></i> Online</a>
      </div>
    </div>
    @include('layouts.menu')
  </section>
</aside>