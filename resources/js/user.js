
$(document).ready(() => {
  $('.form-user-status').on('change', function () {
    var user_id = $(this).val();
    var checked = $(this).prop('checked');
    var url = $('.user-table').data('url');
    $.ajax({
      type: "put",
      url: url,
      headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"').attr('content') },
      data: {
        user_id: user_id,
        checked: checked
      },
      success: function (data, status) {
      }
    });
  })

})
