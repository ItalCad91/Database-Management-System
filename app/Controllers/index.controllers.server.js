// Author:Riccardo Reali
// Date: 15-02-2023

export function displayHomePage(req,res,next)
{
 res.render('index', {title : 'Home', page:'home'}); 
} 

export function displayServicesPage(req,res,next)
{
 res.render('index', {title : 'Services', page:'services'}); 
} 

export function displayAboutPage(req,res,next)
{
 res.render('index', {title : 'About', page:'about'}); 
} 

export function displayContactPage(req,res,next)
{
 res.render('index', {title : 'Contact Us', page:'contactus'}); 
} 