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
  doctorSchedules: IDoctorSchedule[];
}
interface IDoctorSchedule {
  doctorId: string;
  scheduleId: string;
  isBooked: boolean;
  appointmentId: string | null;
  createdAt: string;
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
