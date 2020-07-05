// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR API
import { IStudentResult } from '@api/results/student';

interface IProps {
  data: IStudentResult;
  id: string;
}

export const StudentData = createModel<IProps, IProps>((props) => props, {
  displayName: 'Models.StudentData',
});
