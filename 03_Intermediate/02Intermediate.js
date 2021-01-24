var getUserRole = function (name, role){
    var dict = {
        "admin": "gets all the access",
        "subadmin": "gets access to create/delete courses",
        "testprep": "gets access to create/delete tests",
        "user": "gets access to consume content"
    }
    if(role in dict){
        return `${name}, ${dict[role]} `;
    }else{
        return `${name}, get a role`;
    }
}

console.log(getUserRole("alex", "hacker"));