// Copyright (c) 2024 Mr. Adam Batiuk All rights reserved
//
// Created by: Adam Batiuk
// Created on: Mar 2024
// This file contains the JS functions for index.html
"use strict"

function myButtonClicked() {
  const workHours = parseInt(document.getElementById("work-hours").value)
  const payRate = parseInt(document.getElementById("pay-rate").value)

  const takeHomeSalary = payRate * workHours * (1 - 0.18)
  const moneyTaxed = payRate * workHours * 0.18

  document.getElementById("answer").innerHTML =
    "Your pay will be: $" + takeHomeSalary.toFixed(2)
  document.getElementById("answer-two").innerHTML =
    "The government gets: $" + moneyTaxed.toFixed(2)
}
