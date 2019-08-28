// update status (active column) in users table
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

// Delete single user
$(document).ready(() => {
  $('#modal-confirm-delete').on('shown.bs.modal', (event) => {
    let button = $(event.relatedTarget);
    let id = button.data('id');
    let url = button.data('url');

    $('.agree-delete').click(() => {
      $.ajax({
        type: "DELETE",
        url: url,
        data: { id: id },
        headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"').attr('content') },
        dataType: "json",
        success: (data, status) => {
          if (status == 'success') {
            $('button[data-id=' + data.id + ']').parents('tr').fadeOut();
            $.notify({
              icon: data.flash_icon,
              message: data.flash_message
            }, {
                type: data.flash_level,
                timer: 3000
              });
          }
        }
      });

    })
  })
})
