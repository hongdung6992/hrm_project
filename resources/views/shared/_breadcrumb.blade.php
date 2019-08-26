@if (!empty($breadcrumbs))
<section class="content-header">
  <h1>{{ isset($breadcrumbs['parent']) ? $breadcrumbs['parent'] : '' }}</h1>
  <ol class="breadcrumb">
    @php $last_item = array_pop($breadcrumbs) @endphp
    @foreach ($breadcrumbs as $breadcrumb)
    <li><a href="#"><i class="fa fa-dashboard"></i> {{ $breadcrumb }}</a></li>
    @endforeach
    <li class="active">{{ $last_item }}</li>
  </ol>
</section>
@endif