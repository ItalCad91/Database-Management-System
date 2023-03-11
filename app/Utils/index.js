// Author:Riccardo Reali
// Date: 15-02-2023


export function UserDisplayName(req)
{
if(req.user)
    {
      return req.user.displayName;
    }
      return '';
}

export function AuthGuard(req, res, next)
{
    if(!req.isAuthenticated())
    {
      return res.redirect('/login')
    }
     next();
}