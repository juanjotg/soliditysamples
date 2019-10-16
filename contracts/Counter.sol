pragma solidity >=0.4.21 <0.6.0;

contract Counter {

    uint public counter;

    constructor() public {

        counter = 1;
    }

    function increment() public {

        counter++;

    }

    function add(uint value) public {

        counter += value;

    }

}