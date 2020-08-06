// ANCHOR Payloads
import {
  ICreateSection, IFetchSection, IFetchSectionChildren, IUpdateSection,
} from '@payloads/section';

// ANCHOR Interfaces
import { IRequireSignIn } from '@interfaces/Common';

// ANCHOR Fetch
import {
  POST, GET, DELETE, PUT,
} from '../fetch/methods';

// ANCHOR Results
import { ISectionResult } from './results/section';
import { IStudentResult } from './results/student';

/**
 * ANCHOR: Create section
 *
 * @param param0 Params
 */
export async function createSection({
  token, schoolYear, ...payload
}: ICreateSection) {
  return POST(`/section/new/school-year/${schoolYear}`, payload, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}

/**
 * ANCHOR: Update section
 *
 * @param param0 Params
 */
export async function updateSection({
  token, id, ...payload
}: IUpdateSection) {
  return PUT(`/section/${id}`, payload, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}

/**
 * ANCHOR: Get all sections
 *
 * @param param0 Params
 */
export async function getSections({
  token,
}: IRequireSignIn) {
  const data = await GET('/section', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return (await data.json()) as ISectionResult[];
}

/**
 * ANCHOR: Get section by id
 *
 * @param param0 Params
 */
export async function getSectionById({
  id,
}: IFetchSection) {
  const data = await GET(`/section/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return (await data.json()) as ISectionResult;
}

/**
 * ANCHOR: Get all students for section
 *
 * @param param0 Params
 */
export async function getStudentsForSection({
  id, token,
}: IFetchSectionChildren) {
  const data = await GET(`/section/${id}/students`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return (await data.json()) as IStudentResult[];
}

/**
 * ANCHOR: Delete section by id
 *
 * @param param0 Params
 */
export async function deleteSectionById({
  id, token,
}: IFetchSectionChildren) {
  await DELETE(`/section/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}
