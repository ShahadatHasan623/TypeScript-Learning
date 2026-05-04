// as const assertion 
// enum UserRole {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }


const UserRole ={
    Admin:"ADMIN",
    Editor:"Editor",
    Viewer :"Viewer"
} as const ;


const canEidt = (role: (typeof UserRole)[keyof typeof UserRole]) => {
  if (role === UserRole.Admin || role === UserRole.Editor) {
    return true;
  } else return false;
};

const user = canEidt(UserRole.Admin);

console.log(user);