import { serialize } from "uri-js";

// ui profile form
$(document).ready(() => {
  var input = $('#profile :input[name!="role"]');
  var button = $('#profile button');
  input.attr('readonly', true);
  button.css('display', 'none');
  input.focus(function (e) {
    $(this).attr('readonly', false);
    button.css('display', 'block');
  });
  $(document).on('click', function (event) {
    if ($(event.target).closest('input, button').length > 0) return;
    input.attr('readonly', true);
    button.css('display', 'none');
    input.parent().prev().removeClass('required');
  })

  $('#profile :input[name="name"], #profile :input[name="email"]').focus(function (e) {
    $(this).parent().prev().addClass('required');
  })
})

// updateProfile
$(document).ready(() => {
  $('#profile button').on('click', function () {
    var data = $('#profile form').serialize();
    var url = $(this).data('url'); // -> updateProfile function at ProfileController
    $('#profile .form-group').removeClass('has-error');
    $('#profile span.help-block').remove();
    $.ajax({
      type: "put",
      url: url,
      data: data,
      headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"').attr('content') },
      dataType: "json",
      success: function (data, status) {
        if (status == 'success') {
          $('#profile :input[name!="role"]').attr('readonly', true);
          $('#profile button').css('display', 'none');
          $('.alert').remove();
          $.notify({
            icon: data.flash_icon,
            message: data.flash_message
          }, {
              type: data.flash_level,
              timer: 3000
            });
        }

      },
      error: function (params) {
        if (params.status == 422) {
          let errors = params.responseJSON.errors;
          $.each(errors, function (key, value) {
            let message = '<span class="help-block">' + errors[key] + '</span>'
            $('#profile input[name="' + key + '"]').next().remove();
            $('#profile input[name="' + key + '"]').after(message);
            $('#profile input[name="' + key + '"]').parents('.form-group').addClass('has-error');
          });
        }
      }
    });

  })
});

// changePassword function 
$(document).ready(() => {
  $('#change-password button').on('click', function () {
    var data = $('#change-password form').serialize();
    var url = $(this).data('url');
    $('#change-password .form-group').removeClass('has-error');
    $('#change-password span.help-block').remove();
    $.ajax({
      type: "put",
      url: url,
      headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"').attr('content') },
      data: data,
      dataType: "json",
      success: function (data, status) {
        if (status == 'success') {
          if (data.status == 'fails') {
            $('#change-password input').val('');
            let message = '<span class="help-block">' + data.error + '</span>'
            $('#change-password input[name="current_password"]').after(message);
            $('#change-password input[name="current_password"]').parents('.form-group').addClass('has-error');
          } else {
            $('.alert').remove();
            $('#change-password input').val('');
            $.notify({
              icon: data.flash_icon,
              message: data.flash_message
            }, {
                type: data.flash_level,
                timer: 3000
              });
          }
        }
      },
      error: function (params) {
        if (params.status == 422) {
          let errors = params.responseJSON.errors;
          $('#change-password input').val('');
          $.each(errors, function (key, value) {
            let message = '<span class="help-block">' + errors[key] + '</span>'
            $('#change-password input[name="' + key + '"]').next().remove();
            $('#change-password input[name="' + key + '"]').after(message);
            $('#change-password input[name="' + key + '"]').parents('.form-group').addClass('has-error');
          });
        }
      }
    });
  })

})