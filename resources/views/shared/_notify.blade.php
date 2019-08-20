@if (Session::has('flash_message'))
<script>
  $(document).ready(function() {
    $.notify({
      icon: "{{ session('flash_icon') }}",
      message: "{{ session('flash_message') }}",
    }, {
      type: "{{ session('flash_level') }}",
      timer: 3000
    });
  })
</script>
@endif