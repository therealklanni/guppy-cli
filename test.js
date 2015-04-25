/* exported mv */
'use strict';

var test = require('tape');
var sh = require('shelljs');
var proxy = require('proxyquire');
var gup = proxy('./index.js', {
  'child_process': {
    exec: function(_, cb) {
      cb(null, '/some/path\n');
    }
  },
  'shelljs/global': {}
});
var mv = function(){};

test('install', function (t) {
  t.plan(1);

  gup.install('pre-commit', './', function () {
    t.equal(sh.test('-f', './pre-commit'), true, 'should create pre-commit hookfile');
    sh.rm('./pre-commit');
  });

});

test('installAll', function (t) {
  t.plan(17);

  gup.installAll('./', function (err, results) {
    if (err) t.fail('should not receive an error');
    t.ok(sh.test('-f', './applypatch-msg'), 'should create applypatch-msg hookfile');
    t.ok(sh.test('-f', './commit-msg'), 'should create commit-msg hookfile');
    t.ok(sh.test('-f', './post-applypatch'), 'should create post-applypatch hookfile');
    t.ok(sh.test('-f', './post-checkout'), 'should create post-checkout hookfile');
    t.ok(sh.test('-f', './post-commit'), 'should create post-commit hookfile');
    t.ok(sh.test('-f', './post-merge'), 'should create post-merge hookfile');
    t.ok(sh.test('-f', './post-receive'), 'should create post-receive hookfile');
    t.ok(sh.test('-f', './post-rewrite'), 'should create post-rewrite hookfile');
    t.ok(sh.test('-f', './post-update'), 'should create post-update hookfile');
    t.ok(sh.test('-f', './pre-applypatch'), 'should create pre-applypatch hookfile');
    t.ok(sh.test('-f', './pre-auto-gc'), 'should create pre-auto-gc hookfile');
    t.ok(sh.test('-f', './pre-commit'), 'should create pre-commit hookfile');
    t.ok(sh.test('-f', './pre-push'), 'should create pre-push hookfile');
    t.ok(sh.test('-f', './pre-rebase'), 'should create pre-rebase hookfile');
    t.ok(sh.test('-f', './pre-receive'), 'should create pre-receive hookfile');
    t.ok(sh.test('-f', './prepare-commit-msg'), 'should create prepare-commit-msg hookfile');
    t.ok(sh.test('-f', './update'), 'should create update hookfile');

    results.forEach(function (file) {
      var bak = file + '.guppy';

      if (sh.test('-f', file)) sh.rm(file);
      if (sh.test('-f', bak)) sh.rm(bak);
    });
  });
});
