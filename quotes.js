var quotes = [
	{
		text: "Intelligence is the ability to avoid doing work, yet getting the work done.",
		author: "Linus Torvalds"
	},
	{
		text: "Talk is cheap. Show me the code!",
		author: "Linus Torvalds"
	},
	{
		text: "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
		author: "Antoine de Saint-Exupéry"
	},
	{
		text: "Computers are good at following instructions, but not at reading your mind.",
		author: "Donald Knuth"
	},
	{
		text: "In order to understand recursion, one must first understand recursion.",
		author: "Anonymous"
	},
	{
		text: "Perl – The only language that looks the same before and after RSA encryption.",
		author: "Keith Bostic"
	},
	{
		text: "Pro·gram·mer - An organism capable of converting caffeine in to code.",
		author: "Anonymous"
	},
	{
		text: "For every complex problem there is an answer that is clear, simple, and wrong.",
		author: "H L Mencken"
	},
	{
		text: "Never attribute to malice that which is adequately explained by stupidity.",
		author: "Hanlon's Razor"
	},
	{
		text: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
		author: "Martin Golding"
	},
	{
		text: "Any fool can use a computer. Many do.",
		author: "Ted Nelson"
	},
	{
		text: "There is no place like 127.0.0.1",
		author: "Anonymous"
	},
	{
		text: "Simplicity is prerequisite for reliability.",
		author: "Edsger W. Dijkstra"
	},
	{
		text: "To iterate is human, to recurse divine.",
		author: "L. Peter Deutsch"
	},
	{
		text: "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
		author: "Edsger W. Dijkstra"
	},
	{
		text: "A good programmer is someone who looks both ways before crossing a one-way street.",
		author: "Doug Linder"
	},
	{
		text: "It always takes longer than you expect, even when you take into account Hofstadter's Law.",
		author: "Hofstadter's Law (Douglas Hofstadter)"
	},
	{
		text: "In theory, there is no difference between theory and practice. But, in practice, there is.",
		author: "Jan L. A. van de Snepscheut"
	},
	{
		text: "There are 2 hard problems in computer science: cache invalidation, naming things, and off-by-1 errors.",
		author: "Leon Bambrick"
	},
	{
		text: "Git gets easier once you get the basic idea that branches are homeomorphic endofunctors mapping submanifolds of a Hilbert space.",
		author: "Isaac Wolkerstorfer"
	},
	{
		text: "UNIX is basically a simple operating system, but you have to be a genius to understand the simplicity.",
		author: "Dennis Ritchie"
	},
	{
		text: "My project is 90% done. I hope the second half goes as well.",
		author: "Scott W. Ambler"
	},
	{
		text: "Writing code a computer can understand is science. Writing code other programmers can understand is an art.",
		author: "Jason Gorman"
	},
	{
		text: "You can't lie to the compiler.",
		author: "Andrew Stevenson"
	}
]

function showQuote() {
	var quote = quotes[Math.floor(Math.random() * quotes.length)];
	document.getElementById("qtext").innerHTML = '&quot;' + quote.text + '&quot;';
	document.getElementById("qauthor").innerHTML = '<i>' + quote.author + '</i>';
}


