
// A carefully curated list of delightful quotations!

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
        author: ""
    },
    {
        text: "Perl – The only language that looks the same before and after RSA encryption.",
        author: "Keith Bostic"
    },
    {
        text: "Pro·gram·mer - An organism capable of converting caffeine into code.",
        author: ""
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
        text: "There is no place like ~",
        author: ""
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
    },
    {
        text: "Be nice or I'll replace you with a very small shell script.",
        author: ""
    },
    {
        text: "Those who don't understand Unix are condemned to reinvent it, poorly.",
        author: "Henry Spencer"
    },
    {
        text: "Unix is user-friendly. It's just picky about who its friends are.",
        author: ""
    },
    {
        text: "If you have any trouble sounding condescending, find a UNIX user to show you how it's done.",
        author: "Scott Adams"
    },
    {
        text: "/* You are not expected to understand this. */",
        author: ""
    },
    {
        text: "When in doubt, use brute force.",
        author: "Ken Thompson"
    },
    {
        text: "Simplicity is the ultimate sophistication.",
        author: "Leonardo da Vinci"
    },
    {
        text: "My definition of an expert in any field is a person who knows enough about what’s really going on to be scared.",
        author: "P. J. Plauger"
    },
    {
        text: "A monad is just a monoid in the category of endofunctors. What's the problem?",
        author: "James Iry"
    },
    {
        text: "If people do not believe that mathematics is simple, it is only because they do not realize how complicated life is.",
        author: "John von Neumann"
    },
    {
        text: "Mathematics is the art of giving the same name to different things.",
        author: "Henri Poincaré"
    },
    {
        text: "The more you know, the less sure you are.",
        author: "Voltaire"
    },
    {
        text: "Beauty is the first test: there is no permanent place in the world for ugly mathematics.",
        author: "G. H. Hardy"
    },
    {
        text: "The traditional mathematician recognizes and appreciates mathematical elegance when he sees it. If it is clumsy, it is not mathematics.",
        author: "Edsger W. Dijkstra"
    },
    {
        text: "The art of doing mathematics consists in finding that special case which contains all the germs of generality.",
        author: "David Hilbert"
    },
    {
        text: "Mathematics may be defined as the subject in which we never know what we are talking about, nor whether what we are saying is true.",
        author: "Bertrand Russell"
    },
    {
        text: "Good mathematicians see analogies between theorems. The very best ones see analogies between analogies.",
        author: "Stanislaw M. Ulam (quoting Stefan Banach)"
    },
    {
        text: "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.",
        author: "Douglas Adams"
    },
    {
        text: "Don't Panic.",
        author: "Douglas Adams"
    },
    {
        text: "To err is human, but to really foul things up you need a computer.",
        author: "Paul R. Ehrlich"
    },
    {
        text: "A computer once beat me at chess, but it was no match for me at kick boxing.",
        author: "Emo Phillips"
    },
    {
        text: "Computers are useless. They can only give you answers.",
        author: "Pablo Picasso"
    },
    {
        text: "People think computers will keep them from making mistakes. They're wrong. With computers you make mistakes faster.",
        author: "Adam Osborne"
    },
    {
        text: "In programming the hard part isn’t solving problems, but deciding what problems to solve.",
        author: "Paul Graham"
    },
    {
        text: "Meaning lies as much<br>in the mind of the reader<br>as in the Haiku.",
        author: "Douglas Hofstadter"
    },
    {
        text: "Please, Oh please, publish me in your collection of self-referential sentences!",
        author: "Douglas Hofstadter"
    },
    {
        text: "A good way to have good ideas is by being unoriginal.",
        author: "Bram Cohen"
    },
    {
        text: "Code never lies, comments sometimes do.",
        author: "Ron Jeffries"
    },
    {
        text: "A topologist is a person who doesn't know the difference between a coffee cup and a doughnut.",
        author: ""
    },
    {
        text: "Geometry is an art of making right conclusions from badly drawn pictures.",
        author: "Niels Henrik Abel"
    },
    {
        text: "The Axiom of Choice is obviously true, the Well-ordering theorem obviously false, and who can tell about Zorn’s lemma ?",
        author: "Jerry Bona"
    },
    {
        text: "Groups, as men, will be known by their actions.",
        author: "Guillermo Moreno"
    },
    {
        text: "If I have not seen as far as others, it is because there were giants standing on my shoulders.",
        author: "Hal Abelson"
    },
    {
        text: "If I have seen farther than others, it is because I have stood on the shoulders of giants.",
        author: "Isaac Newton"
    },
    {
        text: "Mathematics requires a small dose, not of genius, but of an imaginative freedom which, in a larger dose, would be insanity.",
        author: "Angus K. Rodgers"
    },
    {
        text: "The shortest path between two truths in the real domain passes through the complex domain.",
        author: "Jacques Hadamard"
    },
    {
        text: "The price of metaphor is eternal vigilance.",
        author: "Norbert Wiener"
    },
    {
        text: "When you see a good move, look for a better one.",
        author: "Emanuel Lasker"
    },
    {
        text: "It (proof by contradiction) is a far finer gambit than any chess gambit: a chess player may offer the sacrifice of a pawn or even a piece, but a mathematician offers the game.",
        author: "G. H. Hardy"
    },
    {
        text: "You cannot play at chess if you are kind-hearted.",
        author: "French proverb"
    },
    {
        text: "The hardest game to win is a won game.",
        author: "Emanuel Lasker"
    },
    {
        text: "There is nothing more deceptive than an obvious fact.",
        author: "A. C. Doyle"
    }
]

function showQuote(quoteNumber, listOfQuotes) {
    var i = (typeof(quoteNumber) == 'undefined' || quoteNumber < 0)? Math.floor(Math.random() * quotes.length) : quoteNumber;
    var q = (typeof(listOfQuotes) == 'undefined')? quotes : listOfQuotes;
    var quote = q[i];
    var text = '"' + quote.text + '"';
    document.getElementById("quote-author").innerHTML = quote.author;
    
    for (i = 1; i <= text.length; i++) {
        (function(i){
            setTimeout(function() {
                document.getElementById("quote-text").innerHTML = text.substring(0, i);
            }, 10*i);
        }(i));
    }
}
