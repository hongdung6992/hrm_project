<div class="box-body">
  <div class="form-group">
    {!! Form::label(t('user.name')) !!}
    {!! Form::text('name', '', ['class' => 'form-control', 'placeholder' => t('user.name')]) !!}
  </div>
  <div class="form-group">
    {!! Form::label(t('user.email')) !!}
    {!! Form::text('email', '', ['class' => 'form-control', 'placeholder' => t('user.email')]) !!}
  </div>
  <div class="form-group">
    {!! Form::label(t('user.phone')) !!}
    {!! Form::text('phone', '', ['class' => 'form-control', 'placeholder' => t('user.phone')]) !!}
  </div>
  <div class="form-group">
    {!! Form::label(t('user.role')) !!}
    {!! Form::select('active', $roles, 1,['class' => 'form-control']) !!}
  </div>
  <div class="form-group">
    {!! Form::label(t('user.active')) !!}
    {!! Form::select('active', config('enum.boolean'), 1,['class' => 'form-control']) !!}
  </div>
</div>