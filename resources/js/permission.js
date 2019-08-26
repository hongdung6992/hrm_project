$(document).ready(() => {
  $.switcher();
})

$(document).ready(() => {

  $('.form-check-input').on('change', function () {
    var permission_id = $(this).val();
    var role_id = $(this).data('role_id');
    var checked = $(this).prop('checked');
    var url = $('#permisison-table').data('url');

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