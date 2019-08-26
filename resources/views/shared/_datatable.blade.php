<script>
  $(document).ready(function() {
    $('#example1').DataTable({
      'language': {
        'lengthMenu': '{{ t("datatable.lengthMenu") }}',
        'zeroRecords': '{{ t("datatable.zeroRecords") }}',
        'info': '{{ t("datatable.info") }}',
        'infoEmpty': '{{ t("datatable.infoEmpty") }}',
        'infoFiltered': '{{ t("datatable.infoFiltered") }}',
        'search': '{{ t("datatable.search") }}',
        'paginate': {
          'first': '<i class="fa fa-step-backward"></i>',
          'last': '<i class="fa fa-step-forward"></i>',
          'next': '<i class="fa fa-caret-right"></i>',
          'previous': '<i class="fa fa-caret-left"></i>'
        }
      }
    });
  });
</script>
<style>
  .ui-switcher[aria-checked=false]:before {
    content: "{{ t('switch.off') }}" !important;
  }

  .ui-switcher[aria-checked=true]:before {
    content: "{{ t('switch.on') }}" !important;
  }
</style>