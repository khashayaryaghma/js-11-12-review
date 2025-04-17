
const person = {
  firstName: 'Donald',
  lastName: 'Trump',
  fullName() {
    //   //SCOPE      local
    console.log(this);
    const arrow = () => {
      console.log(this);
    };

    function reg() {
      console.log(this);
    }

    reg();
    arrow();
    return `${this.firstName} ${this.lastName}`;
  },
  hisName: () => {
    //SCOPE    global
    console.log(this);
    console.log(person);

    function reg() {
      console.log(this);
    }

    reg();

    return `${person.firstName} ${person.lastName}`;
  },
  shoutName() {
    setTimeout(function () {
      console.log(this);
    }, 3000);
  },
  sayName() {
    setTimeout(() => {
      console.log(this);
      // console.log(this.fullName());
    }, 3000);
  },
};

// console.log(person.fullName())
// console.log(person.hisName())
// console.log(person.shoutName());
person.sayName()
