const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
  .styles([
    'public/css/bootstrap.min.css',
    'public/css/style.css',
    'public/css/animate.min.css',
    'public/plugins/datatables/dataTables.bootstrap4.min.css',
    'public/plugins/datatables/switchery/switchery.min.css',
    'public/plugins/jstree/style.css',
    'public/plugins/jquery.filer/css/jquery.filer.css',
    'public/plugins/jquery.filer/css/themes/jquery.filer-dragdropbox-theme.css',
    'public/plugins/select2/css/select2.min.css',
    'public/plugins/ON-OFF-Toggle-Switches-Switcher/css/switcher.css',
    'public/font/css/font-awesome.min.css'
  ], 'public/css/all.css')
  .styles([
    'public/css/animate.min.css',
    'public/css/site.min.css'
  ], 'public/css/login.css')
  .scripts([
    'public/js/modernizr.min.js',
    'public/js/jquery.min.js',
    'public/js/moment.min.js',
    'public/js/popper.min.js',
    'public/js/bootstrap.min.js',
    'public/js/detect.js',
    'public/js/fastclick.js',
    'public/js/jquery.blockUI.js',
    'public/js/jquery.nicescroll.js',
    'public/js/jquery.scrollTo.min.js',
    'public/js/pikeadmin.js',
    'public/js/bootstrap-notify.js',
    'public/plugins/chart.js/chart.min.js',
    'public/plugins/datatables/jquery.dataTables.min.js',
    'public/plugins/datatables/dataTables.bootstrap4.min.js',
    'public/plugins/switchery/switchery.min.js',
    'public/plugins/waypoints/lib/jquery.waypoints.min.js',
    'public/plugins/counterup/jquery.counterup.min.js',
    'public/plugins/jstree/jstree.min.js',
    'public/plugins/jquery.filer/js/jquery.filer.min.js',
    'public/plugins/parsleyjs/parsley.min.js',
    'public/plugins/select2/js/select2.min.js',
    'public/plugins/ON-OFF-Toggle-Switches-Switcher/js/jquery.switcher.min.js'
  ], 'public/js/all.js')
  .version();
