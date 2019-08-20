@extends('auth.master')
@section('content')
<div class="container">
  {!! Form::open(['method' => 'POST', 'route' => 'login', 'class' => 'form-signin']) !!}
  <h3 class="form-signin-heading">{{ t('auth.login') }}</h3>
  <div class="form-group">
    <div class="input-group">
      <div class="input-group-addon"><i class="glyphicon glyphicon-user"></i></div>
      {!! Form::text('email', old('email'), ['class' => 'form-control', 'placeholder' => t('auth.email')]) !!}
    </div>
    @if($errors->has('email'))
    <p class="login-error">{{ $errors->first('email') }}</p>
    @endif
  </div>

  <div class="form-group">
    <div class="input-group">
      <div class="input-group-addon"><i class=" glyphicon glyphicon-lock "></i></div>
      {!! Form::password('password', ['class' => 'form-control', 'placeholder' => t('auth.password')]) !!}
    </div>
    @if($errors->has('password'))
    <p class="login-error">{{ $errors->first('password') }}</p>
    @endif
  </div>
  {!! Form::button(t('auth.login'), ['class' => 'btn btn-lg btn-primary btn-block', 'type' => 'submit']) !!}
  {!! Form::close() !!}

</div>
<div class="clearfix"></div>
<br><br>
@include('shared._notify')
@endsection