////////////////////////////////////////// lecture[74] - Structring safe code
(function(global, $) {
	const Greeter = function(firstname, lastname, language) {
		return new Greeter.init(firstname, lastname, language);
	};

	Greeter.prototype = {
		fullName: function() {
			return this.firstname + ' ' + this.lastname;
		},
		validate: function() {
			if (supportedLangs.indexOf(this.language) === -1) {
				throw 'Invalid Language';
			}
		},
		greeting: function() {
			return greetings[this.language] + ' ' + this.firstname + '!';
		},
		formalGreeting: function() {
			return formalGreetings[this.language] + ' ' + this.fullName();
		},
		greet: function(formal) {
			let msg;
			if (formal) msg = this.formalGreeting();
			else msg = this.greeting();
			// formal == true ? (msg = this.formalGreeting()) : (msg = this.greeting());
			if (console) console.log(msg);
			return this;
		},
		log: function() {
			if (console) console.log(logMessages[this.language] + ': ' + this.fullName());
		}
	};

	const supportedLangs = [ 'En', 'Ar' ];

	greetings = {
		en: 'Hello',
		ar: 'Ahln'
	};

	formalGreetings = {
		en: 'Greetings',
		ar: 'El slam Aleekom'
	};

	let logMessages = {
		en: 'Logged In',
		ar: 'Fol 3leek ^_^'
	};

	Greeter.init = function(firstname, lastname, language) {
		self = this;
		self.firstname = firstname || '';
		self.lastname = lastname || '';
		self.language = language || 'ar';
	};

	Greeter.init.prototype = Greeter.prototype;

	global.Greeter = global.G$ = Greeter;
})(window, jQuery);

////////////////////////////////////////// lecture[75] - Our Object and it's prototype
