/*FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = 0

if (location === 'RSA') { 
    shipping === 400 && currency === R
 } 
 
 if (location === 'NAM') {
shipping === 600 && currency === $ 
} else shipping === 800 && currency === $

const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * 'NONE_SELECTED'
const batteries = 35 * 2
const pens = 5 * 'NONE_SELECTED' 

const shipping = null
const currency = $

if (shoes + batteries + pens + shirts >= 1000 && currency === R || 
	shoes + batteries + pens + shirts >=60 && currency === $) {
	if ((location === 'NAM' || 'RSA') && (customers < 2)) {
			//if (location = 'RSA')
		    shipping = 0 || calcShipping
		}
	}


if (shipping = null && customers !== 1) 
{console.log(FREE_WARNING) }


const customers = 1
const location = 'NK'
// const currency = null


if (location === 'NK' ? console.log(BANNED_WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping));

console.log(shirts) */

FREE_WARNING = 'Free shipping only applies to single customer orders';
BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
NONE_SELECTED = 0;

const shoes = (300 * 1)
const toys = (100 * 5)
const shirts = (150 * NONE_SELECTED)
const batteries = (35 * 2)
const pens = (5 * NONE_SELECTED)
const customers = 1
let place = 'RSA'
let shipping = 0
let currency = '$'
const total = (shoes + toys + shirts + batteries + pens)

if (place === 'RSA') { 
	shipping = 400
	currency = 'R'
	
} else if (place ==='NAM') {
	shipping = 600
	currency = '$'
} else {
	shipping = 800
	currency = '$'
	}

if (total > 1000 && currency === 'R' || total > 60 && currency === '$') 
	{
	 shipping = 0
	}


if (shipping === 0 && customers !== 1) { 
	console.log(FREE_WARNING) 
}


if (place === 'NK') {
	console.log(BANNED_WARNING)
} console.log('Price:', currency, total+ shipping) 


