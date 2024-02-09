const phone = {
    model: "iPhone 15 Pro",
    wifiOn: false,
    locked: true,
    password: 1234,
    turnOnWifi() {
        this.wifiOn = true;
    },
    open: function (pass) {
            this.locked = true  //added
        if (this.password === pass) {
            this.locked = false;
        }
        return this.locked
    }
}

console.log(phone.open(2314))
console.log(phone.open(1234))
console.log(phone.open(2314))

console.log(phone.turnOnWifi)
console.log(phone.open())