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
						<span class="pull-right">
							<button class="btn btn-primary btn-sm"><i class="fa fa-user-plus"></i> {{ t('button.add') }}</button>
						</span>
						<h3><i class="fa fa-table"></i> {{ t('user.list') }}</h3>
					</div>
					<div class="card-body">
						<div class="table-responsive">
							<table id="example1" class="table table-bordered table-hover display">
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
				</div><!-- end card-->
			</div>
		</div>
	</div>
</div>
@include('shared._datatable')
@endsection