export type TRowData = {
  lastName: string;
  firstName: string;
  section: string;
  gradeLevel: number;
  lrn: number;
  status: boolean;
};

export interface IRowData {
  id?: string;
  lastName: string;
  firstName: string;
  section: string;
  gradeLevel: number;
  lrn: number;
  status?: boolean;
}

export interface IRow {
  id: number;
  data: IRowData;
}
