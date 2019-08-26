const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
  .styles([
    'public/bower_components/bootstrap/dist/css/bootstrap.min.css',
    'public/bower_components/font-awesome/css/font-awesome.min.css',
    'public/bower_components/Ionicons/css/ionicons.min.css',
    'public/bower_components/jvectormap/jquery-jvectormap.css',
    'public/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css',
    'public/dist/css/AdminLTE.min.css',
    'public/dist/css/skins/_all-skins.min.css',
    'public/plugins/ON-OFF-Toggle-Switches-Switcher/css/switcher.css',
    'public/css/animate.min.css',
  ], 'public/css/all.css')
  .styles([
    'public/css/animate.min.css',
    'public/css/site.min.css'
  ], 'public/css/login.css')
  .scripts([
    'public/bower_components/jquery/dist/jquery.min.js',
    'public/bower_components/bootstrap/dist/js/bootstrap.min.js',
    'public/bower_components/fastclick/lib/fastclick.js',
    'public/bower_components/jquery-sparkline/dist/jquery.sparkline.min.js',
    'public/bower_components/select2/dist/js/select2.min.js',
    'public/bower_components/jquery-slimscroll/jquery.slimscroll.min.js',
    'public/bower_components/datatables.net/js/jquery.dataTables.min.js',
    'public/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js',
    'public/bower_components/chart.js/Chart.js',
    'public/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js',
    'public/plugins/jvectormap/jquery-jvectormap-world-mill-en.js',
    'public/plugins/bootstrap-notify-master/bootstrap-notify.min.js',
    'public/plugins/ON-OFF-Toggle-Switches-Switcher/js/jquery.switcher.min.js',
    'public/dist/js/pages/dashboard2.js',
    'public/dist/js/adminlte.min.js',
    'public/dist/js/demo.js'
  ], 'public/js/all.js')
  .version();
