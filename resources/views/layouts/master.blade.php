<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>@yield('title')</title>
  <link rel="stylesheet" href="{{ mix('css/app.css') }}">
  <link rel="stylesheet" href="{{ mix('css/all.css') }}">
  <!-- <link rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic"> -->
  <script src="{{ mix('js/all.js') }}"></script>
  <script src="{{ mix('js/app.js') }}"></script>
  </head>

<body class="hold-transition skin-blue sidebar-mini">
  <div class="wrapper">

    @include('layouts.header')
    @include('layouts.sidebar')

    <div class="content-wrapper">
      @include('shared._breadcrumb')
      @yield('content')
    </div>

    @include('layouts.footer')
    @include('layouts.control_sidebar')

  </div>
</body>

</html>