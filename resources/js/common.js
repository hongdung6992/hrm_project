
$(document).ready(() => {
  
  $('#input-avatar').fileinput({
    overwriteInitial: true,
    maxFileSize: 15000,
    showClose: false,
    showCaption: false,
    browseLabel: '',
    removeLabel: '',
    browseIcon: '<i class="glyphicon glyphicon-folder-open"></i>',
    removeIcon: '<i class="glyphicon glyphicon-remove"></i>',
    removeTitle: 'Cancel or reset changes',
    elErrorContainer: '#kv-avatar-errors-1',
    msgErrorClass: 'alert alert-block alert-danger',
    defaultPreviewContent: '<img src="/images/avatar/default-user.jpg">',
    allowedFileExtensions: ["jpg", "png", "gif"],
  });
})