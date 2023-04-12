'use strict';

const fs = require( 'fs' ),
	path = require( 'path' ),
	files = require( '../package' ).files;

QUnit.module( 'package.json', () => {
	QUnit.test( 'All files are included', ( assert ) => {
		const excludeList = [
			'.eslintrc.json',
			'package.json',
			'package-lock.json'
		];
		fs.readdirSync( path.resolve( __dirname, '../' ) ).forEach( ( file ) => {
			const ext = path.extname( file );
			if (
				( ext === '.js' || ext === '.json' ) &&
				!excludeList.includes( file )
			) {
				assert.true( files.includes( file ), `'${file}' found in package.json's 'files' list` );
			}
		} );
	} );
} );
