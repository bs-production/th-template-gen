/**
 * @license
 * Lodash (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash include="debounce" -o lodash.debounce.js`
 */
;(function(){function e(){}function t(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function n(e){return null!=e&&typeof e=="object"}function o(e){var t;if(!(t=typeof e=="symbol")&&(t=n(e))){if(null==e)e=e===i?"[object Undefined]":"[object Null]";else if(v&&v in Object(e)){t=d.call(e,v);var o=e[v];try{e[v]=i;var r=true}catch(e){}var u=j.call(e);r&&(t?e[v]=o:delete e[v]),e=u}else e=j.call(e);t="[object Symbol]"==e}return t}function r(e){if(typeof e=="number")return e;if(o(e))return u;
if(t(e)&&(e=typeof e.valueOf=="function"?e.valueOf():e,e=t(e)?e+"":e),typeof e!="string")return 0===e?e:+e;e=e.replace(f,"");var n=l.test(e);return n||a.test(e)?s(e.slice(2),n?2:8):c.test(e)?u:+e}var i,u=NaN,f=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,a=/^0o[0-7]+$/i,s=parseInt,b=typeof self=="object"&&self&&self.Object===Object&&self,p=typeof global=="object"&&global&&global.Object===Object&&global||b||Function("return this")(),y=(b=typeof exports=="object"&&exports&&!exports.nodeType&&exports)&&typeof module=="object"&&module&&!module.nodeType&&module,m=Object.prototype,d=m.hasOwnProperty,j=m.toString,v=(m=p.Symbol)?m.toStringTag:i,g=Math.max,O=Math.min,x=function(){
return p.Date.now()};e.debounce=function(e,n,o){function u(t){var n=s,o=b;return s=b=i,j=t,y=e.apply(o,n)}function f(e){var t=e-d;return e-=j,d===i||t>=n||0>t||h&&e>=p}function c(){var e=x();if(f(e))return l(e);var t,o=setTimeout;t=e-j,e=n-(e-d),t=h?O(e,p-t):e,m=o(c,t)}function l(e){return m=i,T&&s?u(e):(s=b=i,y)}function a(){var e=x(),t=f(e);if(s=arguments,b=this,d=e,t){if(m===i)return j=e=d,m=setTimeout(c,n),v?u(e):y;if(h)return m=setTimeout(c,n),u(d)}return m===i&&(m=setTimeout(c,n)),y}var s,b,p,y,m,d,j=0,v=false,h=false,T=true;
if(typeof e!="function")throw new TypeError("Expected a function");return n=r(n)||0,t(o)&&(v=!!o.leading,p=(h="maxWait"in o)?g(r(o.maxWait)||0,n):p,T="trailing"in o?!!o.trailing:T),a.cancel=function(){m!==i&&clearTimeout(m),j=0,s=d=b=m=i},a.flush=function(){return m===i?y:l(x())},a},e.isObject=t,e.isObjectLike=n,e.isSymbol=o,e.now=x,e.toNumber=r,e.VERSION="4.17.5",typeof define=="function"&&typeof define.amd=="object"&&define.amd?(p._=e, define(function(){return e})):y?((y.exports=e)._=e,b._=e):p._=e;
}).call(this);

//v4 init

(function() {
    window.addEventListener('load', superToggle);  //initialize toggle buttons
    window.addEventListener('load', hoverNav);  //initialize nav manu dropdowns

    // For desktop screens, stick header to top on scroll
    if (window.innerWidth > 1024) {
        var navHeightSet = 0;
        var navHeight;
        var header = document.getElementById('header');
        console.log('Desktop size screen - sticky nav enabled');

        document.addEventListener('scroll', _.debounce(stickyHead, 250, { 'maxWait': 1000 }));


        // Stick header to top
        function stickyHead() {
            if (navHeightSet === 0) {
                navHeight = header.offsetHeight;
                navHeightSet = 1;
                console.log('Nav Height: ' + navHeight);
            }
            if (window.pageYOffset > 200) {
                document.getElementById('template-wrap').style.paddingTop = header.offsetHeight + 'px';
                header.classList.add('fixed-head');
                console.log('Offset: ' + window.pageYOffset);
            } else {
                header.classList.remove('fixed-head');
                document.getElementById('template-wrap').style.paddingTop = 0;
                console.log('Offset less than nav height: unsticking nav');
            }
        }
    }

    // Treehouse SuperToggle Script
    // Manipulate clickable dropdowns, mobile submenus, accordions & tabs
    // For tabs: Enclose all tab toggle buttons in .tab-nav
    // Based on https://codepen.io/anon/pen/qGOxBG
    function superToggle() {
        var supertoggles = document.querySelectorAll('.super-toggle');
        for (var i = 0; i < supertoggles.length; i++) {
            supertoggles[i].addEventListener('click', function(event) {
                // Set up variables
                var toggle = event.target;
                var content, panels, selected;

                // Get container element
                var parent = toggle.parentElement.parentElement;

                // Get the target content
                if (parent.classList.contains('tabs')) {
                    content = document.querySelector(toggle.hash);
                } else {
                    content = toggle.nextElementSibling;
                }
                if (!content) return;

                // Prevent default link behavior
                event.preventDefault();

                // Toggle panels
                var isOpen = content.classList.contains('active') === true;
                var isTab = parent.classList.contains('tabs') === true;

                if (isOpen) {
                    if (!isTab) {
                        closePanel();
                    }
                    return;
                }

                // Close all open content
                closeOthers();

                // Toggle current content
                openPanel();

                // Functions
                function openPanel() {
                    content.classList.toggle('active');
                    toggle.classList.toggle('selected');
                }
                function closePanel() {
                    content.classList.remove('active');
                    toggle.classList.remove('selected');
                }
                function closeOthers() {
                    panels = parent.querySelectorAll('.super-content.active');
                    selected = parent.querySelectorAll('.super-toggle.selected');

                    for (var i = 0; i < panels.length; i++) {
                        panels[i].classList.remove('active');
                        selected[i].classList.remove('selected');
                    }
                }
            });
        }
    }

    // Expand nav menus on hover
    function hoverNav() {
        var navitems = document.querySelectorAll('.nav-item.has-dropdown');
        for (var i = 0; i < navitems.length; i++) {
            navitems[i].addEventListener('mouseover', function() {
                this.classList.add('active');
            });
            navitems[i].addEventListener('mouseout', function() {
                this.classList.remove('active');
            });
        }
    }
})();

// Global debounce + throttle functions
/*function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};
function throttle(callback, limit) {
    var wait = false;
    return function () {
        if (!wait) {
            callback.call();
            wait = true;
            setTimeout(function () {
                wait = false;
            }, limit);
        }
    }
}*/
// Pushbar - Off-Canvas Menu
class Pushbar {
    constructor(config = { overlay: true, blur: false }) {
        this.activeBar = null;
        this.overlay = false;

        if (config.overlay) {
        this.overlay = document.createElement('div');
        this.overlay.classList.add('pushbar_overlay');
        document.querySelector('body').appendChild(this.overlay);
        }

        if (config.blur) {
        const mainContent = document.querySelector('#template-wrap');
        if (mainContent) {
            mainContent.classList.add('pushbar_blur');
        }
        }

        this.bindEvents();
    }

    get opened() {
        const { activeBar } = this;
        return Boolean(activeBar instanceof HTMLElement && activeBar.classList.contains('opened'));
    }

    get activeBarId() {
        const { activeBar } = this;
        return activeBar instanceof HTMLElement && activeBar.getAttribute('data-pushbar-id');
    }

    static dispatchOpen(pushbar) {
        const event = new CustomEvent('pushbar_opening', { bubbles: true, detail: { pushbar } });
        pushbar.dispatchEvent(event);
    }

    static dispatchClose(pushbar) {
        const event = new CustomEvent('pushbar_closing', { bubbles: true, detail: { pushbar } });
        pushbar.dispatchEvent(event);
    }

    static findElementById(pushbarId) {
        return document.querySelector(`[data-pushbar-id="${pushbarId}"]`);
    }

    handleOpenEvent(e) {
        e.preventDefault();
        const pushbarId = e.currentTarget.getAttribute('data-pushbar-target');
        if (pushbarId) {
            this.open(pushbarId);
        }
    }

    handleCloseEvent(e) {
        e.preventDefault();
        this.close();
    }

    handleKeyEvent(e) {
        if (this.opened && e.keyCode === 27) {
            this.close();
        }
    }

    bindEvents() {
        const triggers = document.querySelectorAll('[data-pushbar-target]');
        const closers = document.querySelectorAll('[data-pushbar-close]');

        triggers.forEach(trigger => trigger.addEventListener('click', e => this.handleOpenEvent(e), false));
        closers.forEach(closer => closer.addEventListener('click', e => this.handleCloseEvent(e), false));

        if (this.overlay) {
            this.overlay.addEventListener('click', e => this.handleCloseEvent(e), false);
        }
        document.addEventListener('keyup', e => this.handleKeyEvent(e));
    }

    open(pushbarId) {
        // Current bar is already opened
        if (String(pushbarId) === this.activeBarId && this.opened) {
            return;
        }

        // Get new pushbar target
        const pushbar = Pushbar.findElementById(pushbarId);

        if (!pushbar) return;

        // Close active bar (if exists)
        if (this.opened) {
            this.close();
        }

        Pushbar.dispatchOpen(pushbar);
        pushbar.classList.add('opened');

        const Root = document.querySelector('html');
        Root.classList.add('pushbar_locked');
        Root.setAttribute('pushbar', pushbarId);
        this.activeBar = pushbar;
    }

    close() {
        const { activeBar } = this;
        if (!activeBar) return;

        Pushbar.dispatchClose(activeBar);
        activeBar.classList.remove('opened');

        const Root = document.querySelector('html');
        Root.classList.remove('pushbar_locked');
        Root.removeAttribute('pushbar');

        this.activeBar = null;
    }
}


// Popbox Modal
class Popbox{
	constructor(config = {blur:false}){
		this.currently_opened = [];
		if('blur' in config){
			if(config.blur){
				var main_content = document.querySelector('#template-wrap');
				if(main_content){
					main_content.classList.add('popbox_blur');
				}
			}
		}
		this.bindEvents();

	}
	bindEvents(){
		var triggers = document.querySelectorAll('[data-popbox-target]');
		var closers = document.querySelectorAll('[data-popbox-close]');
		var popboxs = document.querySelectorAll('[data-popbox-id]');
		var self = this;
		if(triggers){
			for (var i = 0; i < triggers.length; i++) {
                triggers[i].addEventListener('click', function(e){
                    e.preventDefault();
					var popbox_id = this.getAttribute('data-popbox-target');
					if(popbox_id){
						self.open(popbox_id);
					}
                }, false);
			}
		}
		if(closers){
			for (var i = 0; i < closers.length; i++) {
                closers[i].addEventListener('click', function(e){
                    e.preventDefault();
					var popbox_id = this.getAttribute('data-popbox-close');
					if(popbox_id){
						self.close(popbox_id);
					}
                }, false);
			}
		}
		if(popboxs){
			for (var i = 0; i < popboxs.length; i++) {
                popboxs[i].addEventListener('click', function(e){
                    e.preventDefault();
					var popbox_id = e.target.getAttribute('data-popbox-id');
					if(popbox_id){
						self.close(popbox_id);
					}
                }, false);

				popboxs[i].addEventListener(self.transition, function(e) {
					if(this.classList.contains('opened') && !this.classList.contains('visible')){
                        this.classList.remove('opened');
					}
				});


			}
		}
		document.addEventListener('keyup', function(e){
			if(self.current(true) && e.keyCode == 27){
				self.close(self.current(true));
			}
		});

	}
	opened(popbox){
		if(popbox){
			var event = new CustomEvent("popbox_opened",{bubbles:true,detail:{popbox:popbox}});
			popbox.dispatchEvent(event);
		}
	}
	opening(popbox){
		if(popbox){
			var event = new CustomEvent("popbox_opening",{bubbles:true,detail:{popbox:popbox}});
			popbox.dispatchEvent(event);
		}
	}
	closing(popbox){
		if(popbox){
			var event = new CustomEvent("popbox_closing",{bubbles:true,detail:{popbox:popbox}});
			popbox.dispatchEvent(event);
		}
	}
	closed(popbox){
		if(popbox){
			var event = new CustomEvent("popbox_closed",{bubbles:true,detail:{popbox:popbox}});
			popbox.dispatchEvent(event);
		}
	}
	current(last = false){
		if(last){
			var current = null;
			if(this.currently_opened.length){
				current = this.currently_opened[this.currently_opened.length-1];
			}
			return current;
		}else{
			return this.currently_opened;
		}
	}
	add(popbox){
		var popbox_id = this.getId(popbox);
		this.remove(popbox_id);
		this.currently_opened.push(popbox_id);
	}
	remove(popbox){
		var popbox_id = this.getId(popbox);
		var index = this.currently_opened.indexOf(popbox_id);
		if (index > -1) {
            this.currently_opened.splice(index, 1);
		}
	}
	zIndex(){
		var zindex = 9999;
		var last = this.current(true);
		if(last){
			var last = this.find(last);
			if(last){
				zindex = parseInt(last.style.zIndex);
			}
		}

		return zindex;
	}
	find(popbox_id){
		var popbox = this.select('[data-popbox-id="'+popbox_id+'"]');
		return popbox;
	}
	select(selector){
		return document.querySelector(selector);
	}
	clear(){
		var popboxes = document.querySelectorAll('[data-popbox-id].opened');
        for (var i = 0; i < popboxes.length; i++){
            this.close(popboxes[i]);
        }
        this.currently_opened = [];
		this.select('html').classList.remove('popbox_locked');
		this.select('html').removeAttribute('popbox');

	}
	close(popbox){
		var popbox_id = this.getId(popbox);
		var popbox = this.getpopbox(popbox);
		if(popbox){
			this.closing(popbox);
			this.remove(popbox_id);
			popbox.classList.remove('visible');
			popbox.style.zIndex = -999;
			if(this.currently_opened.length == 0){
				this.select('html').classList.remove('popbox_locked');
			}
			if(this.current(true)){
			this.select('html').setAttribute('popbox',this.current(true));
			}else{
			this.select('html').removeAttribute('popbox');
			}
			this.closed(popbox);
		}

	}
	getpopbox(popbox){
		if(popbox instanceof HTMLElement){
			return popbox;
		}else{
			return this.find(popbox);
		}
	}
	getId(popbox){
		if(popbox instanceof HTMLElement){
			return popbox.getAttribute('data-popbox-id');
		}else{
			return popbox;
		}
	}
	open(popbox){
		var popbox_id = this.getId(popbox);
		var popbox = this.getpopbox(popbox);
		if(popbox){
			this.opening(popbox);
			popbox.style.zIndex = this.zIndex()+1;
				popbox.classList.add('opened');
				setTimeout(function () {
                    popbox.classList.add('visible');
				});
				this.select('html').classList.add('popbox_locked');
				this.select('html').setAttribute('popbox',popbox_id);
			this.add(popbox_id);
			this.opened(popbox);
		}
	}
}

/*!
 * Serialize all form data into a query string
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   form The form to serialize
 * @return {String}      The serialized form data
 * https://vanillajstoolkit.com/helpers/serialize/
 */
var serialize = function (form) {

	// Setup our serialized data
	var serialized = [];

	// Loop through each field in the form
	for (var i = 0; i < form.elements.length; i++) {

		var field = form.elements[i];

		// Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
		if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;

		// If a multi-select, get all selections
		if (field.type === 'select-multiple') {
			for (var n = 0; n < field.options.length; n++) {
				if (!field.options[n].selected) continue;
				serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[n].value));
			}
		}

		// Convert field data to a query string
		else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
			serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
		}
	}

	return serialized.join('&');

};