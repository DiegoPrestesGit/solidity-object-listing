// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract CreditCardList {
  uint public creditCardCount = 0;

  struct CreditCard {
    uint id;
    string ownerName;
    CreaditCardData cardData;
  }

  struct CreaditCardData {
    string number;
    string ownerName;
    uint validationCode;
    int creditAvailable;
    string validationDate;
    bool blocked;
  }

  mapping(uint => CreditCard) public creditCards;

  function createCreditCard() public {
    creditCardCount++;
  }
}