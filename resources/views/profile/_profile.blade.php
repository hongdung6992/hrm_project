<div class="active tab-pane" id="profile">
  {!! Form::open(['method' => 'PUT', route('users.index'), 'class' => 'form-horizontal']) !!}
  {!! Form::hidden('id', isset($currentUser) ? $currentUser->id : '') !!}
  <div class="form-group">
    {!! Form::label('name', t('user.name'), ['class' => 'col-sm-3 control-label']) !!}
    <div class="col-sm-9">
      {!! Form::text('name', isset($currentUser) ? $currentUser->name : '', ['class' => 'form-control']) !!}
    </div>
  </div>
  <div class="form-group">
    {!! Form::label('email', t('user.email'), ['class' => 'col-sm-3 control-label']) !!}
    <div class="col-sm-9">
      {!! Form::text('email', isset($currentUser) ? $currentUser->email : '', ['class' => 'form-control']) !!}
    </div>
  </div>
  <div class="form-group">
    {!! Form::label('phone', t('user.phone'), ['class' => 'col-sm-3 control-label']) !!}
    <div class="col-sm-9">
      {!! Form::text('phone', isset($currentUser) ? $currentUser->phone : '', ['class' => 'form-control']) !!}
    </div>
  </div>
  <div class="form-group">
    {!! Form::label('role', t('user.role'), ['class' => 'col-sm-3 control-label']) !!}
    <div class="col-sm-9">
      {!! Form::text('role', isset($currentRole) ? $currentRole[0]->name : '', ['class' => 'form-control', 'readonly']) !!}
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-3 col-sm-9">
      {!! Form::button(t('button.save'), ['class' => 'btn btn-primary', 'data-url' => route('profile.update')]) !!}
    </div>
  </div>
  {!! Form::close() !!}
</div>