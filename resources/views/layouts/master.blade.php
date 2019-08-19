<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Free Bootstrap 4 Admin Theme | Pike Admin">
  <meta name="author" content="Pike Web Development - https://www.pikephp.com">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>Pike Admin - Free Bootstrap 4 Admin Template</title>
  <link rel="stylesheet" href="{{ mix('css/app.css') }}">
  <link rel="stylesheet" href="{{ mix('css/all.css') }}">
  <script src="{{ mix('js/app.js') }}" defer></script>
  <script src="{{ mix('js/all.js') }}" defer></script>
</head>

<body class="adminbody">

  <div id="main">

    <!-- top bar navigation -->
    @include('layouts.topbar')
    <!-- End Navigation -->

    <!-- Left Sidebar -->
    @include('layouts.sidebar')
    <!-- End Sidebar -->


    <div class="content-page" id="app">

      <!-- Start content -->
      @yield('content')
      <!-- END content -->

    </div>
    <!-- END content-page -->

    @include('layouts.footer')

  </div>
  <!-- END main -->



</body>

</html>