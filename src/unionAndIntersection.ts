//? Union |

type userRole = "admin" | "user";

const getUser = (role: userRole) => {
  if (role === "admin") {
    return "adimn dashboard";
  } else if (role === "user") {
    return "user dashboard";
  } else {
    return "guest dashboard";
  }
};

//? Intersection &

type empolyee = {
  id: string;
  name: string;
  phone: string;
};

type manager = {
  designation: string;
  teamSize: number;
};

type empolyeeManager = empolyee & manager

const chowdhuryShahed :empolyeeManager ={
    id:"1",
    name:"ChowdhuryShaheb",
    phone:"013",
    designation:"developer",
    teamSize : 20
}
