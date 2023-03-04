export function displayHomePage(req,res,next)
{
 res.render('index', {title : 'Home', page:'home'}); 
} 

export function displayServicesPage(req,res,next)
{
 res.render('index', {title : 'Home', page:'services'}); 
} 

export function displayAboutPage(req,res,next)
{
 res.render('index', {title : 'Home', page:'about'}); 
} 