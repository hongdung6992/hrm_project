@extends('layouts.master')
@section('title'){{ t('user.title') }}@endsection
@section('content')
<section class="content">
	<div class="row">
		<div class="col-xs-12">
			<div class="box">
				<div class="box-header">
					<span class="pull-right">
						<a href="{{ route('users.create') }}" class="btn btn-info"> <i class="fa fa-user-plus"></i> {{ t('button.add') }}</a>
					</span>
					<h3 class="box-title">{{ t('user.list') }}</h3>
				</div>
				<div class="box-body">
					<table id="example1" class="table table-bordered table-striped user-table" data-url="{{ route('user.status') }}">
						<thead>
							<tr>
								<th>{{ t('th.index') }}</th>
								<th>{{ t('th.user.name') }}</th>
								<th>{{ t('th.user.email') }}</th>
								<th>{{ t('th.user.phone') }}</th>
								<th>{{ t('th.user.role') }}</th>
								<th>{{ t('th.active') }}</th>
								<th>{{ t('th.action') }}</th>
							</tr>
						</thead>
						<tbody>
							@include('users._tbody')
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
	@include('shared._modal_confirm_delete')
</section>
@include('shared._datatable')
@include('shared._notify')
@endsection