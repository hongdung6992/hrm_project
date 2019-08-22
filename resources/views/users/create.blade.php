@extends('layouts.master')
@section('title'){{ t('user.title') }}@endsection
@section('content')
<div class="content">
  <div class="container-fluid">
    @include('shared._breadcrumb')
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
        <div class="card mb-3">
          <div class="card-header">
            <h3><i class="fa fa-user-plus"></i> {{ t('user.create') }}</h3>
          </div>
          <div class="card-body">
            {!! Form::open(['method' => 'POST', 'route' => 'users.create']) !!}
            @include('users._form')
            {!! Form::close() !!}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection