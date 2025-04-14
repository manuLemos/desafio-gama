import { IMeta, NewMeta } from './meta.model';

export const sampleWithRequiredData: IMeta = {
  id: 17187,
  areaEnem: 'HUMANAS',
  nota: 8277,
};

export const sampleWithPartialData: IMeta = {
  id: 15622,
  areaEnem: 'NATUREZA',
  nota: 14505,
};

export const sampleWithFullData: IMeta = {
  id: 32703,
  areaEnem: 'LINGUAGENS',
  nota: 406,
};

export const sampleWithNewData: NewMeta = {
  areaEnem: 'HUMANAS',
  nota: 27853,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
