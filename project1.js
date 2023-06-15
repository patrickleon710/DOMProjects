// VARIABLES
const button = document.querySelector('#new-quote')
const quote = document.querySelector('.text-area')
const person = document.querySelector('.person')

let quotes = [
    {
    person: 'Albert Einstein',
    quote: "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning."
    }, {
    person: 'Queen Elizabeth II',
    quote: "It is often the small steps, not the giant leaps, that bring about the most lasting change.",
    }, {
    person: 'Nelson Mandela',
    quote: "Education is the most powerful weapon which you can use to change the world.",
    }, {
    person: 'Amanda Gorman',
    quote: "There is always light. If only we're brave enough to see it. If only we're brave enough to be it.",
    }, {
    person: 'Booker T. Washington',
    quote: "If you want to lift yourself up, lift up someone else.",
    }, {
    person: 'André Leon Talley',
    quote: "I scorched the earth with my talent and I let my light shine.",
    }, {
    person: "Lupita Nyong'o",
    quote: "You can't rely on how you look to sustain you, what sustains us, what is fundamentally beautiful is compassion; for yourself, you and those around you.",
    }, {
    person: 'Abraham Lincoln',
    quote: "I do the very best I know how-the very best I can; and I mean to keep on doing so until the very end.",
    }
]

button.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person
})



