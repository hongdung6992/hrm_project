@extends('layouts.master')
@section('title'){{ t('user.title') }}@endsection
@section('content')
<section class="content">
  <div class="row">
    <div class="col-md-9">
      <div class="box box-primary">
        <div class="box-header with-border">
          <h3 class="box-title">{{ t('user.create') }}</h3>
          <small class="help-block">{{ t('user.guide') }}</small>
        </div>
        {!! Form::open(['method' => 'POST', 'route' => 'users.store']) !!}
        @include('users._form')
        <div class="box-footer">
          {!! Form::submit(t('button.save'), ['class' => 'btn btn-primary']) !!}
        </div>
        {!! Form::close() !!}
      </div>
    </div>
  </div>
</section>
@endsection