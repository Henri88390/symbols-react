export enum Gender {
  Male = "Male",
  Female = "Female",
}

export enum ManJob {
  Pilot = "Pilot",
  ConstructionWorker = "Construction worker",
  Engineer = "Engineer",
}

export enum WomanJob {
  HRManager = "HR Manager",
  Lawyer = "Lawyer",
  Nurse = "Nurse",
}

export type Job = ManJob | WomanJob;
