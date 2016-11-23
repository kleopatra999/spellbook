var mkdirp = require('mkdirp');
var remark = require('remark');
var man = require('remark-man');
var glob = require('glob');
var version = require('../package.json').version;
var fs = require('fs');
var path = require('path');
var rootdir = path.join(__dirname, '..');
var basedir = path.join(rootdir, 'docs');
var distdir = path.join(rootdir, 'dist', 'man');

glob(path.join(basedir, '**', '*.md'), function(er, files) {
	if (er) {
		throw new Error(er);
	}
	files.forEach(function(file) {
		var originalContents = fs.readFileSync(file, 'utf8')
			.replace(/  /g, "\t");
		remark()
			.use(man, {version: version, manual: 'videojs-spellbook'})
			.process(originalContents, function(err, contents) {

				if (err) {
					throw new Error(err);
				}
				var distfile = file
					.replace(basedir, distdir)
					.replace('.md', '.1');

				console.log(file.replace(rootdir + path.sep, '') + ' -> ' + distfile.replace(rootdir + path.sep, ''));
				mkdirp.sync(path.dirname(distfile));
				fs.writeFileSync(distfile, contents);
			});
	})
});



