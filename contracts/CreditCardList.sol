// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract CreditCardList {
  uint public creditCardCount = 0;

  struct CreditCard {
    uint id;
    string ownerName;
    CreditCardData cardData;
  }

  struct CreditCardData {
    string number;
    string ownerName;
    uint validationCode;
    int creditAvailable;
    string validationDate;
    bool blocked;
  }

  mapping(uint => CreditCard) public creditCards;

  constructor() public {
    CreditCardData memory defaultData = CreditCardData(
      "6660 0000 0000 6660", "the creator", 666, 6660, "06/07", false
    );

    createCreditCard("the creator", defaultData);
  }

  function createCreditCard(string memory _ownerName, CreditCardData memory _cardData) public {
    creditCardCount++;
    creditCards[creditCardCount] = CreditCard(creditCardCount, _ownerName, _cardData);
  }
}
