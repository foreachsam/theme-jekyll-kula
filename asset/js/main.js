!function(global, $) {
	global.ui = {};
}(window, jQuery);


//sidebar
!function(global, $) {
	global.ui.navbar = {
		_is_init: false,
		_is_hide: true,
		init: function() {
			if (this._is_init) {
				return;
			}
			this._is_init = true;
			$('.sidebar .accordion-side').accordion({
				header: 'h3',
				heightStyle: 'content',
				collapsible: true,
				animate: 100
			});
		},
		show: function() {
			this._is_hide = false;
			$('.sidebar-overlay').show();
			$('.sidebar').show('slide');
			this.init();
		},
		hide: function() {
			this._is_hide = true;
			$('.sidebar-overlay').hide();
			$('.sidebar').hide('slide');
		},
		toggle: function() {
			if (this._is_hide) {
				this.show();
				this.syncBtn();
				return;
			}
			this.hide();
			this.syncBtn();
		},
		syncBtn: function() {
			var btn = $('.navbar-toggle');

			if (this._is_hide) {
				if (btn.hasClass('active')) {
					btn.removeClass('active');
				}
				return;
			}

			if (!btn.hasClass('active')) {
				btn.addClass('active');
			}
		}
	};

	$(document).ready(function() {
		$('.menu-btn').on('click', function(e) {
			ui.navbar.toggle();
			e.preventDefault();
			e.stopPropagation();
		});

		$('.sidebar-overlay').on('click', function(e) {
			ui.navbar.toggle();
			e.preventDefault();
			e.stopPropagation();
		});

	});
}(window, jQuery);


// not found
!function(global, $) {
	$(document).ready(function() {
		var pnlNotFound = '.pnl-not-found';
		$(pnlNotFound).show('slide');
	});
}(window, jQuery);
