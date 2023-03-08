// Author:Riccardo Reali
// Date: 15-02-2023

import { UserDisplayName } from "../Utils/index.js";

export function displayHomePage(req,res,next)
{
 res.render('index', {title : 'Home', page:'home', displayName: UserDisplayName(req)}); 
} 

export function displayServicesPage(req,res,next)
{
 res.render('index', {title : 'Services', page:'services', displayName: UserDisplayName(req)}); 
} 

export function displayAboutPage(req,res,next)
{
 res.render('index', {title : 'About', page:'about', displayName: UserDisplayName(req)}); 
} 

export function displayContactPage(req,res,next)
{
 res.render('index', {title : 'Contact Us', page:'contactus', displayName: UserDisplayName(req)}); 
} 