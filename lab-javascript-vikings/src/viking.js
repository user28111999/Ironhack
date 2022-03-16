// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }
  attack() {
    return this.strength
  }
  receiveDamage(damage) {
    this.health = this.health - damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }
  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength)
  }
  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return "A Saxon has died in combat"
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }
  
  addViking(viking) {
    if (typeof viking == "object") {
      this.vikingArmy.push(viking)
    }
  }
  addSaxon(saxon) {
    if (typeof saxon == "object") {
      this.saxonArmy.push(saxon)
    }
  }
  
  vikingAttack() {
    let eachViking = Math.floor(Math.random() * this.vikingArmy.length)
    let eachSaxon = Math.floor(Math.random() * this.saxonArmy.length)
    
    const dmgValue = this.saxonArmy[eachSaxon].receiveDamage(
      this.vikingArmy[eachViking].strength
    )

    if (this.saxonArmy[eachSaxon].health <= 0) {
      this.saxonArmy.splice(eachSaxon, 1)
    }

    return dmgValue
  }

  saxonAttack() {
    let eachViking = Math.floor(Math.random() * this.vikingArmy.length)
    let eachSaxon = Math.floor(Math.random() * this.saxonArmy.length)
    
    const dmgValue = this.vikingArmy[eachViking].receiveDamage(
      this.saxonArmy[eachSaxon].strength
    )

    if (this.vikingArmy[eachViking].health <= 0) {
      this.vikingArmy.splice(eachViking, 1)
    }
    
    return dmgValue
  }

  showStatus() {
    if (!this.saxonArmy.length) return "Vikings have won the war of the century!"
    if (!this.vikingArmy.length) return "Saxons have fought for their lives and survived another day..."
    return "Vikings and Saxons are still in the thick of battle."
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War }
}

