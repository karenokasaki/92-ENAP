class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    //escolher RANDOMICAMENTE um solgado viking
    let indexRandomViking = Math.floor(Math.random() * this.vikingArmy.length); // 2
    let viking = this.vikingArmy[indexRandomViking]; // acessar o soldado do index 2

    //escolher RANDOMICAMENTE um solgado saxon
    let indexRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length); // 4
    let saxon = this.saxonArmy[indexRandomSaxon];

    let result = saxon.receiveDamage(viking.attack());

    if (saxon.health <= 0) {
      this.saxonArmy.splice(indexRandomSaxon, 1);
    }

    return result;
  }

  saxonAttack() {
    //escolher RANDOMICAMENTE um solgado viking
    let indexRandomViking = Math.floor(Math.random() * this.vikingArmy.length); // 2
    let viking = this.vikingArmy[indexRandomViking]; // acessar o soldado do index 2

    //escolher RANDOMICAMENTE um solgado saxon
    let indexRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length); // 4
    let saxon = this.saxonArmy[indexRandomSaxon];

    let result = viking.receiveDamage(saxon.attack());

    if (viking.health <= 0) {
      this.vikingArmy.splice(indexRandomViking, 1);
    }

    return result;
  }

  showStatus() {
    if(!this.saxonArmy.length) {
        return "Vikings have won the war of the century!"
    }

    if(!this.vikingArmy.length) {
        return "Saxons have fought for their lives and survived another day..."
    }

    if(this.vikingArmy.length >= 1 && this.saxonArmy.length >=1) {
        return "Vikings and Saxons are still in the thick of battle."
    }
  }
}
