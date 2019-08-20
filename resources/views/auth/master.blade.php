<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>{{ t('auth.login') }}</title>
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
  <link rel="shortcut icon" href="favicon_16.ico" />
  <link rel="bookmark" href="favicon_16.ico" />
  <!-- site css -->
  <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,800,700,400italic,600italic,700italic,800italic,300italic" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="{{ mix('css/app.css') }}">
  <link rel="stylesheet" href="{{ mix('css/login.css') }}">
  <script type="text/javascript" src="{{ mix('js/all.js') }}"></script>
  <style>
    body {
      padding-top: 40px;
      padding-bottom: 40px;
      background-color: #303641;
      color: #C1C3C6
    }
  </style>
</head>

<body>
  @yield('content')
  <!--footer-->
  <div class="site-footer login-footer">
    <div class="container">
      <div class="copyright clearfix text-center">
        <p>{{ t('intro.app') }}</p>
        <p>{{ t('intro.dev') }}</p>
      </div>
    </div>
  </div>
  
</body>

</html>