module.exports = {
  success,
  fail,
  repair,
  get,
};

// ### When enhancement succeeds

// - The item's enhancement increases by 1.
// - If the item enhancement level is 20, the enhancement level is not changed.
// - The durability of the item is not changed.

// ### When enhancement fails

// - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// - If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// - If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).







function success(item) {
  if(item.enhancement <= 19) {
    item.enhancement++
    return { ...item }
  } else {
    return { ...item };
  }

}


function fail(item) {
if (item.enhancement < 15 ) {
  item.durability - 5;
} else if (item.enhancement >= 15) {
  item.durability - 10
} else if (item.enhancement > 16) {
item.enhancement - 1
}
}

function repair(item) {
  if(item.durability <= 100) {
   item.durability = 100;
   return { ...item };
  } else {
    return {...item}; 
  }
  
}

function get(item) {
  return { ...item };
}


