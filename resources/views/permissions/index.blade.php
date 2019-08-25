@extends('layouts.master')
@section('title'){{ t('user.title') }}@endsection
@section('content')
<div class="content">
  <div class="container-fluid">
    @include('shared._breadcrumb')
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div class="card mb-3">
          <div class="card-header">
            <h3><i class="fa fa-table"></i> {{ t('permission.list') }}</h3>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table id="permisison-table" class="table table-bordered table-hover display" data-url="{{ route('permission.setting') }}">
                <thead>
                  <tr>
                    <th>{{ t('th.permission.name') }}</th>
                    @if ($roles->isNotEmpty())
                    @foreach ($roles as $role)
                    <td class="text-center">{{ $role->name }}</td>
                    @endforeach
                    @endif
                    <th class="text-center">{{ t('th.action') }}</th>
                  </tr>
                </thead>
                <tbody>
                  @include('permissions._tbody')
                </tbody>
              </table>
            </div>
          </div>
        </div><!-- end card-->
      </div>
    </div>
  </div>
</div>
@include('permissions._customize')
@endsection