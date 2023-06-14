Feature: Capitals
Scenario Outline: Capitals Search

Given url git
Given arama yapilacak "<world capitals>"
Given arama yapildigini kontrol et "<world capitals>"

Examples:
    | world capitals |
    | london | 
    | paris |
    | madrid | 
    | rome | 