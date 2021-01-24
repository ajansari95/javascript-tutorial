var user_identity = "monkey";

switch(user_identity){
    case "admin":
        console.log("get full access");
        break;
    case "subadmin":
        console.log("can delete or add courses");
        break;
    case "testprep":
        console.log("gets access to create /delete tests");
        break;
    case "user":
        console.log("gets to consume content");
        break;
    default:
        console.log("error 404 not found");
        break;

}