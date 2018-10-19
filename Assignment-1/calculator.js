function add(f,s)
{
    var operator = "+";
    return eval(f+operator+s);
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
