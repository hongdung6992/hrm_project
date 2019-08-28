<div class="box-body">
  <div class="form-group {{ $errors->has('name') ? 'has-error' : '' }}">
    {!! Form::label('name', t('user.name'), ['class' => 'required']) !!}
    {!! Form::text('name', isset($user) ? $user->name : '', ['class' => 'form-control', 'placeholder' => t('user.name')]) !!}
    @include('shared._error_validate', ['fillable' => 'name'])
  </div>
  <div class="form-group {{ $errors->has('email') ? 'has-error' : '' }}">
    {!! Form::label('email', t('user.email'), ['class' => 'required']) !!}
    {!! Form::text('email', isset($user) ? $user->email : '', ['class' => 'form-control', 'placeholder' => t('user.email'), isset($readonly) ? $readonly : '']) !!}
    @include('shared._error_validate', ['fillable' => 'email'])
  </div>
  <div class="form-group {{ $errors->has('phone') ? 'has-error' : '' }}">
    {!! Form::label(t('user.phone')) !!}
    {!! Form::text('phone', isset($user) ? $user->phone : '', ['class' => 'form-control', 'placeholder' => t('user.phone')]) !!}
    @include('shared._error_validate', ['fillable' => 'phone'])
  </div>
  <div class="form-group">
    {!! Form::label(t('user.role')) !!}
    {!! Form::select('role_id', $roles, isset($role) ? $role[0]->pivot->role_id : 1, ['class' => 'form-control']) !!}
  </div>
  <div class="form-group">
    {!! Form::label(t('user.active')) !!}
    {!! Form::select('active', config('enum.boolean'), isset($user) ? $user->active : 1,['class' => 'form-control']) !!}
  </div>
</div>