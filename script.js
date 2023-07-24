//Starting variables
let beltaneGothic = [
    "If you do it twice, it's Tradition. If you do it three times,",
    "The Fire Arch Is On Fire",
    "Dipping stations!",
    "The wheel turns",
    "Tech: eternally suspended in the sweet spot between Not Enough Fire and Too Much Fire",
    "The May Queen has turned right and gone down the pub instead",
    "Sparklepuffers.",
    "Liminal Space",
    "Not my circus, not my monkeys.",
    "Tech needs tea badly",
    "EC to General, a Red has just eaten the cue sheet",
    "Nosebreak interruptus",
    "Are you worshipping satan?",
    "Nobody knows what the hell we're drumming for",
    "Opening up the space, can you hear us",
    "Nobody died who wasn't supposed to",
    "If we set them on fire, we're in trouble. If they happen to catch fire, it's their problem.",
    "This is not a performance space",
    "We've got the wrong fire arch!",
    "Water Point are planning to be pirates. They're going to build a ship.",
    "There's a Wild Hunt, but nobody wants to get killed, so they're just going to be generally scary.",
    "Due to unforeseen circumstances and illness, Air Point will be represented tonight by one person playing recorder, badly.",
    "Please credit the photographers",
    "Did all of these happen?",
    "Back in the day...",
    "Its only polycotton, itll be fine",
    "Every good lie has a kernel of truth in it...",
    "Not a cult.",
    "Tech have arrived at the pub",
    "Pub? Pub!",
    "Pleasure. From the. Bass",
    "That's the Nose Break",
    "On Beltane night we raise a toast, butter and jam on mine!",
    "On Beltane night we raise a toast, to the earth our mother, and the fire our host!",
    "Let's play a name game!",
    "screeching",
    "Red bum best drum",
    "Quick! Get the emergeny neidfire",
    "Ritually significant lighter",
    "Natural fibres!",
    "Are feathers natural fibres?",
    "Kayak. Callitch. Keyak. Cauliatch. Cay-ill-ach. Cally-ach. Caaaaach.",
    "This group name left intentionally unprounceable.",
    "I have non-Beltane friends! I think! They might be Stewards now!",
    "We need more Stewards!",
    "Oh, the (well deserved) shade ",
    "This is Beltane, an ancient festival which has been unchanged since the time of the Celts",
    "Always remember: put the fire can lids on UPSIDE DOWN!",
    "Quick; get this point set up before the procession arrives!",
    "For crowd management reasons, this year's Samhuinn will be in Niddrie.",
    "Stage to production; stage to production: can someone run down with a broom please?",
    "Don't. Burn. The trees.",
    "We can't have a festival without *Recent group concept* ",
    "And that's the May Queen who represents youth and purity, and that's the Green Man and his devilish consorts who she's trying to fight off...",
]
let reasons = [
    "At the councils request ",
    "For crowd management reasons, ",
    "The blues have told me ",
    "Due to budget constraints ",
    "Because of a measurment error ",
    "Thanks to a Key moment conflict ",
    "because of a lost cloak ",
    "Due to an angry letter from the Residents' Association ",
    "Due to a shortage of GOs ",
    "Due to a shortage of volunteers ",
    "Due to a conflict with the Firearms Act (1968) "
]
let groups = [
    "this year's Court ",
    "this years' Goddess ",
    "this years Reds ",
    "earth point ",
    "water point ",
    "air point ",
    "fire point ",
    "the whites ",
    "some random punters ",
    "The processionals ",
    "a couple of beasties ",
    "Ducks ",
    "the Residents accociation ",
    "the board ",
    "a suprise 4th drumming group ",
    "the stewards ",
    "tech ",
]
let joins = [
    "is planning to ",
    "have demanded to ",
    "want to ",
    "will not ",
    "must ",
    "might ",
    "will ",
    "have decided to ",
]
let concepts = [
    "be represented by a small assymetric rock.",
    "be represented by the rain inevitably falling on the hill.",
    "be represented by one guy waving a candle and yelling.",
    "replace their stage peice with Morris Dancing.",
    "be digging a large hole.",
    "be represented through interpretive dance.",
    "be dressed as highland cattle.",
    "be represented by a single fire can.",
    "spend this entire year's budget on crowd barrier and heras fencing.",
    "be completely silent.",
    "be very drunk on ritually significant Buckfast.",
    "be skipping the hill and going straight to the afterparty.",
    "be painted with a thick coat of white emulsion.",
    "be entirely covered in blue LEDs.",
    "wear bouncy stilts.",
    "wear GIANT GOLDEN HATS.",
    "be blindfolded, and this will not lead to any health and safety issues at all.",
    "have their exit cue six seconds after their intro cue.",
    "be covered in mud.",
    "form a joint group with water point.",
    "combine earth air water and fire points into a new may queen."
]
//randomiser
fact = beltaneGothic[Math.floor(Math.random()*beltaneGothic.length)];

function excuse(reason,group,join,concept){
    reason = reasons[Math.floor(Math.random()*reasons.length)]
    group = groups[Math.floor(Math.random()*groups.length)]
    join = joins[Math.floor(Math.random()*joins.length)]
    concept = concepts[Math.floor(Math.random()*concepts.length)]
    return `${reason}${group}${join}${concept}`
}
//output to site
function randomise(){
    document.getElementById("a").innerHTML = excuse(reasons,groups,joins,concepts)
}
document.getElementById("event").innerHTML = fact

document.getElementById("button").onclick = randomise;
//console.log(excuse(reasons,groups,joins,concepts))

