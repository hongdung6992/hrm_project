<script>
  $('#permisison-table').DataTable({
    "paging": false,
    "ordering": false,
    "info": false,
    'language': {
      'search': '{{ t("datatable.search") }}'
    }
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