# Tucson Answers

## Purpose
Drupal 7 Theme for Tucson Answers website

## Contact
Authority: Mark Taylor (mtaylor1@tucsonaz.gov) IT Department : Applications/Web Division  
Developer: Charles Patterson (cpatter1@tucsonaz.gov)  

## Requirements
In addition to the Core modules, the Tucson Answers Drupal site requires the following Drupal modules:
* Chaos Tools
* Crumbs
* Entity API
* Entity Reference
* Token
* Views
* The Tucson Answers theme is a Zen subtheme so requires the Zen theme

##Setup
Create Content types:  
-Answers, a basic page with term references for Answer type (Quick/Guide/Online), categories, and keywords  
-Contact block with Entity Reference to Answers to relate the nodes  

Create Views:  
-To display all node Summaries by Answer type  
-To display related topics  
-To display top Answers for home page  

## Versioning
Date: 2014-11-12  
Version: 1.0rc1
