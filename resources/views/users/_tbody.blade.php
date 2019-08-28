@if ($users->isNotEmpty())
@php $index = 1 @endphp
@foreach ($users as $user)
<tr>
  <td>{{ $index }}</td>
  <td>{{ $user->name }}</td>
  <td>{{ $user->email }}</td>
  <td>{{ $user->phone }}</td>
  <td>
    @foreach ($user->roles as $role)
    {{ $role->name }}
    @endforeach
  </td>
  <td class="text-center">
    {!! Form::checkbox("status", $user->id, $user->active, ['class' =>'form-user-status switch']) !!}
  </td>
  <td>
    <a href="{{ route('users.edit', $user->id) }}" class="btn btn-success btn-sm"><i class="fa fa-pencil"></i></a>
    <button class="btn btn-danger btn-sm" data-target="#modal-confirm-delete" data-toggle="modal" data-id="{{ $user->id }}" data-url="{{ route('users.delete') }}">
      <i class="fa fa-trash-o"></i>
    </button>
  </td>
</tr>
@php $index++ @endphp
@endforeach
@endif