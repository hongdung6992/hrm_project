<div class="modal modal-danger fade" id="modal-confirm-delete">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">{{ t('modal_confirm_delete.header') }}</h4>
      </div>
      <div class="modal-body">
        <p>{{ t('modal_confirm_delete.body') }}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline pull-left" data-dismiss="modal">{{ t('button.close') }}</button>
        <button type="button" class="btn btn-outline agree-delete" data-dismiss="modal">{{ t('button.agree') }}</button>
      </div>
    </div>
  </div>
</div>