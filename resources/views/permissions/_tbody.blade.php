@if ($permissions->isNotEmpty())
@foreach ($permissions as $permission)
<tr>
  <td>{{ $permission->name }}</td>
  @if ($roles->isNotEmpty())
  @foreach ($roles as $role)
  <td class="text-center">
    {!! Form::checkbox(
    "roles", $permission->id,
    $role->hasPermission($permission),
    ['class' =>'form-check-input', 'data-role_id' => $role->id]
    ) !!}
  </td>
  @endforeach
  @endif
  <td class="text-center">
    <a href="#" class="btn btn-success btn-sm"><i class="fa fa-pencil"></i></a>
  </td>
</tr>
@endforeach
@endif