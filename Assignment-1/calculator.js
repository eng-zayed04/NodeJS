function add(f,s)
{
    return eval(f+'+'+s);
}
function sub(f,s)
{
    return f-s;
}
function mul(f,s)
{
    return f*s;
}
function div(f,s)
{
    return f/s;
}

module.exports = {add,sub,mul,div};
