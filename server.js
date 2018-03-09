// requires
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// scraping tools
var axios = require("axios");
var cheerio = require("cheerio");

// model requirements
var db = require("./models");

var PORT = 3000;

// Init Express
var app = express();

