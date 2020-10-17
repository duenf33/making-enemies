// Your code here.
const makeBoss = function(make){
  const makeBoss1 = {
    name: make.name,
    attackDamage: make.attackDamage,
    boss: true,
    level: make.level,
    alive: make.alive,
    hitPoints: make.hitPoints,    
  }
  return makeBoss1;
}

const levelUp = function(levelUp){
  const levelUp1 = {
    name: levelUp.name,
    attackDamage: levelUp.attackDamage,
    boss: levelUp.boss,
    level: levelUp.level + 1,
    alive: levelUp.alive,
    hitPoints: levelUp.hitPoints,
  }
  return levelUp1;
}

const buff = function(buffMode){
  const buff1 = {
    name: buffMode.name,
    attackDamage: buffMode.attackDamage + 15,
    boss: buffMode.boss,
    level: buffMode.level,
    alive: buffMode.alive,
    hitPoints: buffMode.hitPoints,
  }
  return buff1;
}

const makeSuper = function(superName){
  const makeSuper1 = {
    name: 'Super ' + superName.name,
    attackDamage: superName.attackDamage,
    boss: superName.boss,
    level: superName.level,
    alive: superName.alive,
    hitPoints: superName.hitPoints,
  }
  return makeSuper1;
}

const hitEnemy = function(hit){
  const hitEnemy1 = {
    name: hit.name,
    attackDamage: hit.attackDamage,
    boss: hit.boss,
    level: hit.level,
    alive: hit.alive,
    hitPoints: hit.hitPoints - 10,
  }

  if(hitEnemy1.hitPoints <= 0){
    hitEnemy1.alive = false
  }
  return hitEnemy1
}

const beastMode = function(beast){
  const beastMode1 = {
    name: 'Super ' + beast.name,
    attackDamage: beast.attackDamage + 15,
    boss: true,
    level: beast.level + 1,
    alive: beast.alive,
    hitPoints: beast.hitPoints,
  }
  return beastMode1
}

// Our code here. Don't touch!
if (typeof makeBoss === 'undefined') {
  makeBoss = undefined
}

if (typeof levelUp === 'undefined') {
  levelUp = undefined
}

if (typeof buff === 'undefined') {
  buff = undefined
}

if (typeof makeSuper === 'undefined') {
  makeSuper = undefined
}

if (typeof hitEnemy === 'undefined') {
  hitEnemy = undefined
}

if (typeof beastMode === 'undefined') {
  beastMode = undefined
}


module.exports = {
  makeBoss,
  levelUp,
  buff,
  makeSuper,
  hitEnemy,
  beastMode,
}
