export interface IDoctor {
  id: string;
  name: string;
  email: string;
  profilePhoto: string;
  contactNumber: string;
  address: string;
  registrationNumber: string;
  experience: number;
  gender: string;
  appointmentFee: number;
  qualification: string;
  currentWorkingPlace: string;
  designation: string;
  isDeleted: boolean;
  averageRating: number;
  createdAt: string;
  updatedAt: string;
  doctorSpecialties: IDoctorSpecialty[];
}

export interface IDoctorSpecialty {
  specialitiesId: string;
  doctorId: string;
  specialities: ISpeciality;
}
interface ISpeciality {
  id: string;
  title: string;
  icon: string;
}

export interface IDoctorFormData {
  doctor: IDoctor;
  password: string;
}
