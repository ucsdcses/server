/**
 * Author: Daniel Alemu
 * Defines a newSeats Schema to make a document later
 */

 const express = require('express');
 const mongodb = require('mongodb');
 const mongoose = require('mongoose');

var LabUseData = new mongoose.Schema({
  //var  type
  seatId: Number,
  timestamp: Number,
  loggedIn: Boolean,
  roomNumber: String
});

mongoose.model("LabUseData", LabUseData)
