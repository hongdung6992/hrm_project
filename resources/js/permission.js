$(document).ready(() => {
  $.switcher('.switch');
})

// setting permission
$(document).ready(() => {
  $('.form-check-input').on('change', function () {
    let permission_id = $(this).val();
    let role_id = $(this).data('role_id');
    let checked = $(this).prop('checked');
    let url = $('#permisison-table').data('url');

    $.ajax({
      type: "post",
      url: url,
      headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"').attr('content') },
      data: {
        permission_id: permission_id,
        role_id: role_id,
        checked: checked
      },
      dataType: "json",
      success: function (data, status) {
      }
    });

  })
})