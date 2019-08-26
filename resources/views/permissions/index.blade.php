@extends('layouts.master')
@section('title'){{ t('permission.title') }}@endsection
@section('content')
<section class="content">
  <div class="row">
    <div class="col-xs-12">
      <div class="box">
        <div class="box-body">
          <table id="permisison-table" class="table table-bordered table-striped" data-url="{{ route('permission.setting') }}">
            <thead>
              <tr>
                <th>{{ t('th.permission.name') }}</th>
                @if ($roles->isNotEmpty())
                @foreach ($roles as $role)
                <th>{{ $role->name }}</th>
                @endforeach
                @endif
                <th>{{ t('th.action') }}</th>
              </tr>
            </thead>
            <tbody>
              @include('permissions._tbody')
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>
@include('permissions._customize')
@endsection