<div class="tab-pane" id="change-password">
  {!! Form::open(['method' => 'PUT', 'route' => 'profile.changePassword', 'class' => 'form-horizontal']) !!}
  {!! Form::hidden('id', $currentUser->id) !!}
  <div class="form-group">
    {!! Form::label('current_password', t('user.current_password'), ['class' => 'col-sm-3 control-label required']) !!}
    <div class="col-sm-9">
      {!! Form::password('current_password', ['class' => 'form-control']) !!}
    </div>
  </div>
  <div class="form-group">
    {!! Form::label('new_password', t('user.new_password'), ['class' => 'col-sm-3 control-label required']) !!}
    <div class="col-sm-9">
      {!! Form::password('new_password', ['class' => 'form-control']) !!}
    </div>
  </div>
  <div class="form-group">
    {!! Form::label('confirm_password', t('user.confirm_password'), ['class' => 'col-sm-3 control-label required']) !!}
    <div class="col-sm-9">
      {!! Form::password('confirm_password', ['class' => 'form-control']) !!}
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-3 col-sm-9">
      {!! Form::button(t('button.save'), ['class' => 'btn btn-primary']) !!}
    </div>
  </div>
  {!! Form::close() !!}
</div>