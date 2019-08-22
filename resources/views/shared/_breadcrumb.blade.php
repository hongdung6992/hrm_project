@if (!empty($breadcrumbs))
<div class="row">
  <div class="col-xl-12">
    <div class="breadcrumb-holder">
      <h1 class="main-title float-left">{{ isset($breadcrumbs['parent']) ? $breadcrumbs['parent'] : '' }}</h1>
      <ol class="breadcrumb float-right">
        <?php $last_item = array_pop($breadcrumbs) ?>
        @foreach ($breadcrumbs as $breadcrumb)
        <li class="breadcrumb-item">{{ $breadcrumb }}</li>
        @endforeach
        <li class="breadcrumb-item active">{{ $last_item }}</li>
      </ol>
      <div class="clearfix"></div>
    </div>
  </div>
</div>
@endif