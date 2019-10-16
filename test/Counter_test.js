const Counter = artifacts.require("Counter");

contract('Counter', function (accounts) {

    console.log(accounts);

    beforeEach(async function () {
        this.counter = await Counter.new();
    });

    it('counter is one', async function () {
        //const counter = await Counter.new();
        console.log(this.counter.address);
        const c = await this.counter.counter();
        console.log(c);
    })


    it('increment is one', async function () {
        //const counter = await Counter.new();
        console.log(this.counter.address);
        await this.counter.increment();
        const c = await  this.counter.counter();
        console.log(c, 2);
    })

    it('add', async function () {
        //const counter = await Counter.new();
        console.log(this.counter.address);
        await this.counter.increment();
        await this.counter.add(40);
        const c = await this.counter.counter();
        console.log(c, 42);
    })

});