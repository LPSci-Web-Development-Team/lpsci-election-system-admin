// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR API
import { ICandidateResult } from '@api/results/candidate';

interface IProps {
  data: ICandidateResult;
  id: string;
}

export const CandidateData = createModel<IProps, IProps>((props) => props, {
  displayName: 'Models.CandidateData',
});
