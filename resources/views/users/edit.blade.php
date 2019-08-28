@extends('layouts.master')
@section('title'){{ t('user.title') }}@endsection
@section('content')
<section class="content">
  <div class="row">
    <div class="col-md-9">
      <div class="box box-primary">
        <div class="box-header with-border">
          <h3 class="box-title">{{ t('user.edit') }}</h3>
        </div>
        {!! Form::open(['method' => 'PUT', 'route' => ['users.update', $user->id]]) !!}
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