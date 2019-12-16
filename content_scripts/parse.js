(function () {
	// Private properties
	var markdownLite = {},
		parsers = {}

	/**
	 * helper namespace
	 * @type {{}}
	 */
	markdownLite.helper = {};

	/**
	 * Get or set a subParser
	 *
	 * subParser(name)       - Get a registered subParser
	 * subParser(name, func) - Register a subParser
	 * @static
	 * @param {string} name
	 * @param {function} [func]
	 * @returns {*}
	 */
	markdownLite.subParser = function (name, func) {
		'use strict';
		if (markdownLite.helper.isString(name)) {
			if (typeof func !== 'undefined') {
				parsers[name] = func;
			} else {
				if (parsers.hasOwnProperty(name)) {
					return parsers[name];
				} else {
					throw Error('SubParser named ' + name + ' not registered!');
				}
			}
		}
	};

	/**
	 * markdownLitejs helper functions
	 */

	if (!markdownLite.hasOwnProperty('helper')) {
		markdownLite.helper = {};
	}

	/**
	 * Check if var is string
	 * @static
	 * @param {string} a
	 * @returns {boolean}
	 */
	markdownLite.helper.isString = function (a) {
		'use strict';
		return (typeof a === 'string' || a instanceof String);
	};

	/**
	 * Check if var is a function
	 * @static
	 * @param {*} a
	 * @returns {boolean}
	 */
	markdownLite.helper.isFunction = function (a) {
		'use strict';
		var getType = {};
		return a && getType.toString.call(a) === '[object Function]';
	};

	/**
	 * isArray helper function
	 * @static
	 * @param {*} a
	 * @returns {boolean}
	 */
	markdownLite.helper.isArray = function (a) {
		'use strict';
		return Array.isArray(a);
	};

	/**
	 * Check if value is undefined
	 * @static
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	 */
	markdownLite.helper.isUndefined = function (value) {
		'use strict';
		return typeof value === 'undefined';
	};

	/**
	 * ForEach helper function
	 * Iterates over Arrays and Objects (own properties only)
	 * @static
	 * @param {*} obj
	 * @param {function} callback Accepts 3 params: 1. value, 2. key, 3. the original array/object
	 */
	markdownLite.helper.forEach = function (obj, callback) {
		'use strict';
		// check if obj is defined
		if (markdownLite.helper.isUndefined(obj)) {
			throw new Error('obj param is required');
		}

		if (markdownLite.helper.isUndefined(callback)) {
			throw new Error('callback param is required');
		}

		if (!markdownLite.helper.isFunction(callback)) {
			throw new Error('callback param must be a function/closure');
		}

		if (typeof obj.forEach === 'function') {
			obj.forEach(callback);
		} else if (markdownLite.helper.isArray(obj)) {
			for (var i = 0; i < obj.length; i++) {
				callback(obj[i], i, obj);
			}
		} else if (typeof (obj) === 'object') {
			for (var prop in obj) {
				if (obj.hasOwnProperty(prop)) {
					callback(obj[prop], prop, obj);
				}
			}
		} else {
			throw new Error('obj does not seem to be an array or an iterable object');
		}
	};

	function escapeCharactersCallback(wholeMatch, m1) {
		'use strict';
		var charCodeToEscape = m1.charCodeAt(0);
		return '¨E' + charCodeToEscape + 'E';
	}

	/**
	 * Callback used to escape characters when passing through String.replace
	 * @static
	 * @param {string} wholeMatch
	 * @param {string} m1
	 * @returns {string}
	 */
	markdownLite.helper.escapeCharactersCallback = escapeCharactersCallback;

	/**
	 * Escape characters in a string
	 * @static
	 * @param {string} text
	 * @param {string} charsToEscape
	 * @param {boolean} afterBackslash
	 * @returns {XML|string|void|*}
	 */
	markdownLite.helper.escapeCharacters = function (text, charsToEscape, afterBackslash) {
		'use strict';
		// First we have to escape the escape characters so that
		// we can build a character class out of them
		var regexString = '([' + charsToEscape.replace(/([\[\]\\])/g, '\\$1') + '])';

		if (afterBackslash) {
			regexString = '\\\\' + regexString;
		}

		var regex = new RegExp(regexString, 'g');
		text = text.replace(regex, escapeCharactersCallback);

		return text;
	};

	/**
	 * Unescape HTML entities
	 * @param txt
	 * @returns {string}
	 */
	markdownLite.helper.unescapeHTMLEntities = function (txt) {
		'use strict';

		return txt
			.replace(/&quot;/g, '"')
			.replace(/&lt;/g, '<')
			.replace(/&gt;/g, '>')
			.replace(/&amp;/g, '&');
	};

	var rgxFindMatchPos = function (str, left, right, flags) {
		'use strict';
		var f = flags || '',
			g = f.indexOf('g') > -1,
			x = new RegExp(left + '|' + right, 'g' + f.replace(/g/g, '')),
			l = new RegExp(left, f.replace(/g/g, '')),
			pos = [],
			t, s, m, start, end;

		do {
			t = 0;
			while ((m = x.exec(str))) {
				if (l.test(m[0])) {
					if (!(t++)) {
						s = x.lastIndex;
						start = s - m[0].length;
					}
				} else if (t) {
					if (!--t) {
						end = m.index + m[0].length;
						var obj = {
							left: {
								start: start,
								end: s
							},
							match: {
								start: s,
								end: m.index
							},
							right: {
								start: m.index,
								end: end
							},
							wholeMatch: {
								start: start,
								end: end
							}
						};
						pos.push(obj);
						if (!g) {
							return pos;
						}
					}
				}
			}
		} while (t && (x.lastIndex = s));

		return pos;
	};

	/**
	 * matchRecursiveRegExp
	 *
	 * (c) 2007 Steven Levithan <stevenlevithan.com>
	 * MIT License
	 *
	 * Accepts a string to search, a left and right format delimiter
	 * as regex patterns, and optional regex flags. Returns an array
	 * of matches, allowing nested instances of left/right delimiters.
	 * Use the "g" flag to return all matches, otherwise only the
	 * first is returned. Be careful to ensure that the left and
	 * right format delimiters produce mutually exclusive matches.
	 * Backreferences are not supported within the right delimiter
	 * due to how it is internally combined with the left delimiter.
	 * When matching strings whose format delimiters are unbalanced
	 * to the left or right, the output is intentionally as a
	 * conventional regex library with recursion support would
	 * produce, e.g. "<<x>" and "<x>>" both produce ["x"] when using
	 * "<" and ">" as the delimiters (both strings contain a single,
	 * balanced instance of "<x>").
	 *
	 * examples:
	 * matchRecursiveRegExp("test", "\\(", "\\)")
	 * returns: []
	 * matchRecursiveRegExp("<t<<e>><s>>t<>", "<", ">", "g")
	 * returns: ["t<<e>><s>", ""]
	 * matchRecursiveRegExp("<div id=\"x\">test</div>", "<div\\b[^>]*>", "</div>", "gi")
	 * returns: ["test"]
	 */
	markdownLite.helper.matchRecursiveRegExp = function (str, left, right, flags) {
		'use strict';

		var matchPos = rgxFindMatchPos(str, left, right, flags),
			results = [];

		for (var i = 0; i < matchPos.length; ++i) {
			results.push([
				str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
				str.slice(matchPos[i].match.start, matchPos[i].match.end),
				str.slice(matchPos[i].left.start, matchPos[i].left.end),
				str.slice(matchPos[i].right.start, matchPos[i].right.end)
			]);
		}
		return results;
	};

	/**
	 *
	 * @param {string} str
	 * @param {string|function} replacement
	 * @param {string} left
	 * @param {string} right
	 * @param {string} flags
	 * @returns {string}
	 */
	markdownLite.helper.replaceRecursiveRegExp = function (str, replacement, left, right, flags) {
		'use strict';

		if (!markdownLite.helper.isFunction(replacement)) {
			var repStr = replacement;
			replacement = function () {
				return repStr;
			};
		}

		var matchPos = rgxFindMatchPos(str, left, right, flags),
			finalStr = str,
			lng = matchPos.length;

		if (lng > 0) {
			var bits = [];
			if (matchPos[0].wholeMatch.start !== 0) {
				bits.push(str.slice(0, matchPos[0].wholeMatch.start));
			}
			for (var i = 0; i < lng; ++i) {
				bits.push(
					replacement(
						str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
						str.slice(matchPos[i].match.start, matchPos[i].match.end),
						str.slice(matchPos[i].left.start, matchPos[i].left.end),
						str.slice(matchPos[i].right.start, matchPos[i].right.end)
					)
				);
				if (i < lng - 1) {
					bits.push(str.slice(matchPos[i].wholeMatch.end, matchPos[i + 1].wholeMatch.start));
				}
			}
			if (matchPos[lng - 1].wholeMatch.end < str.length) {
				bits.push(str.slice(matchPos[lng - 1].wholeMatch.end));
			}
			finalStr = bits.join('');
		}
		return finalStr;
	};

	/**
	 * Returns the index within the passed String object of the first occurrence of the specified regex,
	 * starting the search at fromIndex. Returns -1 if the value is not found.
	 *
	 * @param {string} str string to search
	 * @param {RegExp} regex Regular expression to search
	 * @param {int} [fromIndex = 0] Index to start the search
	 * @returns {Number}
	 * @throws InvalidArgumentError
	 */
	markdownLite.helper.regexIndexOf = function (str, regex, fromIndex) {
		'use strict';
		if (!markdownLite.helper.isString(str)) {
			throw 'InvalidArgumentError: first parameter of markdownLite.helper.regexIndexOf function must be a string';
		}
		if (regex instanceof RegExp === false) {
			throw 'InvalidArgumentError: second parameter of markdownLite.helper.regexIndexOf function must be an instance of RegExp';
		}
		var indexOf = str.substring(fromIndex || 0).search(regex);
		return (indexOf >= 0) ? (indexOf + (fromIndex || 0)) : indexOf;
	};

	/**
	 * Splits the passed string object at the defined index, and returns an array composed of the two substrings
	 * @param {string} str string to split
	 * @param {int} index index to split string at
	 * @returns {[string,string]}
	 * @throws InvalidArgumentError
	 */
	markdownLite.helper.splitAtIndex = function (str, index) {
		'use strict';
		if (!markdownLite.helper.isString(str)) {
			throw 'InvalidArgumentError: first parameter of markdownLite.helper.regexIndexOf function must be a string';
		}
		return [str.substring(0, index), str.substring(index)];
	};

	/**
	 *
	 * @param str
	 * @param targetLength
	 * @param padString
	 * @returns {string}
	 */
	markdownLite.helper.padEnd = function padEnd(str, targetLength, padString) {
		'use strict';
		targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
		padString = String(padString || ' ');
		if (str.length > targetLength) {
			return String(str);
		} else {
			targetLength = targetLength - str.length;
			if (targetLength > padString.length) {
				padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
			}
			return String(str) + padString.slice(0, targetLength);
		}
	};

	/**
	 * Common regexes.
	 * We declare some common regexes to improve performance
	 */
	markdownLite.helper.regexes = {
		asteriskDashAndColon: /([*_:~])/g
	};

	/**
	 * EMOJIS LIST
	 */
	markdownLite.helper.emojis = emojiMap;

	/**
	 * Created by Estevao on 31-05-2015.
	 */

	/**
	 * markdownLite Converter class
	 * @class
	 * @returns {Converter}
	 */
	markdownLite.Converter = function () {
		'use strict';

		var
			/**
			 * Language extensions used by this converter
			 * @private
			 * @type {Array}
			 */
			langExtensions = [],

			/**
			 * Output modifiers extensions used by this converter
			 * @private
			 * @type {Array}
			 */
			outputModifiers = [],

			/**
			 * Event listeners
			 * @private
			 * @type {{}}
			 */
            listeners = {},
            
			/**
			 * Metadata of the document
			 * @type {{parsed: {}, raw: string, format: string}}
			 */
			metadata = {
				parsed: {},
				raw: '',
				format: ''
			};

		_constructor();

		/**
		 * Converter constructor
		 * @private
		 */
		function _constructor() {

		}

		/**
		 * Listen to an event
		 * @param {string} name
		 * @param {function} callback
		 */
		function listen(name, callback) {
			if (!markdownLite.helper.isString(name)) {
				throw Error('Invalid argument in converter.listen() method: name must be a string, but ' + typeof name + ' given');
			}

			if (typeof callback !== 'function') {
				throw Error('Invalid argument in converter.listen() method: callback must be a function, but ' + typeof callback + ' given');
			}

			if (!listeners.hasOwnProperty(name)) {
				listeners[name] = [];
			}
			listeners[name].push(callback);
		}

		function rTrimInputText(text) {
			var rsp = text.match(/^\s*/)[0].length,
				rgx = new RegExp('^\\s{0,' + rsp + '}', 'gm');
			return text.replace(rgx, '');
		}

		/**
		 * Dispatch an event
		 * @private
		 * @param {string} evtName Event name
		 * @param {string} text Text
		 * @param {{}} globals
		 * @returns {string}
		 */
		this._dispatch = function dispatch(evtName, text, globals) {
			if (listeners.hasOwnProperty(evtName)) {
				for (var ei = 0; ei < listeners[evtName].length; ++ei) {
					var nText = listeners[evtName][ei](evtName, text, this, globals);
					if (nText && typeof nText !== 'undefined') {
						text = nText;
					}
				}
			}
			return text;
		};

		/**
		 * Listen to an event
		 * @param {string} name
		 * @param {function} callback
		 * @returns {markdownLite.Converter}
		 */
		this.listen = function (name, callback) {
			listen(name, callback);
			return this;
		};

		/**
		 * Converts a markdown string into HTML
		 * @param {string} text
		 * @returns {*}
		 */
		this.makeHtml = function (text) {
			//check if text is not falsy
			if (!text) {
				return text;
			}

			var globals = {
				gHtmlBlocks: [],
				gHtmlMdBlocks: [],
				gHtmlSpans: [],
				gUrls: {},
				gTitles: {},
				gDimensions: {},
				gListLevel: 0,
				hashLinkCounts: {},
				langExtensions: langExtensions,
				outputModifiers: outputModifiers,
				converter: this,
				ghCodeBlocks: [],
				metadata: {
					parsed: {},
					raw: '',
					format: ''
				}
			};

			// This lets us use ¨ trema as an escape char to avoid md5 hashes
			// The choice of character is arbitrary; anything that isn't
			// magic in Markdown will work.
			text = text.replace(/¨/g, '¨T');

			// Replace $ with ¨D
			// RegExp interprets $ as a special character
			// when it's in a replacement string
			text = text.replace(/\$/g, '¨D');

			// Standardize line endings
			text = text.replace(/\r\n/g, '\n'); // DOS to Unix
			text = text.replace(/\r/g, '\n'); // Mac to Unix

			// Stardardize line spaces
			text = text.replace(/\u00A0/g, '&nbsp;');

			// Make sure text begins and ends with a couple of newlines:
			text = '\n\n' + text + '\n\n';

			/**
			 * Strip any lines consisting only of spaces and tabs.
			 * This makes subsequent regexs easier to write, because we can
			 * match consecutive blank lines with /\n+/ instead of something
			 * contorted like /[ \t]*\n+/
			 */
			text = text.replace(/^[ \t]+$/mg, '');

			//run languageExtensions
			markdownLite.helper.forEach(langExtensions, function (ext) {
				text = markdownLite.subParser('runExtension')(ext, text, globals);
			});

			// run the sub parsers
			text = markdownLite.subParser('hashHTMLBlocks')(text, globals);
			text = markdownLite.subParser('blockGamut')(text, globals);

			// attacklab: Restore dollar signs
			text = text.replace(/¨D/g, '$$');

			// attacklab: Restore tremas
			text = text.replace(/¨T/g, '¨');

			// render a complete html document instead of a partial if the option is enabled

			// Run output modifiers
			markdownLite.helper.forEach(outputModifiers, function (ext) {
				text = markdownLite.subParser('runExtension')(ext, text, globals);
			});

			// update metadata
			metadata = globals.metadata;
			return text;
		};

		/**
		 * Get the metadata of the previously parsed document
		 * @param raw
		 * @returns {string|{}}
		 */
		this.getMetadata = function (raw) {
			if (raw) {
				return metadata.raw;
			} else {
				return metadata.parsed;
			}
		};

		/**
		 * Get the metadata format of the previously parsed document
		 * @returns {string}
		 */
		this.getMetadataFormat = function () {
			return metadata.format;
		};

		/**
		 * Private: set a single key, value metadata pair
		 * @param {string} key
		 * @param {string} value
		 */
		this._setMetadataPair = function (key, value) {
			metadata.parsed[key] = value;
		};

		/**
		 * Private: set metadata format
		 * @param {string} format
		 */
		this._setMetadataFormat = function (format) {
			metadata.format = format;
		};

		/**
		 * Private: set metadata raw text
		 * @param {string} raw
		 */
		this._setMetadataRaw = function (raw) {
			metadata.raw = raw;
		};
	};

	/**
	 * Turn Markdown link shortcuts into XHTML <a> tags.
	 */
	markdownLite.subParser('colors', function (text, globals) {
		'use strict';

		text = globals.converter._dispatch('colors.before', text, globals);
		var writeColorTag = function (wholeMatch, str, linkId, color) {

			color = color.replace(markdownLite.helper.regexes.asteriskDashAndColon, markdownLite.helper.escapeCharactersCallback);

			var result = '<span style="color:' + color + ';"';

			result += '>' + str + '</span>';

			return result;
		};

		// normal cases
		text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
			writeColorTag);

		text = globals.converter._dispatch('colors.after', text, globals);
		return text;
	});

	/**
	 * These are all the transformations that form block-level
	 * tags like paragraphs, headers, and list items.
	 */
	markdownLite.subParser('blockGamut', function (text, globals) {
		'use strict';

		text = globals.converter._dispatch('blockGamut.before', text, globals);

		// We already ran _HashHTMLBlocks() before, in Markdown(), but that
		// was to escape raw HTML in the original Markdown source. This time,
		// we're escaping the markup we've just created, so that we don't wrap
		// <p> tags around block-level tags.
		text = markdownLite.subParser('hashHTMLBlocks')(text, globals);
		text = markdownLite.subParser('paragraphs')(text, globals);

		text = globals.converter._dispatch('blockGamut.after', text, globals);

		return text;
	});

	/**
	 * Turn emoji codes into emojis
	 *
	 * List of supported emojis: https://github.com/markdownLitejs/markdownLite/wiki/Emojis
	 */
	markdownLite.subParser('emoji', function (text, globals) {
		'use strict';

		text = globals.converter._dispatch('emoji.before', text, globals);

		var emojiRgx = /:([\S]+?):/g;

		text = text.replace(emojiRgx, function (wm, emojiCode) {
			if (markdownLite.helper.emojis.hasOwnProperty(emojiCode)) {
				return markdownLite.helper.emojis[emojiCode];
			}
			return wm;
		});

		text = globals.converter._dispatch('emoji.after', text, globals);

		return text;
	});

	/**
	 * Encode/escape certain characters inside Markdown code runs.
	 * The point is that in code, these characters are literals,
	 * and lose their special Markdown meanings.
	 */
	markdownLite.subParser('encodeCode', function (text, globals) {
		'use strict';

		text = globals.converter._dispatch('encodeCode.before', text, globals);

		// Encode all ampersands; HTML entities are not
		// entities within a Markdown code span.
		text = text
			.replace(/&/g, '&amp;')
			// Do the angle bracket song and dance:
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			// Now, escape characters that are magic in Markdown:
			.replace(/([*_{}\[\]\\=~-])/g, markdownLite.helper.escapeCharactersCallback);

		text = globals.converter._dispatch('encodeCode.after', text, globals);
		return text;
	});

	markdownLite.subParser('hashElement', function (text, globals) {
		'use strict';

		return function (wholeMatch, m1) {
			var blockText = m1;

			// Undo double lines
			blockText = blockText.replace(/\n\n/g, '\n');
			blockText = blockText.replace(/^\n/, '');

			// strip trailing blank lines
			blockText = blockText.replace(/\n+$/g, '');

			// Replace the element text with a marker ("¨KxK" where x is its key)
			blockText = '\n\n¨K' + (globals.gHtmlBlocks.push(blockText) - 1) + 'K\n\n';

			return blockText;
		};
	});

	markdownLite.subParser('hashHTMLBlocks', function (text, globals) {
		'use strict';
		text = globals.converter._dispatch('hashHTMLBlocks.before', text, globals);

		var blockTags = [
				'pre',
				'div',
				'h1',
				'h2',
				'h3',
				'h4',
				'h5',
				'h6',
				'blockquote',
				'table',
				'dl',
				'ol',
				'ul',
				'script',
				'noscript',
				'form',
				'fieldset',
				'iframe',
				'math',
				'style',
				'section',
				'header',
				'footer',
				'nav',
				'article',
				'aside',
				'address',
				'audio',
				'canvas',
				'figure',
				'hgroup',
				'output',
				'video',
				'p'
			],
			repFunc = function (wholeMatch, match, left, right) {
				var txt = wholeMatch;
				// check if this html element is marked as markdown
				// if so, it's contents should be parsed as markdown
				if (left.search(/\bmarkdown\b/) !== -1) {
					txt = left + globals.converter.makeHtml(match) + right;
				}
				return '\n\n¨K' + (globals.gHtmlBlocks.push(txt) - 1) + 'K\n\n';
			};

		for (var i = 0; i < blockTags.length; ++i) {

			var opTagPos,
				rgx1 = new RegExp('^ {0,3}(<' + blockTags[i] + '\\b[^>]*>)', 'im'),
				patLeft = '<' + blockTags[i] + '\\b[^>]*>',
				patRight = '</' + blockTags[i] + '>';
			// 1. Look for the first position of the first opening HTML tag in the text
			while ((opTagPos = markdownLite.helper.regexIndexOf(text, rgx1)) !== -1) {

				//1. Split the text in that position
				var subTexts = markdownLite.helper.splitAtIndex(text, opTagPos),
					//2. Match recursively
					newSubText1 = markdownLite.helper.replaceRecursiveRegExp(subTexts[1], repFunc, patLeft, patRight, 'im');

				// prevent an infinite loop
				if (newSubText1 === subTexts[1]) {
					break;
				}
				text = subTexts[0].concat(newSubText1);
			}
		}
		// HR SPECIAL CASE
		text = text.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
			markdownLite.subParser('hashElement')(text, globals));

		// Special case for standalone HTML comments
		text = markdownLite.helper.replaceRecursiveRegExp(text, function (txt) {
			return '\n\n¨K' + (globals.gHtmlBlocks.push(txt) - 1) + 'K\n\n';
		}, '^ {0,3}<!--', '-->', 'gm');

		// PHP and ASP-style processor instructions (<?...?> and <%...%>)
		text = text.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
			markdownLite.subParser('hashElement')(text, globals));

		text = globals.converter._dispatch('hashHTMLBlocks.after', text, globals);
		return text;
	});

    markdownLite.subParser('italicsAndBold', function (text, globals) {
		'use strict';

		text = globals.converter._dispatch('italicsAndBold.before', text, globals);

		// it's faster to have 3 separate regexes for each case than have just one
		// because of backtracing, in some cases, it could lead to an exponential effect
		// called "catastrophic backtrace". Ominous!

		function parseInside(txt, left, right) {
			return left + txt + right;
		}

        // Bold and italics
		text = text.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function (wm, m) {
			return (/\S$/.test(m)) ? parseInside(m, '<strong><em>', '</em></strong>') : wm;
        });
        // Bold
		text = text.replace(/\*\*(\S[\s\S]*?)\*\*/g, function (wm, m) {
			return (/\S$/.test(m)) ? parseInside(m, '<strong>', '</strong>') : wm;
        });
        // Italics
		text = text.replace(/\*([^\s*][\s\S]*?)\*/g, function (wm, m) {
			// !/^\*[^*]/.test(m) - test if it doesn't start with ** (since it seems redundant, we removed it)
			return (/\S$/.test(m)) ? parseInside(m, '<em>', '</em>') : wm;
		});


		text = globals.converter._dispatch('italicsAndBold.after', text, globals);
		return text;
	});

	/**
	 *
	 */
	markdownLite.subParser('paragraphs', function (text, globals) {
		'use strict';

		text = globals.converter._dispatch('paragraphs.before', text, globals);
		// Strip leading and trailing lines:
		text = text.replace(/^\n+/g, '');
		text = text.replace(/\n+$/g, '');

		var grafs = text.split(/\n{2,}/g),
			grafsOut = [],
			end = grafs.length; // Wrap <p> tags

		for (var i = 0; i < end; i++) {
			var str = grafs[i];
			// if this is an HTML marker, copy it
			if (str.search(/¨(K|G)(\d+)\1/g) >= 0) {
				grafsOut.push(str);

				// test for presence of characters to prevent empty lines being parsed
				// as paragraphs (resulting in undesired extra empty paragraphs)
			} else if (str.search(/\S/) >= 0) {
				str = markdownLite.subParser('spanGamut')(str, globals);
				str = str.replace(/^([ \t]*)/g, '<p>');
				str += '</p>';
				grafsOut.push(str);
			}
		}

		/** Unhashify HTML blocks */
		end = grafsOut.length;
		for (i = 0; i < end; i++) {
			var blockText = '',
				grafsOutIt = grafsOut[i],
				codeFlag = false;
			// if this is a marker for an html block...
			// use RegExp.test instead of string.search because of QML bug
			while (/¨(K|G)(\d+)\1/.test(grafsOutIt)) {
				var delim = RegExp.$1,
					num = RegExp.$2;

				if (delim === 'K') {
					blockText = globals.gHtmlBlocks[num];
				} else {
					// we need to check if ghBlock is a false positive
					if (codeFlag) {
						// use encoded version of all text
						blockText = markdownLite.subParser('encodeCode')(globals.ghCodeBlocks[num].text, globals);
					} else {
						blockText = globals.ghCodeBlocks[num].codeblock;
					}
				}
				blockText = blockText.replace(/\$/g, '$$$$'); // Escape any dollar signs

				grafsOutIt = grafsOutIt.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, blockText);
				// Check if grafsOutIt is a pre->code
				if (/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(grafsOutIt)) {
					codeFlag = true;
				}
			}
			grafsOut[i] = grafsOutIt;
		}
		text = grafsOut.join('\n');
		// Strip leading and trailing lines:
		text = text.replace(/^\n+/g, '');
		text = text.replace(/\n+$/g, '');
		return globals.converter._dispatch('paragraphs.after', text, globals);
	});

	/**
	 * These are all the transformations that occur *within* block-level
	 * tags like paragraphs, headers, and list items.
	 */
	markdownLite.subParser('spanGamut', function (text, globals) {
		'use strict';

		text = globals.converter._dispatch('spanGamut.before', text, globals);

		text = markdownLite.subParser('colors')(text, globals);

		// Make links out of things like `<http://example.com/>`
		// Must come after anchors, because you can use < and >
		// delimiters in inline links like [this](<url>).
		text = markdownLite.subParser('emoji')(text, globals);
		text = markdownLite.subParser('underline')(text, globals);
		text = markdownLite.subParser('italicsAndBold')(text, globals);
		text = markdownLite.subParser('strikethrough')(text, globals);
		text = markdownLite.subParser('enlarge')(text, globals);

		// Do hard breaks
		text = text.replace(/  +\n/g, '<br />\n');

		text = globals.converter._dispatch('spanGamut.after', text, globals);
		return text;
	});

	markdownLite.subParser('strikethrough', function (text, globals) {
		'use strict';

		function parseInside(txt) {
			return '<span style="text-decoration: line-through;">' + txt + '</span>';
		}
		text = globals.converter._dispatch('strikethrough.before', text, globals);
		text = text.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function (wm, txt) {
			return parseInside(txt);
		});
		text = globals.converter._dispatch('strikethrough.after', text, globals);

		return text;
	});

	markdownLite.subParser('enlarge', function (text, globals) {
		'use strict';

		function parseInside(txt) {
			return '<span style="font-size: 1.5em;">' + txt + '</span>';
		}
		text = globals.converter._dispatch('enlarge.before', text, globals);
		text = text.replace(/(?:#){2}([\s\S]+?)(?:#){2}/g, function (wm, txt) {
			return parseInside(txt);
		});
		text = globals.converter._dispatch('enlarge.after', text, globals);

		return text;
	});

	markdownLite.subParser('underline', function (text, globals) {
		'use strict';

		text = globals.converter._dispatch('underline.before', text, globals);

		text = text.replace(/___(\S[\s\S]*?)___/g, function (wm, m) {
			return (/\S$/.test(m)) ? '<span style="text-decoration: underline;">' + m + '</span>' : wm;
		});
		text = text.replace(/__(\S[\s\S]*?)__/g, function (wm, m) {
			return (/\S$/.test(m)) ? '<span style="text-decoration: underline;">' + m + '</span>' : wm;
		});

		// escape remaining underscores to prevent them being parsed by italic and bold
		text = text.replace(/(_)/g, markdownLite.helper.escapeCharactersCallback);

		text = globals.converter._dispatch('underline.after', text, globals);

		return text;
	});

	var root = this;

	root.markdownLite = markdownLite;
}).call(this);