pragma solidity ^0.5.0;

contract Counter {

  uint8 public counts;

  // constructor () public { }

  function getCounts() public view returns (uint8) {
    return counts;
  }

  function increment() public {
    counts += 1;
  }

  function decrement() public {
    counts -= 1;
  }

}