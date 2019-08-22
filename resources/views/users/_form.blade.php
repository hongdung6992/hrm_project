<div class="form-group">
  {!! Form::label('name', t('user.name'), ['class' => 'required']) !!}
  {!! Form::text('name', '', ['class' => $errors->has('name') ? 'form-control
  parsley-error' : 'form-control']) !!}
</div>
<div class="form-group">
  {!! Form::label('email', t('user.email'), ['class' => 'required']) !!}
  {!! Form::text('email', '', ['class' => $errors->has('email') ?
  'form-control parsley-error' : 'form-control']) !!}
</div>
<div class="form-group">
  {!! Form::label('phone', t('user.phone')) !!}
  {!! Form::text('phone', '', ['class' => $errors->has('phone') ?
  'form-control parsley-error' : 'form-control']) !!}
</div>
<div class="form-group">
  {!! Form::label('role', t('user.role')) !!}
  {!! Form::select('role_id',[0 => 'User', 1 => 'Admin', 2 => 'Editor'], '',
  ['class' => 'form-control select2']) !!}
</div>
<div class="form-group">
  {!! Form::label('status', t('user.active')) !!}
  {!! Form::select('status',config('enum.boolean'), 1 , ['class' =>
  'form-control select2']) !!}
</div>
<div class="form-group text-right m-b-0">
  {!! Form::submit(t('button.save'), ['class' => 'btn btn-primary']) !!}
  <a href="{{ route('users.index') }}" class="btn btn-secondary m-l-5">{{ t('button.back') }}</a>
</div>