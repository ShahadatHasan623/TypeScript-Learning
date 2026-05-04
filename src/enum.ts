// enmu
// set of fixed string leteral ek jaigai rakhe

// type UserRole ="admin" | "Editor" | "Viewer"

enum UserRole {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

const canEidt = (role: UserRole) => {
  if (role === UserRole.Admin || role === UserRole.Editor) {
    return true;
  } else return false;
};

const user = canEidt(UserRole.Admin);

console.log(user);
