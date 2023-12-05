# GeoData

## Introduction

**This repository provides the geographical location information of GitHub developers that we obtained. What we provide is a file in JSON format. You can download and use it.**

## Data file introduction

In the JSON file, The developer's login name is used as the key and the specific information is the value. Our data includes GitHub registered developer from 2008 to March 2023.   The following are the meanings of some of the fields. 

| Field Attribute  | Explanation                                |
| ---------------- | ------------------------------------------ |
| login            | User's login account                       |
| Id               | User’s Unique Identification               |
| Company          | The company name user provided             |
| Blog             | The Blog address user provided             |
| Twitter_username | The Twitter accoount user provided         |
| Location         | The original location user provided        |
| adminDistrict    | The province or state name of the location |
| countryRegion    | The country of the location                |
| cormattedAddress | Standard format for location               |
| Coordinates      | The confidence level of this location      |
| E-mail           | The e-mail address user provided           |
| email_country    | Country name parsed based on email suffix  |
| created_at       | Registration time of this account          |
