# Wikimedia Browserslist browserslist-config-wikimedia
Shareable [Browserslist](https://github.com/ai/browserslist) configuration for [Wikimedia projects](https://www.wikimedia.org/).

Configuration list to target the **[Wikimedia and MediaWiki supported browsers](https://www.mediawiki.org/wiki/Compatibility#Browser_support_matrix)**.

## Install
```bash
$ npm install --save-dev browserslist-config-wikimedia
```

## Use

1. To use this package in an application, add this to your `package.json`:

```js
{
	"browserslist": [
		"extends browserslist-config-wikimedia/modern"
	]
}
```
2. Or add this line into your Browserslist config file `.browserslistrc`:

```
extends browserslist-config-wikimedia/modern
```

3. To manually configure a tool that uses Browserslist, importing this package returns the array of supported browsers.

For example, when configuring [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) via JavaScript:

```js
{
  presets: [
	[ 'env', {
		targets: {
			browsers: require( 'browserslist-config-wikimedia/modern' )
		}
	} ]
  ]
}
```

4. To override or slightly adapt one of the available Browserslist configurations, modern or basic, add your overrides to the list. Exemplified with `.browerslistrc`:
```
extends browserslist-config-wikimedia/basic
not Android <= 8
```


## License
This is available under the [MIT LICENSE](LICENSE).
