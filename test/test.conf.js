basePath = '..';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'components/jquery/jquery.js',
  'components/jquery-ui/ui/jquery-ui.js',
  'components/angular/angular.js',
  'components/angular-mocks/angular-mocks.js',
  'src/bootstrap-growl.js',
  'test/*.spec.js'
];

preprocessors = {
  'src/bootstrap-growl.js': 'coverage'
};

singleRun = true;

browsers = [ 'Chrome' ];